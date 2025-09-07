'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating SEO keyword suggestions.
 *
 * - seoKeywordSuggestions - A function that generates SEO keyword suggestions based on a text description.
 * - SEOKeywordSuggestionsInput - The input type for the seoKeywordSuggestions function.
 * - SEOKeywordSuggestionsOutput - The return type for the seoKeywordSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SEOKeywordSuggestionsInputSchema = z.object({
  textDescription: z
    .string()
    .describe(
      'A detailed text description of the website or business for which SEO keywords are needed.'
    ),
});

export type SEOKeywordSuggestionsInput = z.infer<
  typeof SEOKeywordSuggestionsInputSchema
>;

const SEOKeywordSuggestionsOutputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'A comma-separated list of SEO keywords relevant to the provided text description.'
    ),
});

export type SEOKeywordSuggestionsOutput = z.infer<
  typeof SEOKeywordSuggestionsOutputSchema
>;

export async function seoKeywordSuggestions(
  input: SEOKeywordSuggestionsInput
): Promise<SEOKeywordSuggestionsOutput> {
  return seoKeywordSuggestionsFlow(input);
}

const seoKeywordSuggestionsPrompt = ai.definePrompt({
  name: 'seoKeywordSuggestionsPrompt',
  input: {schema: SEOKeywordSuggestionsInputSchema},
  output: {schema: SEOKeywordSuggestionsOutputSchema},
  prompt: `You are an SEO expert. Generate a comma-separated list of SEO keywords based on the following website/business description: {{{textDescription}}}.  The keywords should be specific and relevant to industrial automation, control systems, and the industries served by Xaloo Technologies (Mining, Water & Wastewater, Food & Beverage, Telecommunications, Pharmaceuticals).`,
});

const seoKeywordSuggestionsFlow = ai.defineFlow(
  {
    name: 'seoKeywordSuggestionsFlow',
    inputSchema: SEOKeywordSuggestionsInputSchema,
    outputSchema: SEOKeywordSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await seoKeywordSuggestionsPrompt(input);
    return output!;
  }
);
