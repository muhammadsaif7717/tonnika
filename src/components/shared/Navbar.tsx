'use client'
import React, { useState, useEffect } from 'react'
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount] = useState(3)
  // const [search, setSearch] = useState('')
  // const [categories] = useState([
  //   { name: 'Foundation', icon: '🧴' },
  //   { name: 'Concealer', icon: '💄' },
  //   { name: 'Serum', icon: '🧪' },
  //   { name: 'Moisturizer', icon: '🧴' },
  //   { name: 'Bangles', icon: '💍' },
  //   { name: 'Accessories', icon: '✨' }
  // ])

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

  // const handleSearchSubmit = (e: React.FormEvent | React.MouseEvent) => {
  //   e.preventDefault()
  //   if (search.trim()) {
  //     router.push(`/shop?search=${encodeURIComponent(search)}`)
  //     setSearch('')
  //     setIsMenuOpen(false)
  //   }
  // }

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? `bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg 
               border-b border-sage-100 dark:border-gray-700`
            : `bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm`
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className={`
                lg:hidden p-2 transition-colors rounded-md
                text-gray-700 hover:text-sage-600 
                dark:text-gray-300 dark:hover:text-sage-400
                hover:bg-sage-50 dark:hover:bg-gray-800
              `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer group">
              <h1 className={`
                text-2xl lg:text-3xl font-bold font-serif tracking-wide transition-all duration-300
                text-sage-600 group-hover:text-sage-700 
                dark:text-sage-400 dark:group-hover:text-sage-300
                group-hover:scale-105
              `}>
                Tonnika
              </h1>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-medium transition-all duration-300 group
                    text-gray-700 hover:text-sage-600 
                    dark:text-gray-300 dark:hover:text-sage-400
                    after:content-[''] after:absolute after:w-0 after:h-[2px] 
                    after:left-0 after:-bottom-1 after:transition-all after:duration-300
                    after:bg-sage-600 dark:after:bg-sage-400
                    hover:after:w-full
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-3">

              {/* Search (Desktop) */}
              {/* <form onSubmit={handleSearchSubmit} className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`
                    w-64 pl-4 pr-12 py-2 rounded-full transition-all duration-300
                    bg-sage-50 border border-sage-200 
                    dark:bg-gray-800 dark:border-gray-600
                    text-gray-700 placeholder-sage-400 
                    dark:text-gray-300 dark:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-sage-300 
                    dark:focus:ring-sage-500 focus:border-transparent
                  `}
                />
                <button
                  type="submit"
                  className={`
                    absolute right-1 top-1/2 -translate-y-1/2 rounded-full p-2 
                    flex items-center justify-center transition-all duration-300
                    bg-sage-600 hover:bg-sage-700 text-white
                    dark:bg-sage-500 dark:hover:bg-sage-600
                    transform hover:scale-105 active:scale-95
                  `}
                >
                  <Search size={16} />
                </button>
              </form> */}

              {/* Theme Toggler */}
              <ThemeToggler />

              {/* Wishlist */}
              <button className={`
                relative p-2 rounded-full transition-all duration-300 transform
                text-gray-700 hover:text-sage-600 
                dark:text-gray-300 dark:hover:text-sage-400
                hover:bg-sage-50 dark:hover:bg-gray-800
                hover:scale-105 active:scale-95
                group
              `}>
                <Heart size={20} className="group-hover:fill-current transition-all duration-300" />
                <span className={`
                  absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-medium
                  flex items-center justify-center transition-all duration-300
                  bg-terracotta text-white dark:bg-orange-500 dark:text-white
                  animate-pulse
                `}>
                  2
                </span>
              </button>

              {/* Cart */}
              <button className={`
                relative p-2 rounded-full transition-all duration-300 transform
                text-gray-700 hover:text-sage-600 
                dark:text-gray-300 dark:hover:text-sage-400
                hover:bg-sage-50 dark:hover:bg-gray-800
                hover:scale-105 active:scale-95
              `}>
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className={`
                    absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-medium
                    flex items-center justify-center transition-all duration-300
                    bg-terracotta text-white dark:bg-orange-500 dark:text-white
                    animate-pulse scale-110
                  `}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User */}
              <button className={`
                p-2 rounded-full transition-all duration-300 transform
                text-gray-700 hover:text-sage-600 
                dark:text-gray-300 dark:hover:text-sage-400
                hover:bg-sage-50 dark:hover:bg-gray-800
                hover:scale-105 active:scale-95
              `}>
                <User size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300
            bg-white dark:bg-gray-900 
            border-t border-sage-100 dark:border-gray-700 
            shadow-lg
            ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 pt-0 py-6 space-y-4">
            {/* Mobile Search */}
            {/* <form onSubmit={handleSearchSubmit} className="relative md:hidden">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`
                  w-full pl-4 pr-12 py-3 rounded-lg transition-all duration-300
                  bg-sage-50 border border-sage-200 
                  dark:bg-gray-800 dark:border-gray-600
                  text-gray-700 placeholder-sage-400 
                  dark:text-gray-300 dark:placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-sage-300 
                  dark:focus:ring-sage-500 focus:border-transparent
                `}
              />
              <button
                type="submit"
                className={`
                  absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 
                  flex items-center justify-center transition-all duration-300
                  bg-sage-600 hover:bg-sage-700 text-white
                  dark:bg-sage-500 dark:hover:bg-sage-600
                  transform hover:scale-105 active:scale-95
                `}
              >
                <Search size={16} />
              </button>
            </form> */}

            {/* Categories */}
            {/* <div>
              <h3 className={`
                font-semibold mb-3 text-sage-600 dark:text-sage-400
              `}>
                Shop Categories
              </h3>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href="#"
                    className={`
                      flex items-center space-x-2 p-2 rounded-md transition-colors
                      text-gray-700 hover:text-sage-600 
                      dark:text-gray-300 dark:hover:text-sage-400
                      hover:bg-sage-50 dark:hover:bg-gray-800
                    `}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="text-sm font-medium">{category.name}</span>
                  </a>
                ))}
              </div>
            </div> */}

            {/* Navigation Links */}
            <div className="border-t border-sage-100 dark:border-gray-700 pt-4">
              {navLinks.map((link) => (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  key={link.href}
                  href={link.href}
                  className={`
                    block py-3 px-2 rounded-md font-medium transition-all duration-300
                    text-gray-700 hover:text-sage-600 
                    dark:text-gray-300 dark:hover:text-sage-400
                    hover:bg-sage-50 dark:hover:bg-gray-800
                    hover:translate-x-1
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  )
}

export default Navbar