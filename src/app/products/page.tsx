'use client'
import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Heart, Star, SlidersHorizontal, Filter, X, ArrowUpDown, Sparkles } from 'lucide-react';
import { Product } from '@/types';
import Image from 'next/image';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Products', count: 89, color: 'from-sage-500 to-terracotta' },
    { id: 'bangles', name: 'Handcrafted Bangles', count: 42, color: 'from-terracotta to-peach-200' },
    { id: 'cosmetics', name: 'Premium Cosmetics', count: 28, color: 'from-sage-400 to-sage-600' },
    { id: 'gift-sets', name: 'Curated Gift Sets', count: 19, color: 'from-forest-400 to-sage-500' }
  ];

  const filteredProducts = useMemo(() => {
    const products: Product[] = [
      {
        id: 1,
        name: 'Rose Gold Elegance Bangles',
        category: 'bangles',
        price: 89,
        originalPrice: 120,
        rating: 4.8,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
        artisan: 'Priya Sharma',
        featured: true,
        new: false,
        sale: true
      },
      {
        id: 2,
        name: 'Midnight Luxe Lipstick Collection',
        category: 'cosmetics',
        price: 45,
        originalPrice: 45,
        rating: 4.9,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
        artisan: 'Beauty Collective',
        featured: true,
        new: true,
        sale: false
      },
      {
        id: 3,
        name: 'Traditional Kundan Bangles Set',
        category: 'bangles',
        price: 156,
        originalPrice: 156,
        rating: 4.7,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
        artisan: 'Rajesh Kumar',
        featured: false,
        new: false,
        sale: false
      },
      {
        id: 4,
        name: 'Champagne Glow Foundation',
        category: 'cosmetics',
        price: 68,
        originalPrice: 85,
        rating: 4.6,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
        artisan: 'Luxe Formulas',
        featured: false,
        new: false,
        sale: true
      },
      {
        id: 5,
        name: 'Bridal Bliss Gift Set',
        category: 'gift-sets',
        price: 234,
        originalPrice: 234,
        rating: 4.9,
        reviews: 43,
        image: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=400&h=400&fit=crop',
        artisan: 'Curated Collection',
        featured: true,
        new: true,
        sale: false
      },
      {
        id: 6,
        name: 'Minimalist Silver Cuffs',
        category: 'bangles',
        price: 72,
        originalPrice: 72,
        rating: 4.5,
        reviews: 91,
        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
        artisan: 'Modern Craft Co.',
        featured: false,
        new: false,
        sale: false
      },
      {
        id: 7,
        name: 'Organic Skincare Starter Set',
        category: 'gift-sets',
        price: 145,
        originalPrice: 180,
        rating: 4.8,
        reviews: 78,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
        artisan: 'Pure Elements',
        featured: false,
        new: false,
        sale: true
      },
      {
        id: 8,
        name: 'Velvet Matte Lip Collection',
        category: 'cosmetics',
        price: 52,
        originalPrice: 52,
        rating: 4.7,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        artisan: 'Color Studio',
        featured: false,
        new: true,
        sale: false
      }
    ];

    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.artisan.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const toggleWishlist = (productId: number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-sage-100 dark:border-gray-700">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          height={500}
          width={500}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.new && (
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              NEW
            </span>
          )}
          {product.sale && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm animate-pulse">
              SALE
            </span>
          )}
          {product.featured && (
            <span className="bg-gradient-to-r from-terracotta to-peach-200 dark:from-copper-glow-400 dark:to-warm-nude-200 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              FEATURED
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg transform hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-300 ${
              wishlist.has(product.id) 
                ? 'text-red-500 fill-red-500' 
                : 'text-gray-600 dark:text-gray-300'
            }`}
          />
        </button>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <button className="bg-sage-600 dark:bg-sage-500 hover:bg-sage-700 dark:hover:bg-sage-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
              Quick View
            </button>
            <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-sm text-sage-500 dark:text-sage-400 mb-2 font-medium">
          by {product.artisan}
        </div>
        <h3 className="font-bold text-lg text-charcoal-900 dark:text-white mb-3 line-clamp-2 group-hover:text-sage-600 dark:group-hover:text-sage-400 transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-sage-600 dark:text-sage-400 font-medium">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-terracotta dark:text-copper-glow-400">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-lg text-sage-500 dark:text-sage-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.originalPrice > product.price && (
            <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full font-bold">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-beige-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-sage-600 via-terracotta to-peach-200 dark:from-sage-700 dark:via-copper-glow-600 dark:to-warm-nude-200 text-white py-24">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-peach-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span>Premium Collection</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Artisan Collection</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover handcrafted beauty and accessories that celebrate traditional artistry with contemporary elegance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Search and Filters Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-sage-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sage-500 dark:text-sage-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products, artisans, ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-sage-200 dark:border-gray-600 bg-sage-50 dark:bg-gray-700 text-charcoal-900 dark:text-white placeholder-sage-400 dark:placeholder-sage-500 focus:ring-2 focus:ring-sage-300 dark:focus:ring-sage-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* View and Filter Controls */}
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex bg-sage-100 dark:bg-gray-700 rounded-xl border border-sage-200 dark:border-gray-600 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-sage-600 dark:bg-sage-500 text-white shadow-lg'
                      : 'text-sage-600 dark:text-sage-300 hover:bg-sage-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-sage-600 dark:bg-sage-500 text-white shadow-lg'
                      : 'text-sage-600 dark:text-sage-300 hover:bg-sage-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-sage-100 dark:bg-gray-700 border border-sage-200 dark:border-gray-600 text-sage-700 dark:text-sage-300 px-4 py-3 rounded-xl pr-10 focus:ring-2 focus:ring-sage-300 dark:focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sage-500 dark:text-sage-400 pointer-events-none" />
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-sage-600 dark:bg-sage-500 text-white rounded-xl hover:bg-sage-700 dark:hover:bg-sage-600 transition-all duration-300 shadow-lg"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-sage-100 dark:border-gray-700 sticky top-8">
              {/* Filter Header */}
              <div className="flex items-center justify-between p-6 border-b border-sage-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-charcoal-900 dark:text-white flex items-center gap-2">
                  <Filter className="w-5 h-5 text-sage-600 dark:text-sage-400" />
                  Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-2 text-sage-500 dark:text-sage-400 hover:text-sage-700 dark:hover:text-sage-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Categories */}
                <div>
                  <h4 className="font-bold text-charcoal-900 dark:text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sage-600 dark:text-sage-400" />
                    Categories
                  </h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${
                          selectedCategory === category.id
                            ? 'bg-gradient-to-r from-sage-100 to-peach-50 dark:from-sage-800/50 dark:to-warm-nude-200/10 text-sage-700 dark:text-sage-300 border-sage-300 dark:border-sage-600 shadow-md'
                            : 'text-sage-600 dark:text-sage-300 hover:bg-sage-50 dark:hover:bg-gray-700/50 border-sage-100 dark:border-gray-700'
                        }`}
                      >
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{category.name}</span>
                          {selectedCategory === category.id && (
                            <div className={`mt-1 h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`}></div>
                          )}
                        </div>
                        <span className="text-sm bg-sage-200 dark:bg-sage-700 text-sage-700 dark:text-sage-300 px-3 py-1 rounded-full font-medium">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-bold text-charcoal-900 dark:text-white mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-sage-600 dark:text-sage-400 font-medium">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-sage-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="flex-1 px-3 py-2 bg-sage-50 dark:bg-gray-700 border border-sage-200 dark:border-gray-600 rounded-lg text-sm"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="flex-1 px-3 py-2 bg-sage-50 dark:bg-gray-700 border border-sage-200 dark:border-gray-600 rounded-lg text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 500]);
                    setSortBy('featured');
                  }}
                  className="w-full bg-sage-600 dark:bg-sage-500 hover:bg-sage-700 dark:hover:bg-sage-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-sage-100 dark:border-gray-700">
              <div className="text-sage-600 dark:text-sage-400 font-medium">
                Showing <span className="text-charcoal-900 dark:text-white font-bold">{filteredProducts.length}</span> products
                {selectedCategory !== 'all' && (
                  <span className="ml-2 text-sm bg-sage-100 dark:bg-sage-800 text-sage-600 dark:text-sage-300 px-2 py-1 rounded-full">
                    in {categories.find(c => c.id === selectedCategory)?.name}
                  </span>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-sage-100 dark:border-gray-700">
                <div className="text-8xl text-sage-300 dark:text-sage-600 mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-charcoal-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-sage-600 dark:text-sage-400 mb-6 max-w-md mx-auto">
                  We couldn{`'`}t find any products matching your criteria. Try adjusting your filters or search terms.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 500]);
                  }}
                  className="bg-gradient-to-r from-sage-600 to-terracotta dark:from-sage-500 dark:to-copper-glow-400 hover:from-sage-700 hover:to-terracotta-600 dark:hover:from-sage-600 dark:hover:to-copper-glow-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-sage-600 to-terracotta dark:from-sage-500 dark:to-copper-glow-400 hover:from-sage-700 hover:to-terracotta-600 dark:hover:from-sage-600 dark:hover:to-copper-glow-500 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-br from-sage-600 via-terracotta to-peach-200 dark:from-sage-700 dark:via-copper-glow-600 dark:to-warm-nude-200 py-20 mt-20">
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span>Exclusive Updates</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Updated with New Collections
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Be the first to discover our latest handcrafted pieces, exclusive offers, and beauty tips from our artisan community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border-0 text-charcoal-900 placeholder-sage-500 focus:ring-2 focus:ring-white/50 backdrop-blur-sm bg-white/90 dark:bg-white/95"
            />
            <button className="bg-white text-sage-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;