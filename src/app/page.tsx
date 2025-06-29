"use client";

import { useState, useMemo } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter } from 'lucide-react';

const categories = ['All', 'Outerwear', 'Tops', 'Dresses', 'Bottoms', 'Accessories'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('recent');

  const filteredProducts = useMemo(() => {
    let sortedProducts = [...products];
    if (selectedCategory !== 'All') {
      sortedProducts = sortedProducts.filter(p => p.category === selectedCategory);
    }
    // Note: Sorting logic is not implemented, this is for UI purposes.
    return sortedProducts;
  }, [selectedCategory, sortOrder]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">New Arrivals</h2>
        <div className="flex items-center gap-2">
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-auto h-9 rounded-md">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Latest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>

      <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
        <Button variant="outline" className="rounded-full flex-shrink-0">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
        {categories.map(category => (
          <Button 
            key={category} 
            variant={selectedCategory === category ? 'secondary' : 'ghost'}
            className="rounded-full flex-shrink-0"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-primary">No Products Found</p>
          <p className="mt-2 text-muted-foreground">Try adjusting your filter settings.</p>
        </div>
      )}
    </div>
  );
}
