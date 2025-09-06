'use client'
import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [search, setSearch] = useState('')
  const [categories] = useState([
    { name: 'Foundation', icon: '🧴' },
    { name: 'Concealer', icon: '💄' },
    { name: 'Serum', icon: '🧪' },
    { name: 'Moisturizer', icon: '🧴' },
    { name: 'Bangles', icon: '💍' },
    { name: 'Accessories', icon: '✨' }
  ])

  const navLinks = [
    { name: 'Shop', href: '/shop' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Blogs', href: '/blogs' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/shop?search=${encodeURIComponent(search)}`)
      setSearch('')
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-sage-100'
            : 'bg-white/80 backdrop-blur-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className="lg:hidden p-2 text-charcoal hover:text-sage-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer">
              <h1 className="text-2xl lg:text-3xl font-bold text-sage-600 font-serif tracking-wide hover:text-sage-700 transition-colors">
                Tonnika
              </h1>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-charcoal hover:text-sage-600 transition-colors font-medium after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-sage-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">

              {/* Search */}
              {/* <form onSubmit={handleSearchSubmit} className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-64 pl-4 pr-12 py-2 bg-sage-50 border border-sage-200 rounded-full text-charcoal placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-300"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-sage-600 hover:bg-sage-700 text-black rounded-full p-2 flex items-center justify-center transition-colors"
                >
                  <Search size={16} />
                </button>
              </form> */}




              {/* Wishlist */}
              <button className="relative p-2 text-charcoal hover:text-sage-600 transition-colors rounded-full hover:bg-sage-50">
                <Heart size={20} />
                <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  2
                </span>
              </button>

              {/* Cart */}
              <button className="relative p-2 text-charcoal hover:text-sage-600 transition-colors rounded-full hover:bg-sage-50">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-terracotta text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User */}
              <button className="p-2 text-charcoal hover:text-sage-600 transition-colors rounded-full hover:bg-sage-50">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-sage-100 shadow-lg overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            {/* <form onSubmit={handleSearchSubmit} className="relative md:hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-sage-50 border border-sage-200 rounded-lg text-charcoal placeholder-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-sage-600 hover:bg-sage-700 text-black rounded-full p-2 flex items-center justify-center transition-colors"
              >
                <Search size={16} />
              </button>
            </form> */}

            {/* Categories */}
            {/* <div>
              <h3 className="text-sage-600 font-semibold mb-2">Shop Categories</h3>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href="#"
                    className="flex items-center space-x-2 p-2 text-charcoal hover:text-sage-600 transition-colors"
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </a>
                ))}
              </div>
            </div> */}

            {/* Links */}
            {navLinks.map((link) => (
              <Link
              onClick={()=>setIsMenuOpen(false)}
                key={link.href}
                href={link.href}
                className="block py-2 text-charcoal hover:text-sage-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Navbar
