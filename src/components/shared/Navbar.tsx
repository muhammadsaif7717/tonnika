'use client'
import React, { useState, useEffect } from 'react'
import { ShoppingCart, User, Menu, X, Heart } from 'lucide-react'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount] = useState(3);
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
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

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? `bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg 
               border-b border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30`
            : `bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-sm`
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
                text-[#2A2A2A] hover:text-[#8B9D8A] 
                dark:text-[#F5F5F5] dark:hover:text-[#6B7A6A]
                hover:bg-[#8B9D8A]/10 dark:hover:bg-[#2A2A2A]
              `}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 cursor-pointer group">
              <h1 className={`
                text-2xl lg:text-3xl font-bold font-['Playfair_Display'] tracking-wide transition-all duration-300
                text-[#8B9D8A] group-hover:text-[#D4806B] 
                dark:text-[#6B7A6A] dark:group-hover:text-[#C18B6B]
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
    relative font-medium transition-all duration-300 group font-['Inter']
    ${pathname === link.href
                      ? 'text-[#8B9D8A] dark:text-[#6B7A6A]'
                      : 'text-[#2A2A2A] dark:text-[#F5F5F5]'
                    }
    hover:text-[#8B9D8A] dark:hover:text-[#6B7A6A]
    after:content-[''] after:absolute after:w-0 after:h-[2px] 
    after:left-0 after:-bottom-1 after:transition-all after:duration-300
    ${pathname === link.href
                      ? 'after:w-full after:bg-[#8B9D8A] dark:after:bg-[#6B7A6A]'
                      : 'hover:after:w-full after:bg-[#8B9D8A] dark:after:bg-[#6B7A6A]'
                    }
  `}
                >
                  {link.name}
                </Link>

              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-3">

              {/* Theme Toggler */}
              <ThemeToggler />

              {/* Wishlist */}
              <button className={`
                relative p-2 rounded-full transition-all duration-300 transform
                text-[#2A2A2A] hover:text-[#8B9D8A] 
                dark:text-[#F5F5F5] dark:hover:text-[#6B7A6A]
                hover:bg-[#8B9D8A]/10 dark:hover:bg-[#2A2A2A]
                hover:scale-105 active:scale-95
                group
              `}>
                <Heart size={20} className="group-hover:fill-current transition-all duration-300" />
                <span className={`
                  absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-medium font-['Inter']
                  flex items-center justify-center transition-all duration-300
                  bg-[#D4806B] text-white dark:bg-[#C18B6B] dark:text-white
                  animate-pulse
                `}>
                  2
                </span>
              </button>

              {/* Cart */}
              <button className={`
                relative p-2 rounded-full transition-all duration-300 transform
                text-[#2A2A2A] hover:text-[#8B9D8A] 
                dark:text-[#F5F5F5] dark:hover:text-[#6B7A6A]
                hover:bg-[#8B9D8A]/10 dark:hover:bg-[#2A2A2A]
                hover:scale-105 active:scale-95
              `}>
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className={`
                    absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-medium font-['Inter']
                    flex items-center justify-center transition-all duration-300
                    bg-[#D4806B] text-white dark:bg-[#C18B6B] dark:text-white
                    animate-pulse scale-110
                  `}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User */}
              <button className={`
                p-2 rounded-full transition-all duration-300 transform
                text-[#2A2A2A] hover:text-[#8B9D8A] 
                dark:text-[#F5F5F5] dark:hover:text-[#6B7A6A]
                hover:bg-[#8B9D8A]/10 dark:hover:bg-[#2A2A2A]
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
            bg-white dark:bg-[#1A1A1A] 
            border-t border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 
            shadow-lg
            ${isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="px-4 pt-0 py-6 space-y-4">
            {/* Navigation Links */}
            <div className="border-t border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 pt-4">
              {navLinks.map((link) => (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  key={link.href}
                  href={link.href}
                  className={`
    block py-3 px-2 rounded-md font-medium transition-all duration-300 font-['Inter']
    ${pathname === link.href
                      ? 'text-[#8B9D8A] dark:text-[#6B7A6A]'
                      : 'text-[#2A2A2A] dark:text-[#F5F5F5]'
                    }
    hover:text-[#8B9D8A] dark:hover:text-[#6B7A6A]
    hover:bg-[#8B9D8A]/10 dark:hover:bg-[#2A2A2A]
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