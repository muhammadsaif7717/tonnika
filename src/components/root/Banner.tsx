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
      className="relative min-h-[90vh] bg-gradient-to-br from-sage-50 via-white to-peach-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-200 dark:bg-sage-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach-200 dark:bg-warm-nude-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-terracotta/20 dark:bg-copper-glow-400/30 rounded-full blur-3xl animate-bounce-soft"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-sage-400 dark:text-sage-300 animate-pulse" />
        <Sparkles className="absolute top-3/4 right-1/4 w-4 h-4 text-peach-200 dark:text-warm-nude-200 animate-pulse delay-500" />
        <Sparkles className="absolute top-1/2 right-1/3 w-5 h-5 text-terracotta/60 dark:text-copper-glow-400 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Content Section */}
          <div className={`space-y-8 z-10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-sage-100 dark:bg-sage-800/50 text-sage-700 dark:text-sage-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-sage-200 dark:border-sage-600">
              <Star size={16} className="text-terracotta dark:text-copper-glow-400 animate-spin-slow" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-sage-600 to-terracotta dark:from-sage-400 dark:to-copper-glow-400 bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-sage-600 dark:text-sage-300 font-serif leading-relaxed">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-charcoal-700 dark:text-gray-300 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-gradient-to-r from-terracotta to-terracotta-600 dark:from-copper-glow-400 dark:to-copper-glow-500 hover:from-terracotta-600 hover:to-terracotta-700 dark:hover:from-copper-glow-500 dark:hover:to-copper-glow-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform active:scale-95 flex items-center justify-center space-x-2">
                <ShoppingBag size={20} className="group-hover:animate-bounce" />
                <span>{slides[currentSlide].cta}</span>
              </button>
              <button className="group border-2 border-sage-300 dark:border-sage-600 text-sage-600 dark:text-sage-300 hover:bg-sage-600 dark:hover:bg-sage-600 hover:text-white dark:hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>{slides[currentSlide].secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className={`relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800 border border-sage-100 dark:border-gray-700">
              {/* Decorative Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100/20 to-peach-100/20 dark:from-sage-800/20 dark:to-warm-nude-200/10 rounded-3xl"></div>
              
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

              {/* Floating Stats */}
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 dark:border-gray-700/50">
                <div className="flex items-center space-x-2 text-sage-600 dark:text-sage-300">
                  <Star className="w-5 h-5 fill-current" />
                  <div className="text-sm">
                    <div className="font-semibold">4.9/5</div>
                    <div className="text-xs opacity-75">2.3k reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-charcoal-900 dark:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 dark:border-gray-700/50"
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
                  ? "w-8 h-3 bg-terracotta dark:bg-copper-glow-400 scale-125"
                  : "w-3 h-3 bg-white/60 dark:bg-gray-600/60 hover:bg-white/80 dark:hover:bg-gray-500/80"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-charcoal-900 dark:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/20 dark:border-gray-700/50"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 dark:bg-gray-700/20">
        <div 
          className="h-full bg-gradient-to-r from-terracotta to-peach-200 dark:from-copper-glow-400 dark:to-warm-nude-200 transition-all duration-500"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Banner;