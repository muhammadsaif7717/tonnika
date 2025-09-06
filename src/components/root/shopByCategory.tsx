'use client';

import React from 'react';
import Image from 'next/image';
import { Droplet, Leaf, BadgePercent, WandSparkles } from 'lucide-react';

const categories = [
  {
    name: 'Foundation',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <BadgePercent className="w-6 h-6 text-[#8B9D8A]" />,
  },
  {
    name: 'Serum',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <Droplet className="w-6 h-6 text-[#8B9D8A]" />,
  },
  {
    name: 'Moisturizer',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <Leaf className="w-6 h-6 text-[#8B9D8A]" />,
  },
  {
    name: 'Concealer',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <WandSparkles className="w-6 h-6 text-[#8B9D8A]" />,
  },
];

const ShopByCategories = () => {
  return (
    <section className="py-20 bg-[#FDF7F5]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4 animate-fade-in-up">
          Shop by Categories
        </h2>
        <p className="text-lg text-[#8B9D8A] max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
          Discover curated beauty essentials designed for your unique skincare journey.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 animate-fade-in-up delay-400">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer"
            >
              <div className="relative w-full h-52">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#2A2A2A]">{cat.name}</h3>
                <div className="bg-[#ECF0EC] p-2 rounded-full">
                  {cat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;
