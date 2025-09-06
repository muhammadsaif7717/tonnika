'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, Star } from 'lucide-react';

const newProducts = [
  {
    id: 1,
    name: 'Rose Glow Serum',
    price: '$28.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    badge: 'New',
  },
  {
    id: 2,
    name: 'Bamboo Bangle Set',
    price: '$34.00',
image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    badge: 'Handcrafted',
  },
  {
    id: 3,
    name: 'Sandalwood Cleanser',
    price: '$22.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    badge: 'Best Seller',
  },
  {
    id: 4,
    name: 'Glow Drops Oil',
    price: '$30.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    rating: 5.0,
    badge: 'Limited',
  },
];

const NewProducts = () => {
  return (
    <section className="py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2A2A2A] mb-4">New Arrivals</h2>
          <p className="text-lg text-[#8B9D8A]">
            Handpicked beauty and accessory essentials crafted with care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                />
                <span className="absolute top-3 left-3 bg-[#D4806B] text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  {product.badge}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#2A2A2A]">{product.name}</h3>
                <p className="text-[#D4806B] font-medium mt-1">{product.price}</p>

                <div className="flex items-center space-x-1 text-yellow-500 mt-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? '#FACC15' : 'none'}
                      stroke="#FACC15"
                    />
                  ))}
                  <span className="text-sm text-[#8B9D8A] ml-1">({product.rating})</span>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <button className="flex items-center space-x-2 bg-[#D4806B] text-white px-4 py-2 rounded-full text-sm hover:bg-[#C06B56] transition">
                    <ShoppingBag size={16} />
                    <span>Add to cart</span>
                  </button>
                  <button className="text-sm text-[#8B9D8A] hover:text-[#2A2A2A] transition">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
