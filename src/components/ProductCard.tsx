import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <Card className="h-full flex flex-col overflow-hidden bg-transparent border-0 shadow-none rounded-none">
        <div className="overflow-hidden aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={800}
            className="object-cover w-full h-full"
            data-ai-hint={product.dataAiHint}
          />
        </div>
        <CardContent className="p-2 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-sm">{product.brand}</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">{product.name}</p>
              <p className="text-sm font-bold mt-1">${Math.round(product.price)}</p>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 hover:bg-transparent text-muted-foreground hover:text-primary">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
