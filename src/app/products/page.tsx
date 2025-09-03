'use client'
import React, { useState, useMemo } from 'react';
import { Search, Grid, List, Heart, Star,  SlidersHorizontal } from 'lucide-react';
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
    { id: 'all', name: 'All Products', count: 89 },
    { id: 'bangles', name: 'Handcrafted Bangles', count: 42 },
    { id: 'cosmetics', name: 'Premium Cosmetics', count: 28 },
    { id: 'gift-sets', name: 'Curated Gift Sets', count: 19 }
  ];




  const filteredProducts = useMemo(() => {
      const products:Product[] = [
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

    // Sort products
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

  const toggleWishlist = (productId:number) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
                        height={500}
                        width={500}
      
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.new && (
            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.sale && (
            <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
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
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
              Quick View
            </button>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          by {product.artisan}
        </div>
        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
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
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-600 dark:to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Artisan Collection</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Discover handcrafted beauty and accessories that celebrate traditional artistry with contemporary elegance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters Header */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products, artisans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-l-lg transition-colors duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-rose-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-r-lg transition-colors duration-300 ${
                  viewMode === 'list'
                    ? 'bg-rose-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Filter Products
              </h3>

              {/* Categories */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Category</h4>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-l-4 border-rose-500'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="text-gray-600 dark:text-gray-400">
                Showing {filteredProducts.length} products
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
              <div className="text-center py-16">
                <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 500]);
                  }}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-600 dark:to-orange-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with New Collections
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Be the first to discover our latest handcrafted pieces and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-rose-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;