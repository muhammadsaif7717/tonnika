'use client'
import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock, Heart, Share2, BookOpen, Tag, ChevronRight, Bookmark, Eye, Sparkles, Leaf, TrendingUp } from 'lucide-react';
import { BlogPost } from '@/types';
import Image from 'next/image';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedPosts, setSavedPosts] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Stories', count: 47, icon: BookOpen },
    { id: 'artisan-stories', name: 'Artisan Stories', count: 18, icon: Sparkles },
    { id: 'beauty-tips', name: 'Beauty Tips', count: 15, icon: Heart },
    { id: 'craft-traditions', name: 'Craft Traditions', count: 8, icon: TrendingUp },
    { id: 'sustainable-beauty', name: 'Sustainable Beauty', count: 6, icon: Leaf }
  ];

  const filteredPosts = useMemo(() => {
      const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Ancient Art of Kundan Jewelry: A Master Craftsman\'s Journey',
      excerpt: 'Discover the centuries-old tradition of Kundan jewelry making through the eyes of Rajesh Kumar, a third-generation artisan whose family has perfected this intricate craft.',
      category: 'artisan-stories',
      author: 'Sarah Mitchell',
      authorImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-15',
      readTime: '8 min read',
      views: '2.4k',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop',
      featured: true,
      tags: ['Kundan', 'Traditional Crafts', 'Heritage', 'Artisan Profile']
    },
    {
      id: 2,
      title: '5 Essential Steps for Your Daily Skincare Ritual',
      excerpt: 'Transform your daily routine into a moment of self-care with these expert-approved skincare steps that will leave your skin glowing and healthy.',
      category: 'beauty-tips',
      author: 'Dr. Ananya Patel',
      authorImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-20',
      readTime: '6 min read',
      views: '3.1k',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Skincare', 'Beauty Routine', 'Self Care', 'Wellness']
    },
    {
      id: 3,
      title: 'Sustainable Beauty: Why Eco-Friendly Cosmetics Matter',
      excerpt: 'Explore the growing movement towards sustainable beauty and discover how eco-conscious choices are reshaping the cosmetics industry for a better tomorrow.',
      category: 'sustainable-beauty',
      author: 'Emma Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-18',
      readTime: '10 min read',
      views: '1.8k',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&h=600&fit=crop',
      featured: true,
      tags: ['Sustainability', 'Eco-Friendly', 'Environment', 'Conscious Beauty']
    },
    {
      id: 4,
      title: 'The Revival of Handloom Textiles in Modern Fashion',
      excerpt: 'Meet the artisans who are breathing new life into traditional handloom techniques, creating stunning pieces that bridge heritage and contemporary style.',
      category: 'craft-traditions',
      author: 'Vikram Singh',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-12',
      readTime: '7 min read',
      views: '1.5k',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Handloom', 'Textiles', 'Traditional Crafts', 'Fashion']
    },
    {
      id: 5,
      title: 'From Priya\'s Workshop: The Story Behind Our Rose Gold Collection',
      excerpt: 'Step into the workshop of master artisan Priya Sharma and discover the meticulous process behind our bestselling Rose Gold Elegance bangles.',
      category: 'artisan-stories',
      author: 'Tonnika Team',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-25',
      readTime: '9 min read',
      views: '4.2k',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
      featured: true,
      tags: ['Rose Gold', 'Behind the Scenes', 'Craftsmanship', 'Product Story']
    },
    {
      id: 6,
      title: 'Color Theory in Makeup: Creating Harmonious Beauty Looks',
      excerpt: 'Master the art of color coordination in makeup with this comprehensive guide to color theory, perfect for creating stunning, cohesive beauty looks.',
      category: 'beauty-tips',
      author: 'Maya Chen',
      authorImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      publishDate: '2024-08-10',
      readTime: '12 min read',
      views: '2.7k',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Color Theory', 'Makeup', 'Beauty Tutorial', 'Techniques']
    }
  ];
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const toggleSavedPost = (postId: number) => {
    const newSaved = new Set(savedPosts);
    if (newSaved.has(postId)) {
      newSaved.delete(postId);
    } else {
      newSaved.add(postId);
    }
    setSavedPosts(newSaved);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <article className="group relative bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(139,157,138,0.25)] dark:hover:shadow-[0_25px_60px_-12px_rgba(107,122,106,0.25)] transition-all duration-700 transform hover:-translate-y-3 border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20">
      <div className="relative h-80 overflow-hidden">
        <Image
          height={500}
          width={500}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/80 via-transparent to-transparent" />
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D8A]/20 via-transparent to-[#F5C5A8]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedPost(post.id);
          }}
          className="absolute top-6 right-6 p-3 rounded-2xl bg-white/20 dark:bg-[#2A2A2A]/40 backdrop-blur-md hover:bg-white/30 dark:hover:bg-[#2A2A2A]/60 transition-all duration-300 hover:scale-110"
        >
          <Bookmark 
            className={`w-5 h-5 ${
              savedPosts.has(post.id) 
                ? 'text-[#D4806B] fill-[#D4806B]' 
                : 'text-white dark:text-[#F5F5F5]'
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center gap-2 bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        </div>

        {/* Author Info - Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <Image
                height={48}
                width={48}
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full border-2 border-white/30 dark:border-[#F5F5F5]/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B9D8A]/20 to-[#D4806B]/20"></div>
            </div>
            <div>
              <p className="text-white dark:text-[#F5F5F5] font-semibold">{post.author}</p>
              <div className="flex items-center gap-4 text-white/80 dark:text-[#F5F5F5]/80 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 relative">
        {/* Decorative accent */}
        <div className="absolute top-0 left-8 w-12 h-1 bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] rounded-full"></div>
        
        <div className="flex items-center gap-2 mb-4 mt-2">
          <Tag className="w-4 h-4 text-[#8B9D8A]" />
          <span className="text-sm font-semibold text-[#8B9D8A] dark:text-[#6B7A6A] capitalize">
            {categories.find(c => c.id === post.category)?.name}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-4 line-clamp-2 group-hover:text-[#8B9D8A] transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60">
            <span className="flex items-center gap-1 hover:text-[#8B9D8A] transition-colors duration-300">
              <Eye className="w-4 h-4" />
              {post.views} views
            </span>
            <button className="flex items-center gap-1 hover:text-[#D4806B] transition-colors duration-300">
              <Heart className="w-4 h-4" />
              24 likes
            </button>
          </div>
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] text-white font-semibold px-6 py-2 rounded-full hover:gap-3 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Read More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[#8B9D8A]/20 dark:border-[#6B7A6A]/20">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-[#F8F6F2] dark:bg-[#1A1A1A] text-[#2A2A2A] dark:text-[#F5F5F5] px-3 py-2 rounded-full hover:bg-[#8B9D8A]/10 dark:hover:bg-[#6B7A6A]/20 hover:text-[#8B9D8A] cursor-pointer transition-all duration-300 border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  const RegularPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <article className="group bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <Image
          height={500}
          width={500}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedPost(post.id);
          }}
          className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-sm hover:bg-white dark:hover:bg-[#2A2A2A] transition-all duration-300 hover:scale-110"
        >
          <Bookmark 
            className={`w-4 h-4 ${
              savedPosts.has(post.id) 
                ? 'text-[#D4806B] fill-[#D4806B]' 
                : 'text-[#2A2A2A] dark:text-[#F5F5F5]'
            }`}
          />
        </button>
      </div>

      <div className="p-6 relative">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] rounded-full"></div>
          <span className="text-xs font-semibold text-[#8B9D8A] dark:text-[#6B7A6A] uppercase tracking-wider">
            {categories.find(c => c.id === post.category)?.name}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-3 line-clamp-2 group-hover:text-[#8B9D8A] transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
              height={32}
              width={32}
              src={post.authorImage}
              alt={post.author}
              className="w-8 h-8 rounded-full border border-[#8B9D8A]/20"
            />
            <div>
              <p className="text-sm font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">{post.author}</p>
              <div className="flex items-center gap-2 text-xs text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60">
                <span>{formatDate(post.publishDate)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#8B9D8A]/20 dark:border-[#6B7A6A]/20">
          <div className="flex items-center gap-4 text-sm text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60">
            <span className="flex items-center gap-1 hover:text-[#8B9D8A] transition-colors duration-300">
              <Eye className="w-4 h-4" />
              {post.views}
            </span>
            <button className="flex items-center gap-1 hover:text-[#D4806B] transition-colors duration-300">
              <Heart className="w-4 h-4" />
              <span>12</span>
            </button>
            <button className="flex items-center gap-1 hover:text-[#F5C5A8] transition-colors duration-300">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          
          <button className="text-[#8B9D8A] hover:text-[#D4806B] font-semibold text-sm hover:underline transition-colors duration-300">
            Read More
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F2] via-white to-[#F5C5A8]/20 dark:from-[#1A1A1A] dark:via-[#2A2A2A] dark:to-[#6B7A6A]/10 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#8B9D8A]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-bl from-[#F5C5A8]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-tr from-[#D4806B]/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/20 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Stories & Insights
              <div className="w-24 h-1 bg-white/40 mx-auto mt-2 rounded-full"></div>
            </h1>
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover the artisans behind your favorite pieces, learn beauty secrets from experts, 
            and explore the rich traditions that inspire our handcrafted collections
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>47 Stories Published</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>10k+ Monthly Readers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 z-10">
        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Search Bar */}
          <div className="relative flex-1 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B9D8A]/20 to-[#F5C5A8]/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[#2A2A2A]/50 dark:text-[#F5F5F5]/50 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Search articles, beauty tips, artisan stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-md text-[#2A2A2A] dark:text-[#F5F5F5] focus:ring-2 focus:ring-[#8B9D8A]/50 focus:border-[#8B9D8A] transition-all duration-300 placeholder:text-[#2A2A2A]/50 dark:placeholder:text-[#F5F5F5]/50"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-md border-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] text-white shadow-lg scale-105 border-transparent'
                      : 'bg-white/80 dark:bg-[#2A2A2A]/80 text-[#2A2A2A] dark:text-[#F5F5F5] hover:bg-[#8B9D8A]/10 dark:hover:bg-[#6B7A6A]/20 hover:text-[#8B9D8A] hover:scale-105 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75 bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-12 bg-gradient-to-b from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] rounded-full"></div>
              <h2 className="text-4xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5]">Featured Stories</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#8B9D8A]/30 via-[#D4806B]/30 to-transparent"></div>
              <div className="flex items-center gap-2 text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Handpicked by our editors</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-gradient-to-b from-[#F5C5A8] via-[#D4806B] to-[#8B9D8A] rounded-full"></div>
              <h2 className="text-4xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5]">Latest Articles</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#F5C5A8]/30 via-[#D4806B]/30 to-transparent"></div>
            </div>
            <div className="flex items-center gap-2 bg-[#8B9D8A]/10 dark:bg-[#6B7A6A]/10 px-4 py-2 rounded-xl border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/20">
              <BookOpen className="w-4 h-4 text-[#8B9D8A]" />
              <span className="text-[#2A2A2A] dark:text-[#F5F5F5] font-semibold">
                {filteredPosts.length} articles found
              </span>
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <RegularPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="relative inline-block mb-8">
                <div className="text-8xl opacity-20">📝</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B9D8A]/20 to-[#F5C5A8]/20 rounded-full blur-2xl"></div>
              </div>
              <h3 className="text-3xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-4">
                No articles found
              </h3>
              <p className="text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or category filters to discover more beauty stories and artisan insights
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-[#8B9D8A] to-[#D4806B] hover:from-[#8B9D8A]/90 hover:to-[#D4806B]/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Show All Articles
              </button>
            </div>
          )}

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-16">
              <button className="group relative bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] hover:from-[#8B9D8A]/90 hover:via-[#D4806B]/90 hover:to-[#F5C5A8]/90 text-white px-12 py-6 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-[0_25px_60px_-12px_rgba(139,157,138,0.4)] transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="relative flex items-center gap-3">
                  <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Load More Stories
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Newsletter Subscription */}
      <section className="relative bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] py-20 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A]/10 to-transparent"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6 z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
              <Heart className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Never Miss a Story
            </h2>
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
              <Sparkles className="w-6 h-6 text-white animate-pulse delay-300" />
            </div>
          </div>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for the latest artisan stories, beauty tips, sustainable practices, 
            and behind-the-scenes content from the world of handcrafted beauty
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-2xl border-0 bg-white/90 backdrop-blur-md text-[#2A2A2A] placeholder-[#2A2A2A]/60 focus:ring-2 focus:ring-white focus:bg-white transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#8B9D8A]/20 to-[#F5C5A8]/20 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 whitespace-nowrap hover:scale-105">
              Subscribe Now
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>Join 10,000+ readers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>Weekly beauty insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;