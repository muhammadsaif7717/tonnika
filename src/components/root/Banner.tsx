'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Heart, ShoppingBag, Star } from 'lucide-react';

const bannerSlides = [
    {
      id: 1,
      title: "Handcrafted Bangles",
      subtitle: "Artisan Stories in Every Piece",
      description: "Discover our exclusive collection of handmade bangles, each telling a unique story of traditional craftsmanship and modern elegance.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Shop Bangles",
      accent: "New Collection"
    },
    {
      id: 2,
      title: "Premium Cosmetics",
      subtitle: "Natural Beauty, Naturally You",
      description: "Enhance your natural radiance with our carefully curated collection of premium cosmetics made from the finest ingredients.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Explore Beauty",
      accent: "Best Sellers"
    },
    {
      id: 3,
      title: "Custom Creations",
      subtitle: "Your Vision, Our Craft",
      description: "Work with our skilled artisans to create personalized pieces that reflect your unique style and story.",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      cta: "Start Custom Order",
      accent: "Personalized"
    }
  ];

const TonnikaBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isFixedBg, setIsFixedBg] = useState(false);

useEffect(() => {
  // Only runs on the client
  setIsFixedBg(window.innerWidth > 768);
}, []);

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate slides every 6 seconds
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % bannerSlides.length);
    }, 6000);

    return () => clearInterval(slideTimer);
  }, []);

  

  const testimonials = [
    { name: "Priya S.", rating: 5, text: "Absolutely stunning bangles!" },
    { name: "Sarah M.", rating: 5, text: "Best cosmetics I've ever used" },
    { name: "Aisha K.", rating: 5, text: "Amazing craftsmanship" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16 lg:pt-20">
      
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out transform"
        style={{
          backgroundImage: `url(${bannerSlides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isFixedBg ? 'fixed' : 'scroll'
        }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 dark:bg-black/70 sm:dark:bg-black/60" />
        
        {/* Gradient Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 to-transparent dark:from-rose-900/60" />
      </div>

      {/* Floating Elements for Visual Interest - Hidden on small screens */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {/* Sparkle Animations */}
        {[...Array(6)].map((_, i) => (
          <Sparkles 
            key={i}
            className={`absolute text-rose-300/30 w-3 h-3 sm:w-4 sm:h-4 animate-pulse`}
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-4 sm:py-8 lg:py-0 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-64px)] lg:min-h-screen flex flex-col justify-center">
        
        {/* Accent Badge */}
        <div className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-300/30 text-rose-100 text-xs sm:text-sm font-medium mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-rose-300" />
          {bannerSlides[currentSlide].accent}
        </div>

        {/* Main Heading - Responsive text sizing */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="block bg-gradient-to-r from-rose-200 via-rose-100 to-rose-200 bg-clip-text text-transparent">
            {bannerSlides[currentSlide].title}
          </span>
        </h1>

        {/* Subtitle - Better responsive scaling */}
        <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-rose-100 font-light mb-3 sm:mb-4 px-2 sm:px-0 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {bannerSlides[currentSlide].subtitle}
        </h2>

        {/* Description - Mobile optimized */}
        <p className={`text-sm sm:text-base lg:text-lg text-rose-50/90 max-w-xl lg:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {bannerSlides[currentSlide].description}
        </p>

        {/* CTA Buttons - Mobile first approach */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-rose-500/25 min-w-[200px]">
            <span className="flex items-center justify-center text-sm sm:text-base">
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
              {bannerSlides[currentSlide].cta}
            </span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-rose-200/50 text-rose-100 hover:border-rose-200 hover:bg-rose-200/10 font-semibold rounded-full transition-all duration-300 backdrop-blur-sm min-w-[200px]">
            <span className="flex items-center justify-center text-sm sm:text-base">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:fill-current" />
              View Wishlist
            </span>
          </button>
        </div>

        {/* Quick Stats - Mobile responsive grid */}
        <div className={`grid grid-cols-3 gap-2 sm:gap-6 max-w-xs sm:max-w-md mx-auto mb-16 sm:mb-0 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-rose-200">500+</div>
            <div className="text-xs sm:text-sm text-rose-100/80 leading-tight">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-rose-200">100%</div>
            <div className="text-xs sm:text-sm text-rose-100/80 leading-tight">Handcrafted</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-2xl font-bold text-rose-200">★ 4.9</div>
            <div className="text-xs sm:text-sm text-rose-100/80 leading-tight">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots - Mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide 
                ? 'bg-rose-400 scale-125' 
                : 'bg-rose-200/50 hover:bg-rose-200/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="hidden sm:flex absolute bottom-4 sm:bottom-8 right-6 sm:right-8 text-rose-100 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>

      {/* Customer Testimonial Floating Cards - Responsive positioning */}
      <div className="hidden xl:block absolute right-4 xl:right-8 top-1/2 transform -translate-y-1/2 space-y-3 xl:space-y-4 z-20">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 xl:p-4 max-w-xs shadow-xl border border-rose-100/50 dark:border-rose-800/50 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ animationDelay: `${800 + index * 200}ms` }}
          >
            <div className="flex items-center mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 xl:w-4 xl:h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-xs xl:text-sm text-gray-700 dark:text-gray-200 mb-2">{testimonial.text}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">- {testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Mobile Testimonials - Show as bottom overlay on mobile */}
      <div className="xl:hidden absolute bottom-12 left-4 right-4 z-20">
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-xl border border-rose-100/50 dark:border-rose-800/50 mx-auto max-w-sm">
          <div className="flex items-center justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-200 text-center mb-2">
            {testimonials[currentSlide % testimonials.length].text}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium text-center">
            - {testimonials[currentSlide % testimonials.length].name}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Top gradient fade */}
        <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-black/30 sm:from-black/20 to-transparent" />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-black/30 sm:from-black/20 to-transparent" />
      </div>
    </section>
  );
};

export default TonnikaBanner;