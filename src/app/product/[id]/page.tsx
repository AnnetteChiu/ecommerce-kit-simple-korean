import { products } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { StyleGuide } from '@/components/StyleGuide';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        <div className="sticky top-24">
            <div className="rounded-lg overflow-hidden shadow-lg bg-card aspect-[3/4]">
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1067}
                    className="object-cover w-full h-full"
                    data-ai-hint={product.dataAiHint}
                    priority
                    unoptimized
                />
            </div>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="space-y-3">
            <p className="text-lg font-semibold">{product.brand}</p>
            <Badge variant="outline" className="text-sm">{product.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">{product.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
          
          <div className="flex items-baseline gap-4">
             <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>

          <Separator />
          
          <div className="pt-2">
            <Button size="lg" className="w-full md:w-auto text-lg py-7 px-10">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="mt-16 md:mt-24">
        <StyleGuide productName={product.name} productDescription={product.description} />
      </div>
    </div>
  );
}
