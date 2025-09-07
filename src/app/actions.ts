'use server';

import { seoKeywordSuggestions, type SEOKeywordSuggestionsInput } from '@/ai/flows/seo-keyword-suggestions';

export async function generateKeywordsAction(
  input: SEOKeywordSuggestionsInput
): Promise<{ keywords?: string; error?: string; }> {
  if (!input.textDescription || input.textDescription.trim().length < 20) {
    return { error: 'Please provide a description of at least 20 characters.' };
  }
  
  try {
    const result = await seoKeywordSuggestions(input);
    return { keywords: result.keywords };
  } catch (e) {
    console.error("Error generating keywords:", e);
    return { error: 'An unexpected error occurred while generating keywords. Please try again later.' };
  }
}
