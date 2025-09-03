import { LucideIcon } from "lucide-react";

// types/index.ts or types/Product.ts

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  artisan: string;
  featured: boolean;
  new: boolean;
  sale: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorImage: string;
  publishDate: string; // Consider using `Date` type if you plan to parse it
  readTime: string;
  views: string; // You might want to change this to number if calculations are needed
  image: string;
  featured: boolean;
  tags: string[];
}


// types/AboutData.ts

// For `values` section
export interface BrandValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

// For `milestones` section
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

// For `testimonials` section
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

// For `teamMembers` section
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}
