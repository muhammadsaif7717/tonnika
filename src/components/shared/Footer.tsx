'use client'
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Heart, 
  Send,
  Shield,
  Truck,
  RotateCcw,
  ChevronUp,
  Award,
  Users,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = {
    shop: [
      { name: 'Traditional Bangles', href: '/bangles/traditional' },
      { name: 'Modern Bangles', href: '/bangles/modern' },
      { name: 'Bridal Collections', href: '/bangles/bridal' },
      { name: 'Premium Cosmetics', href: '/cosmetics' },
      { name: 'Gift Sets', href: '/gift-sets' },
      { name: 'Custom Orders', href: '/custom' }
    ],
    support: [
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'Care Instructions', href: '/care' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns & Exchange', href: '/returns' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact Us', href: '/contact' }
    ],
    company: [
      { name: 'Our Story', href: '/story' },
      { name: 'Meet Our Artisans', href: '/artisans' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Press', href: '/press' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/tonnika', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/tonnika', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/tonnika', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/tonnika', color: 'hover:text-red-500' }
  ];

  const trustBadges = [
    { icon: Shield, text: 'Secure Payment', subtext: '256-bit SSL encrypted' },
    { icon: Truck, text: 'Fast Shipping', subtext: 'Free delivery over $50' },
    { icon: RotateCcw, text: '30-Day Returns', subtext: 'Hassle-free returns' },
    { icon: Award, text: 'Authentic Products', subtext: 'Handcrafted guarantee' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black text-white">
      
      {/* Newsletter Section */}
      <div className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-rose-400 mr-2" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-rose-400 bg-clip-text text-transparent">
                Stay in Touch
              </h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Get exclusive access to new collections, artisan stories, and special offers. 
              Join our community of 10,000+ happy customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-white placeholder-slate-400 transition-all duration-200"
                  required
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                onClick={handleNewsletterSubmit}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 disabled:from-green-500 disabled:to-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center min-w-[120px]"
              >
                {isSubscribed ? (
                  <>
                    <Heart className="w-5 h-5 mr-2 fill-current" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-slate-400 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-300 to-rose-400 bg-clip-text text-transparent mb-4">
                Tonnika
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Celebrating the artistry of handcrafted beauty. Every piece tells a story, 
                every purchase supports skilled artisans, and every customer becomes part of our family.
              </p>
              
              {/* Artisan Showcase */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg p-4 mb-6 border border-slate-600/30">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-rose-400 mr-2" />
                  <span className="text-sm font-semibold text-rose-300">Supporting 50+ Artisans</span>
                </div>
                <p className="text-xs text-slate-400">
                  Each purchase directly supports skilled craftswomen in rural communities.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-rose-300">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-3 bg-slate-800/50 rounded-lg border border-slate-600/30 transition-all duration-300 hover:scale-110 hover:border-slate-500 ${social.color} group`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-300">Shop Collections</h4>
            <ul className="space-y-3">
              {quickLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-rose-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-rose-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-300">Customer Care</h4>
            <ul className="space-y-3">
              {quickLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-rose-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-rose-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 p-4 bg-slate-800/30 rounded-lg border border-slate-600/20">
              <h5 className="font-semibold mb-3 text-rose-300">Get in Touch</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-rose-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-rose-400" />
                  hello@tonnika.com
                </div>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 text-rose-400" />
                  123 Artisan Street, Craft District, NY 10001
                </div>
              </div>
            </div>
          </div>

          {/* Company & Trust Badges */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-rose-300">Our Company</h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-rose-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-rose-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div>
              <h5 className="font-semibold mb-4 text-rose-300">Why Choose Tonnika</h5>
              <div className="grid grid-cols-1 gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className="flex items-center p-3 bg-slate-800/30 rounded-lg border border-slate-600/20 hover:border-slate-500/40 transition-colors duration-200"
                  >
                    <badge.icon className="w-5 h-5 text-rose-400 mr-3 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-slate-200">{badge.text}</div>
                      <div className="text-xs text-slate-400">{badge.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-sm text-slate-400 mb-4 md:mb-0">
              <p>© 2025 Tonnika. All rights reserved.</p>
              <p className="text-xs mt-1">
                Made with <Heart className="w-3 h-3 inline fill-current text-rose-400 mx-1" /> for artisan communities worldwide
              </p>
            </div>

            {/* Legal Links & Back to Top */}
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-sm text-slate-400 hover:text-rose-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-slate-400 hover:text-rose-400 transition-colors duration-200">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 hover:scale-110 group"
                aria-label="Back to top"
              >
                <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-rose-400 transition-colors duration-200" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500" />
    </footer>
  );
};

export default Footer;