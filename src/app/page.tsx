"use client";

import { useState, useMemo } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight">Discover Your Style</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">Browse our curated collection of fashion essentials.</p>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4 sticky top-[81px] bg-background/90 backdrop-blur-sm z-40 py-4 rounded-lg">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="pl-10 w-full h-11 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[220px] h-11 text-base">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl font-headline text-primary">No Products Found</p>
          <p className="mt-2 text-muted-foreground">Try adjusting your search or filter settings.</p>
        </div>
      )}
    </div>
  );
}
