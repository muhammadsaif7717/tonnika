'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, Heart, Eye, Sun, Moon, Sparkles, ArrowRight } from 'lucide-react';

const newProducts = [
  {
    id: 1,
    name: 'Rose Glow Serum',
    price: '$28.00',
    originalPrice: '$35.00',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    reviews: 124,
    badge: 'New',
    badgeColor: 'bg-green-600', // Forest Green from theme
    description: 'Luxurious rose-infused serum for radiant skin',
  },
  {
    id: 2,
    name: 'Bamboo Bangle Set',
    price: '$34.00',
    originalPrice: '$42.00',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 89,
    badge: 'Handcrafted',
    badgeColor: 'bg-orange-300', // Soft Peach from theme
    description: 'Sustainable bamboo bangles with intricate patterns',
  },
  {
    id: 3,
    name: 'Sandalwood Cleanser',
    price: '$22.00',
    originalPrice: '$22.00',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    rating: 4.2,
    reviews: 67,
    badge: 'Best Seller',
    badgeColor: 'bg-green-500', // Sage Green from theme
    description: 'Gentle sandalwood cleanser for all skin types',
  },
  {
    id: 4,
    name: 'Glow Drops Oil',
    price: '$30.00',
    originalPrice: '$38.00',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
    rating: 5.0,
    reviews: 156,
    badge: 'Limited',
    badgeColor: 'bg-orange-500', // Terracotta from theme
    description: 'Illuminating face oil with natural botanicals',
  },
];

const NewProducts = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleWishlist = (productId: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <section className="py-20 bg-gradient-to-br from-stone-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500">
        {/* Decorative Background Elements - Using Theme Colors */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-400/30 dark:bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/20 dark:bg-green-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header with Dark Mode Toggle */}
          <div className="flex justify-between items-start mb-12">
            <div className="text-center flex-1">
              <div className="inline-flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-orange-400/20 dark:border-gray-600/20">
                <Sparkles size={16} className="text-orange-500 animate-pulse" />
                <span className="text-gray-800 dark:text-gray-200">Fresh Collection</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-green-600 to-orange-500 dark:from-green-400 dark:to-orange-400 bg-clip-text text-transparent">
                  New Arrivals
                </span>
              </h2>
              
              <p className="text-xl text-green-600 dark:text-green-300 max-w-2xl mx-auto leading-relaxed">
                Handpicked beauty and accessory essentials crafted with care and passion by skilled artisans
              </p>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-orange-400" />
              ) : (
                <Moon className="w-5 h-5 text-green-600" />
              )}
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-100 dark:border-gray-700/50"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge - Using Theme Colors */}
                  <div className="absolute top-4 left-4">
                    <span className={`${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse`}>
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 dark:bg-gray-700/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 shadow-lg transform hover:scale-110"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-300 ${
                        wishlist.has(product.id)
                          ? 'text-red-500 fill-red-500'
                          : 'text-green-600 dark:text-green-300'
                      }`}
                    />
                  </button>
                  
                  {/* Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Sale Badge */}
                  {product.originalPrice !== product.price && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        SALE
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-1 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="text-sm text-green-600 dark:text-green-400 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(product.rating) ? '#FACC15' : 'none'}
                          stroke="#FACC15"
                          className="transition-transform duration-200 hover:scale-110"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                      {product.price}
                    </span>
                    {product.originalPrice !== product.price && (
                      <span className="text-lg text-green-600 dark:text-green-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group/btn">
                      <ShoppingBag className="w-4 h-4 group-hover/btn:animate-bounce" />
                      <span>Add to Cart</span>
                    </button>
                    
                    <button className="w-full text-green-600 dark:text-green-300 hover:text-gray-800 dark:hover:text-white py-2 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group/details">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/details:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 hover:from-orange-600 hover:via-orange-500 hover:to-orange-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-3">
                <span>Explore All Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/70 to-stone-50/70 dark:from-gray-800/70 dark:to-gray-900/70 backdrop-blur-sm rounded-3xl p-12 border border-orange-400/20 dark:border-gray-600/20 shadow-2xl">
              <div className="inline-flex items-center space-x-2 bg-orange-500/10 dark:bg-orange-500/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} className="text-orange-500 animate-pulse" />
                <span className="text-orange-500 dark:text-orange-400">Stay Connected</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                Get Notified About New Arrivals
              </h3>
              
              <p className="text-green-600 dark:text-green-300 mb-8 text-lg">
                Be the first to discover our latest handcrafted pieces and exclusive offers
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border border-green-200 dark:border-gray-600/20 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-white placeholder-green-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewProducts;