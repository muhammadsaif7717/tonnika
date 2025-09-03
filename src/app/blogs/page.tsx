'use client'
import React, { useState, useMemo } from 'react';
import { Search, Calendar, Clock,  Heart, Share2, BookOpen, Tag, ChevronRight, Bookmark, Eye } from 'lucide-react';
import { BlogPost } from '@/types';
import Image from 'next/image';

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedPosts, setSavedPosts] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Stories', count: 47 },
    { id: 'artisan-stories', name: 'Artisan Stories', count: 18 },
    { id: 'beauty-tips', name: 'Beauty Tips', count: 15 },
    { id: 'craft-traditions', name: 'Craft Traditions', count: 8 },
    { id: 'sustainable-beauty', name: 'Sustainable Beauty', count: 6 }
  ];



  const filteredPosts = useMemo(() => {
      const blogPosts:BlogPost[] = [
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

  const toggleSavedPost = (postId:number) => {
    const newSaved = new Set(savedPosts);
    if (newSaved.has(postId)) {
      newSaved.delete(postId);
    } else {
      newSaved.add(postId);
    }
    setSavedPosts(newSaved);
  };

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

const FeaturedPostCard: React.FC<{ post: BlogPost }> = ({ post })  => (
    <article className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <Image
                        height={500}
                        width={500}
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedPost(post.id);
          }}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
        >
          <Bookmark 
            className={`w-5 h-5 ${
              savedPosts.has(post.id) 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-white'
            }`}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-rose-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
            Featured
          </span>
        </div>

        {/* Author Info - Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 mb-4">
            <Image
                            height={500}
                            width={500}
              src={post.authorImage}
              alt={post.author}
              className="w-12 h-12 rounded-full border-2 border-white/20"
            />
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <div className="flex items-center gap-4 text-white/80 text-sm">
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

      <div className="p-8">
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-rose-500" />
          <span className="text-sm font-medium text-rose-600 dark:text-rose-400 capitalize">
            {categories.find(c => c.id === post.category)?.name}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views} views
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              24 likes
            </span>
          </div>
          
          <button className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold hover:gap-3 transition-all duration-300">
            Read More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-rose-100 dark:hover:bg-rose-900/30 hover:text-rose-600 dark:hover:text-rose-400 cursor-pointer transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

const RegularPostCard: React.FC<{ post: BlogPost }> = ({ post })  => (
    <article className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
                        height={500}
                        width={500}

          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Save Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedPost(post.id);
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
        >
          <Bookmark 
            className={`w-4 h-4 ${
              savedPosts.has(post.id) 
                ? 'text-yellow-500 fill-yellow-500' 
                : 'text-gray-600 dark:text-gray-300'
            }`}
          />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
            {categories.find(c => c.id === post.category)?.name}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image
                            height={500}
                            width={500}
                            
              src={post.authorImage}
              alt={post.author}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{post.author}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{formatDate(post.publishDate)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views}
            </span>
            <button className="flex items-center gap-1 hover:text-rose-500 transition-colors duration-300">
              <Heart className="w-4 h-4" />
              <span>12</span>
            </button>
            <button className="flex items-center gap-1 hover:text-rose-500 transition-colors duration-300">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          
          <button className="text-rose-600 dark:text-rose-400 font-semibold text-sm hover:underline">
            Read More
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-600 dark:to-orange-600 text-white py-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8" />
            <h1 className="text-5xl font-bold">Stories & Insights</h1>
          </div>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Discover the artisans behind your favorite pieces, learn beauty secrets from experts, and explore the rich traditions that inspire our handcrafted collections
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles, topics, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-rose-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-rose-100 dark:hover:bg-rose-900/30 hover:text-rose-600 dark:hover:text-rose-400'
                }`}
              >
                <span>{category.name}</span>
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-rose-500 to-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Stories</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <FeaturedPostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-rose-500 to-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Articles</h2>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {filteredPosts.length} articles found
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <RegularPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Show All Articles
              </button>
            </div>
          )}

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Load More Articles
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-600 dark:to-orange-600 py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Never Miss a Story
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            Subscribe to our newsletter for the latest artisan stories, beauty tips, and behind-the-scenes content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-rose-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-rose-100 text-sm mt-4">
            Join 10,000+ readers who love our stories
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;