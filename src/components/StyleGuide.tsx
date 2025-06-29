import { generateRecommendations } from '@/ai/flows/generate-recommendations';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';
import { Separator } from './ui/separator';

type StyleGuideProps = {
  productName: string;
  productDescription: string;
};

export async function StyleGuide({ productName, productDescription }: StyleGuideProps) {
  let recommendations = [];
  try {
    const result = await generateRecommendations({ productName, productDescription });
    recommendations = result.recommendations || [];
  } catch (error) {
    console.error("Failed to generate recommendations:", error);
    return null;
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <Card className="bg-card/70 backdrop-blur-sm border-2 border-primary/20 shadow-lg">
        <CardHeader className="text-center">
            <div className="inline-block bg-primary text-primary-foreground rounded-full p-3 mx-auto mb-4">
                <Wand2 className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl text-primary">Style Guide</CardTitle>
            <CardDescription>AI-powered recommendations to complete your look.</CardDescription>
        </CardHeader>
        <CardContent>
            <Separator className="my-4" />
            <ul className="space-y-6">
            {recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-3 w-3 mt-2 rounded-full bg-primary" />
                    <div>
                        <h4 className="font-bold text-lg text-foreground">{rec.name}</h4>
                        <p className="text-muted-foreground">{rec.description}</p>
                    </div>
                </li>
            ))}
            </ul>
      </CardContent>
    </Card>
  );
}
