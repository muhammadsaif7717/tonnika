"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Play, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const slides = [
  {
    id: 1,
    title: "Protect Your Glow, Naturally",
    subtitle: "Discover Premium Beauty with Natural Ingredients",
    description:
      "Hand-curated collection of organic skincare and handcrafted accessories for the modern woman who values authenticity and natural beauty.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    badge: "New Collection",
    cta: "Shop Natural Beauty",
    secondaryCta: "Learn More",
  },
  {
    id: 2,
    title: "Handcrafted Elegance",
    subtitle: "Artisan-Made Bangles & Accessories",
    description:
      "Each piece tells a story of traditional craftsmanship meets contemporary style. Unique accessories that celebrate your individuality.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    badge: "Artisan Made",
    cta: "Explore Collection",
    secondaryCta: "Meet Artisans",
  },
  {
    id: 3,
    title: "Clean Beauty Revolution",
    subtitle: "Skincare That Loves You Back",
    description:
      "Gentle yet effective formulations with sustainably sourced ingredients. Beauty products that care for your skin and the environment.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    badge: "Eco-Friendly",
    cta: "Shop Skincare",
    secondaryCta: "Read Reviews",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsVisible(true);
    }, 300);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsVisible(true);
    }, 300);
  };

  return (
    <section
      className="relative min-h-[90vh] bg-gradient-to-br from-[#F8F6F2] via-white to-[#F5C5A8] dark:from-[#1A1A1A] dark:via-[#2A2A2A] dark:to-[#1A1A1A] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enhanced Background Effects with Brand Colors */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#8B9D8A]/40 dark:bg-[#6B7A6A]/60 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F5C5A8]/40 dark:bg-[#E8C4A8]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#D4806B]/20 dark:bg-[#C18B6B]/30 rounded-full blur-3xl animate-bounce-soft"></div>
      </div>

      {/* Floating Elements with Brand Colors */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-[#8B9D8A] dark:text-[#6B7A6A] animate-pulse" />
        <Sparkles className="absolute top-3/4 right-1/4 w-4 h-4 text-[#F5C5A8] dark:text-[#E8C4A8] animate-pulse delay-500" />
        <Sparkles className="absolute top-1/2 right-1/3 w-5 h-5 text-[#D4806B]/60 dark:text-[#C18B6B] animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Content Section */}
          <div className={`space-y-8 z-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-[#8B9D8A]/10 dark:bg-[#6B7A6A]/20 text-[#8B9D8A] dark:text-[#6B7A6A] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30">
              <Star size={16} className="text-[#D4806B] dark:text-[#C18B6B] animate-spin-slow" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] leading-tight font-['Inter']">
                <span className="bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] dark:from-[#6B7A6A] dark:to-[#C18B6B] bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-[#8B9D8A] dark:text-[#6B7A6A] font-['Playfair_Display'] leading-relaxed">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-[#2A2A2A] dark:text-[#F5F5F5] leading-relaxed max-w-lg font-['Inter']">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Enhanced CTAs with Brand Colors */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-[#D4806B] to-[#D4806B]/90 dark:from-[#C18B6B] dark:to-[#C18B6B]/90 hover:from-[#D4806B]/90 hover:to-[#D4806B]/80 dark:hover:from-[#C18B6B]/90 dark:hover:to-[#C18B6B]/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform active:scale-95 flex items-center justify-center space-x-2 font-['Inter']">
                <ShoppingBag size={20} className="group-hover:animate-bounce" />
                <span>{slides[currentSlide].cta}</span>
              </button>
              <button className="group border-2 border-[#8B9D8A] dark:border-[#6B7A6A] text-[#8B9D8A] dark:text-[#6B7A6A] hover:bg-[#8B9D8A] dark:hover:bg-[#6B7A6A] hover:text-white dark:hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm font-['Inter']">
                <Play size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>{slides[currentSlide].secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-[#2A2A2A] border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30">
              {/* Decorative Frame with Brand Colors */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D8A]/10 to-[#F5C5A8]/10 dark:from-[#6B7A6A]/20 dark:to-[#E8C4A8]/10 rounded-3xl"></div>
              
              <div className="relative p-2">
                <Image
                  height={500}
                  width={500}
                  src={slides[currentSlide].image}
                  alt={`Banner image for ${slides[currentSlide].title}`}
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl transition-all duration-700 hover:scale-105"
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                />
                
                {/* Image Overlay Effects */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Stats with Brand Colors */}
              <div className="absolute top-8 right-8 bg-white/95 dark:bg-[#2A2A2A]/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30">
                <div className="flex items-center space-x-2 text-[#8B9D8A] dark:text-[#6B7A6A]">
                  <Star className="w-5 h-5 fill-current text-[#4A5D4A] dark:text-[#6B7A6A]" />
                  <div className="text-sm font-['Inter']">
                    <div className="font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">4.9/5</div>
                    <div className="text-xs opacity-75 text-[#2A2A2A] dark:text-[#F5F5F5]">2.3k reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation with Brand Colors */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-white/95 dark:bg-[#2A2A2A]/95 hover:bg-white dark:hover:bg-[#2A2A2A] text-[#2A2A2A] dark:text-[#F5F5F5] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-md border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                setIsVisible(false);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsVisible(true);
                }, 300);
              }}
              className={clsx(
                "rounded-full transition-all duration-300",
                index === currentSlide
                  ? "w-8 h-3 bg-[#D4806B] dark:bg-[#C18B6B] scale-125"
                  : "w-3 h-3 bg-[#8B9D8A]/40 dark:bg-[#6B7A6A]/60 hover:bg-[#8B9D8A]/60 dark:hover:bg-[#6B7A6A]/80"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-white/95 dark:bg-[#2A2A2A]/95 hover:bg-white dark:hover:bg-[#2A2A2A] text-[#2A2A2A] dark:text-[#F5F5F5] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-md border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar with Brand Colors */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8B9D8A]/20 dark:bg-[#6B7A6A]/20">
        <div 
          className="h-full bg-gradient-to-r from-[#D4806B] to-[#F5C5A8] dark:from-[#C18B6B] dark:to-[#E8C4A8] transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Banner;