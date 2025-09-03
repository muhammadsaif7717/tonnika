'use client'
import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X, Heart, } from 'lucide-react';
import ThemeToggler from './ThemeToggler';
import Link from 'next/link';


// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(3); // Mock cart count
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { name: 'Bangles', href: '/bangles', hasDropdown: true },
    // { name: 'Cosmetics', href: '/cosmetics', hasDropdown: true },
    { name: 'Products', href: '/products',hasDropdown:false },
    { name: 'About Us', href: '/about-us',hasDropdown:false  },
    { name: 'Contact Us', href: '/contact-us',hasDropdown:false  },
    { name: 'Blogs', href: '/blogs',hasDropdown:false  }
  ];

  const handleSearchSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-rose-100 dark:border-rose-900/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-400 to-rose-600 dark:from-rose-300 dark:to-rose-400 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                  Tonnika
                </h1>
                {/* Subtle underline animation */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-rose-600 dark:from-rose-300 dark:to-rose-400 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`text-gray-700 ${scrolled?'':'text-white'} dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative`}
                >
                  {item.name}
                  {/* Hover underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 dark:bg-rose-400 transition-all duration-300 group-hover:w-full" />
                </a>
                
                {/* Dropdown indicator for categories */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-rose-100 dark:border-rose-900/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-4">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                        {item.name === 'Bangles' ? 'Categories' : 'Products'}
                      </p>
                      <div className="space-y-2">
                        {item.name === 'Bangles' ? (
                          <>
                            <a href="/bangles/traditional" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 py-1">Traditional</a>
                            <a href="/bangles/modern" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 py-1">Modern</a>
                            <a href="/bangles/bridal" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 py-1">Bridal</a>
                          </>
                        ) : (
                          <>
                            <a href="/cosmetics/lipstick" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 py-1">Lipstick</a>
                            <a href="/cosmetics/foundation" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 py-1">Foundation</a>
                            <a href="/cosmetics/eyeshadow" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-rose-400 py-1">Eyeshadow</a>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            
            {/* Desktop Search - Hidden on mobile */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 text-gray-700 ${scrolled?'':'text-white'} dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 relative group`}
                aria-label="Search"
              >
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="absolute inset-0 rounded-full bg-rose-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
              </button>
              
              {/* Enhanced Desktop Search Dropdown */}
              <div className={`absolute right-0 top-full mt-3 transition-all duration-300 transform ${
                isSearchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              }`}>
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-rose-100 dark:border-rose-900/20 p-6 w-96">
                  <div className="space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search bangles, cosmetics, gift sets..."
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                        autoFocus={isSearchOpen}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                      />
                    </div>
                    
                    {/* Quick Search Suggestions */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Popular Searches</p>
                      <div className="flex flex-wrap gap-2">
                        {['Traditional Bangles', 'Bridal Sets', 'Red Lipstick', 'Gift Boxes'].map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => setSearchQuery(suggestion)}
                            className="px-3 py-1.5 text-xs bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors duration-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={handleSearchSubmit}
                      className="w-full py-2 px-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <button className={`p-2 ${scrolled?'':'text-white'} text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 relative group`}>
              <Heart className="w-5 h-5 group-hover:fill-current transition-all duration-200 group-hover:scale-110" />
              <span className="absolute inset-0 rounded-full bg-rose-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggler />

            {/* Cart */}
            <button className={`p-2 ${scrolled?'':'text-white'} text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 relative group`}>
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute inset-0 rounded-full bg-rose-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Account */}
            <button className={`hidden lg:block p-2 ${scrolled?'':'text-white'} text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 relative group`}>
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="absolute inset-0 rounded-full bg-rose-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-200 relative group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 rounded-full bg-rose-500/10 scale-0 group-hover:scale-100 transition-transform duration-200"></span>
              {isMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-rose-100 dark:border-rose-900/20">
            
            {/* Mobile Search Bar */}
            <div className="px-3 py-2 mb-4">
              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search bangles, cosmetics..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm transition-all duration-200"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
                  />
                </div>
                
                {/* Mobile Quick Suggestions */}
                <div className="flex flex-wrap gap-1.5">
                  {['Bangles', 'Lipstick', 'Bridal', 'Gifts'].map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-2.5 py-1 text-xs bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={handleSearchSubmit}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-medium rounded-lg transition-all duration-200 text-sm"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-rose-100 dark:border-rose-900/20 my-3"></div>

            {/* Navigation Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-md transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Account Link */}
            <div className="border-t border-rose-100 dark:border-rose-900/20 pt-3 mt-3">
              <a
                href="/account"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-md transition-colors duration-200"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;