"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// Demo JSON product data
const demoProducts = [
  {
    id: 1,
    name: "Natural Glow Foundation",
    category: "Foundation",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1611599539601-12d43b1a2b70?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Organic Serum",
    category: "Serum",
    price: 39.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611599539489-b1c1e67c62e1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Handcrafted Bangles Set",
    category: "Bangles",
    price: 49.99,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1600180758895-5c30e7d07a45?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Moisturizing Cream",
    category: "Moisturizer",
    price: 24.99,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Concealer Stick",
    category: "Concealer",
    price: 19.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1611599539602-9cfa8a7f5a8b?auto=format&fit=crop&w=400&q=80",
  },
];

const categories = ["All", "Foundation", "Concealer", "Serum", "Moisturizer", "Bangles"];

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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <div className="flex space-x-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-pink-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <Star size={16} className="text-yellow-400" />
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
              <div className="mt-2 font-bold text-pink-500">${product.price}</div>
              <button className="mt-3 w-full bg-pink-500 text-white py-2 rounded-full font-medium hover:bg-pink-600 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
}