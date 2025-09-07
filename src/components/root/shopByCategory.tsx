'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Droplet, Leaf, BadgePercent, WandSparkles, ArrowRight, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'Foundation',
    description: 'Flawless coverage that feels like your skin',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <BadgePercent className="w-6 h-6" />,
    color: 'from-sage-400 to-sage-600',
    products: 24,
    trending: true
  },
  {
    name: 'Serum',
    description: 'Concentrated treatments for targeted care',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <Droplet className="w-6 h-6" />,
    color: 'from-peach-200 to-terracotta',
    products: 18,
    trending: false
  },
  {
    name: 'Moisturizer',
    description: 'Nourishing hydration for all skin types',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <Leaf className="w-6 h-6" />,
    color: 'from-forest-400 to-sage-600',
    products: 32,
    trending: false
  },
  {
    name: 'Concealer',
    description: 'Perfect coverage for blemish-free skin',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    icon: <WandSparkles className="w-6 h-6" />,
    color: 'from-terracotta to-peach-200',
    products: 16,
    trending: true
  },
  {
    name: 'Bangles',
    description: 'Handcrafted elegance for every occasion',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-copper-glow-400 to-warm-nude-200',
    products: 45,
    trending: true
  },
  {
    name: 'Accessories',
    description: 'Premium beauty tools and accessories',
    image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=400&fit=crop',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-muted-sage-400 to-sage-600',
    products: 28,
    trending: false
  }
];

const ShopByCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-beige-100 to-sage-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-300 dark:bg-sage-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-peach-200 dark:bg-warm-nude-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-sage-100 dark:bg-sage-800/50 text-sage-700 dark:text-sage-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-sage-200 dark:border-sage-600">
            <Sparkles size={16} className="animate-pulse" />
            <span>Curated Collections</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-sage-600 to-terracotta dark:from-sage-400 dark:to-copper-glow-400 bg-clip-text text-transparent">
              Shop by Categories
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-sage-600 dark:text-sage-300 max-w-3xl mx-auto leading-relaxed">
            Discover curated beauty essentials and handcrafted accessories designed for your unique skincare journey and personal style.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white dark:bg-gray-800 border border-sage-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Trending Badge */}
              {category.trending && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-terracotta to-peach-200 dark:from-copper-glow-400 dark:to-warm-nude-200 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  Trending
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Icon Overlay */}
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300`}>
                  {category.icon}
                </div>

                {/* Quick Action Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-charcoal-900 dark:text-white p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors duration-300">
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal-900 dark:text-white group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="text-sm text-sage-500 dark:text-sage-400 font-medium">
                    {category.products} items
                  </div>
                </div>
                
                <p className="text-sage-600 dark:text-sage-300 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Action Button */}
                <div className={`flex items-center text-sage-600 dark:text-sage-400 font-medium text-sm transition-all duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''}`}>
                  <span>Explore Collection</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>

                {/* Decorative Element */}
                <div className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full blur-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-sage-600 to-terracotta dark:from-sage-500 dark:to-copper-glow-400 hover:from-sage-700 hover:to-terracotta-600 dark:hover:from-sage-600 dark:hover:to-copper-glow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span>View All Categories</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopByCategories;