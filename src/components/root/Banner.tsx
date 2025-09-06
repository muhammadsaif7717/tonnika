"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Play, Star } from "lucide-react";
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

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="relative min-h-[90vh] bg-gradient-to-br from-sage-50 via-white to-peach-50 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-peach-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Content Section */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse">
              <Star size={16} className="text-terracotta" />
              <span>{slides[currentSlide].badge}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight transition-all duration-700">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-xl md:text-2xl text-sage-600 font-serif">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-lg text-charcoal/70 leading-relaxed max-w-lg">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2 group">
                <ShoppingBag size={20} className="group-hover:animate-bounce" />
                <span>{slides[currentSlide].cta}</span>
              </button>
              <button className="border-2 border-sage-300 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center space-x-2 group">
                <Play size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>{slides[currentSlide].secondaryCta}</span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800 ">
              <div className=" relative">
                <Image
                  height={500}
                  width={500}
                  src={slides[currentSlide].image}
                  alt={`Banner image for ${slides[currentSlide].title}`}
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl transition-all duration-700"
                  priority={currentSlide === 0}
                  loading={currentSlide === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="bg-white/80 hover:bg-white text-charcoal p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentSlide
                  ? "bg-terracotta scale-125"
                  : "bg-white/60 hover:bg-white/80"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="bg-white/80 hover:bg-white text-charcoal p-3 rounded-full shadow-lg transition hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Banner;
