'use client'
import React, { useState, useEffect } from 'react';
import { Heart, Users,  Sparkles, Leaf,  ArrowRight, Star } from 'lucide-react';
import { BrandValue, Milestone, TeamMember, Testimonial } from '@/types';
import Image from 'next/image';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Animation trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible[entry.target.id]) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }

        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="section-"]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  const values: BrandValue[] = [
    {
      icon: Heart,
      title: "Authentic Craftsmanship",
      description: "Every piece tells a story of traditional techniques passed down through generations of skilled artisans."
    },
    {
      icon: Users,
      title: "Empowering Women",
      description: "We partner with women artisans worldwide, providing fair wages and supporting their craft communities."
    },
    {
      icon: Leaf,
      title: "Sustainable Beauty",
      description: "Committed to eco-friendly materials and ethical sourcing that honors both people and planet."
    },
    {
      icon: Sparkles,
      title: "Unique Expression",
      description: "Celebrating individuality through handcrafted pieces that let your personal style shine."
    }
  ];

  const milestones: Milestone[] = [
    { year: "2019", title: "Founded with Love", description: "Started with a passion for authentic handcrafted jewelry" },
    { year: "2020", title: "Artisan Network", description: "Built partnerships with 50+ women artisans across Asia" },
    { year: "2021", title: "Beauty Expansion", description: "Introduced premium cosmetics line with natural ingredients" },
    { year: "2022", title: "Global Reach", description: "Shipped to customers in 25+ countries worldwide" },
    { year: "2023", title: "Sustainability Focus", description: "Achieved carbon-neutral shipping and eco-packaging" },
    { year: "2024", title: "Community Impact", description: "Supporting 100+ artisan families and growing" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "Jewelry Designer",
      content: "Working with Tonnika has transformed my craft into a sustainable livelihood. Their commitment to fair trade is genuine.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Maya Patel",
      role: "Cosmetics Artisan",
      content: "The quality standards and creative freedom Tonnika provides allows me to create my best work while supporting my community.",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      name: "Elena Rodriguez",
      role: "Bangle Craftsperson",
      content: "Through Tonnika, my traditional family techniques now reach customers who truly appreciate handcrafted excellence.",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      name: "Priya Sharma",
      role: "Founder & Creative Director",
      bio: "Passionate about preserving traditional crafts while creating modern luxury experiences.",
      image: "/api/placeholder/200/250"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Artisan Relations",
      bio: "Dedicated to building ethical partnerships that empower craftspeople worldwide.",
      image: "/api/placeholder/200/250"
    },
    {
      name: "Zara Ali",
      role: "Product Development Lead",
      bio: "Expert in natural cosmetics with 8+ years in sustainable beauty innovation.",
      image: "/api/placeholder/200/250"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20 dark:from-rose-900/10 dark:to-pink-900/10" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 dark:from-rose-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where traditional craftsmanship meets modern elegance, creating beauty that empowers both artisans and those who wear their creations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">100+</div>
              <div className="text-gray-600 dark:text-gray-300">Artisan Partners</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
            </div>
            <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-rose-600 dark:text-rose-400">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="section-mission" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
                Crafting Beauty, Building Dreams
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                At Tonnika, we believe that true beauty lies in authenticity. Our mission is to bridge the gap between traditional craftsmanship and contemporary style, creating a platform where skilled artisans can share their heritage while building sustainable livelihoods.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Every bangle tells a story of hours spent perfecting ancient techniques. Every cosmetic product reflects generations of knowledge about natural ingredients and their transformative powers.
              </p>
              <button className="group bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                Explore Our Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 dark:from-rose-900/30 dark:to-pink-900/30 rounded-3xl overflow-hidden">
                <Image
                height={500}
                width={500}
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop"
                  alt="Artisan crafting beautiful jewelry with traditional tools"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="section-values" className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible['section-values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100/50 dark:border-rose-900/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="section-journey" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-journey'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From a small dream to a global community of artisans and beauty enthusiasts.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-8 group"
              >
                <div className="flex-shrink-0 w-32 text-center">
                  <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                </div>

                <div className="flex-grow bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-rose-100/50 dark:border-rose-900/30">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="section-team" className={`py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible['section-team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate individuals working tirelessly to support artisans and create exceptional experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100/50 dark:border-rose-900/30"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                height={500}
                width={500}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-rose-600 dark:text-rose-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="section-testimonials" className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible['section-testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Voices from Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from the talented artisans who make Tonnika possible.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-rose-100/50 dark:border-rose-900/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                height={500}
                width={500}
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-grow text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 italic">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-rose-600 dark:text-rose-400 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                      ? 'bg-rose-500 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-rose-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Become part of a community that celebrates craftsmanship, empowers artisans, and embraces authentic beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
              Shop Our Collection
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-600 transition-all duration-300 transform hover:scale-105">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;