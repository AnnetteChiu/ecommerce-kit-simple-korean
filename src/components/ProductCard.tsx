import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="overflow-hidden aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={product.dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <Badge variant="secondary" className="mb-2">{product.category}</Badge>
          <CardTitle className="font-headline text-lg leading-tight text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-xl font-bold font-headline text-primary">${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
