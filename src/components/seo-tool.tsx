"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { generateKeywordsAction } from "@/app/actions";
import { Loader2, Wand2 } from "lucide-react";

export function SeoTool() {
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setKeywords([]);

    const result = await generateKeywordsAction({ textDescription: description });

    if (result.error) {
      setError(result.error);
    } else if (result.keywords) {
      setKeywords(result.keywords.split(',').map(k => k.trim()).filter(k => k));
    }
    
    setIsLoading(false);
  };

  return (
    <section id="seo-tool" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-12 w-12 text-accent" />
            <CardTitle className="text-3xl font-bold font-headline mt-4">AI-Powered SEO Keyword Generator</CardTitle>
            <CardDescription className="text-muted-foreground md:text-lg">
              Enter a description of your business or webpage to generate relevant SEO keywords.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="e.g., We provide industrial automation solutions in Botswana, specializing in PLC programming and SCADA systems for the mining industry..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                disabled={isLoading}
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Keywords"
                )}
              </Button>
            </form>
            {error && <p className="mt-4 text-center text-sm text-destructive">{error}</p>}
            {keywords.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-center">Suggested Keywords:</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
