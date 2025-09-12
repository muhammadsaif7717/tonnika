"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Search, ShoppingBag } from "lucide-react";

// Updated demo JSON product data with relevant Unsplash images
const demoProducts = [
  {
    id: 1,
    name: "Natural Glow Foundation",
    category: "Foundation",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
    description: "Lightweight, buildable coverage for natural-looking skin"
  },
  {
    id: 2,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    price: 39.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80",
    description: "Concentrated vitamin C serum for radiant, even-toned skin"
  },
  {
    id: 3,
    name: "Handcrafted Gold Bangles Set",
    category: "Bangles",
    price: 49.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
    description: "Elegant handcrafted bangles with traditional patterns"
  },
  {
    id: 4,
    name: "Hydrating Night Moisturizer",
    category: "Moisturizer",
    price: 24.99,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
    description: "Rich, nourishing moisturizer for overnight skin repair"
  },
  {
    id: 5,
    name: "Full Coverage Concealer",
    category: "Concealer",
    price: 19.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
    description: "Long-lasting concealer for flawless complexion"
  },
  {
    id: 6,
    name: "Rose Gold Hair Accessories",
    category: "Accessories",
    price: 34.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=400&q=80",
    description: "Premium hair accessories with rose gold finish"
  },
  {
    id: 7,
    name: "Organic Face Cleanser",
    category: "Cleanser",
    price: 22.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80",
    description: "Gentle organic cleanser suitable for all skin types"
  },
  {
    id: 8,
    name: "Silver Bracelet Collection",
    category: "Bangles",
    price: 59.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    description: "Handmade silver bracelets with intricate detailing"
  }
];

const categories = ["All", "Foundation", "Concealer", "Serum", "Moisturizer", "Bangles", "Accessories", "Cleanser"];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(demoProducts);

  useEffect(() => {
    let products = demoProducts;
    
    if (selectedCategory !== "All") {
      products = products.filter((p) => p.category === selectedCategory);
    }
    
    if (search.trim() !== "") {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    setFilteredProducts(products);
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 dark:bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-200 dark:bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-green-600 to-orange-500 dark:from-green-400 dark:to-orange-400 bg-clip-text text-transparent">
              Shop Collection
            </span>
          </h1>
          <p className="text-lg text-green-600 dark:text-green-300 max-w-2xl mx-auto">
            Discover our curated selection of handcrafted beauty products and premium accessories
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-6 lg:space-y-0">
          {/* Search Input */}
          <div className="relative w-full lg:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-green-500" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 dark:text-white placeholder-green-500 dark:placeholder-gray-400 transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-2">
            <div className="hidden lg:flex h-5 w-5"></div>
            <div className="flex space-x-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg transform scale-105"
                      : "bg-white/80 dark:bg-gray-800/80 text-green-700 dark:text-green-300 hover:bg-orange-100 dark:hover:bg-gray-700 border border-green-200 dark:border-gray-600 backdrop-blur-sm"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-6">
          <p className="text-green-600 dark:text-green-400 font-medium">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-stone-100 dark:border-gray-700"
            >
              {/* Product Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white px-4 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="text-sm text-green-600 dark:text-green-400 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < Math.floor(product.rating) ? '#FACC15' : 'none'}
                        stroke="#FACC15"
                        className="transition-transform duration-200"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {product.rating}
                  </span>
                </div>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                    ${product.price}
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group/btn">
                  <ShoppingBag className="w-4 h-4 group-hover/btn:animate-bounce" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-stone-100 dark:border-gray-700">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                No products found
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-6">
                Try adjusting your search or browse different categories
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}