'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ChevronDown, Send, Clock, Star, Heart, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking details. You can also track it in your account dashboard under 'Order History'. We provide real-time updates throughout the shipping process.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship worldwide with secure, eco-friendly packaging. Shipping costs and delivery times vary depending on your location. Free shipping is available on orders over $75 within the US, and $150 internationally.",
  },
  {
    question: "Can I customize a product?",
    answer: "Absolutely! We offer engraving and color customization options on select bangles and beauty products. Contact us with your specific requirements for a personalized quote. Custom orders typically take 5-7 business days.",
  },
  {
    question: "What ingredients do you use in your beauty products?",
    answer: "All our beauty products are crafted with natural, clean ingredients sourced ethically. We provide detailed ingredient lists for each product and are happy to discuss specific formulations or allergen concerns.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unopened beauty products and handcrafted items in original condition. Custom orders have different terms. Please see our returns page for full details.",
  },
  {
    question: "Do you offer beauty consultations?",
    answer: "Yes! Our beauty experts offer complimentary virtual consultations to help you find the perfect products for your skin type and beauty goals. Book through our website or contact us directly.",
  }
];

export default function ContactPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F6F2] via-white to-[#F5C5A8]/20 dark:from-[#1A1A1A] dark:via-[#2A2A2A] dark:to-[#6B7A6A]/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#8B9D8A]/10 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-bl from-[#F5C5A8]/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-tr from-[#D4806B]/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-[#D4806B] animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] relative">
              Let{`'`}s Connect
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] rounded-full"></div>
            </h1>
            <Heart className="w-6 h-6 text-[#F5C5A8] animate-pulse" />
          </div>
          <p className="text-lg text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70 max-w-2xl mx-auto leading-relaxed">
            Have questions about our handcrafted beauty products or need personalized recommendations? 
            We{`'`}re here to help you discover your perfect natural beauty routine and create something truly special together.
          </p>
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-[#D4806B] text-[#D4806B]" />
              <span>4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8B9D8A]" />
              <span>24hr Response Time</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form */}
          <div className="bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F5C5A8]/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B9D8A]/20 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            <div className="absolute top-1/2 right-8 w-2 h-16 bg-gradient-to-b from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-[#8B9D8A] to-[#D4806B] rounded-full"></div>
                Get in Touch
                <div className="flex-1 h-px bg-gradient-to-r from-[#8B9D8A]/30 to-transparent ml-4"></div>
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-[#2A2A2A] dark:text-[#F5F5F5] mb-2 group-focus-within:text-[#8B9D8A] transition-colors duration-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 bg-white/70 dark:bg-[#1A1A1A]/70 text-[#2A2A2A] dark:text-[#F5F5F5] focus:ring-2 focus:ring-[#8B9D8A]/50 focus:border-[#8B9D8A] transition-all duration-300 placeholder:text-[#2A2A2A]/50 dark:placeholder:text-[#F5F5F5]/50 hover:border-[#8B9D8A]/40 dark:hover:border-[#6B7A6A]/50"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B9D8A]/5 to-[#F5C5A8]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2A2A2A] dark:text-[#F5F5F5] mb-2 group-focus-within:text-[#8B9D8A] transition-colors duration-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 bg-white/70 dark:bg-[#1A1A1A]/70 text-[#2A2A2A] dark:text-[#F5F5F5] focus:ring-2 focus:ring-[#8B9D8A]/50 focus:border-[#8B9D8A] transition-all duration-300 placeholder:text-[#2A2A2A]/50 dark:placeholder:text-[#F5F5F5]/50 hover:border-[#8B9D8A]/40 dark:hover:border-[#6B7A6A]/50"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B9D8A]/5 to-[#F5C5A8]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#2A2A2A] dark:text-[#F5F5F5] mb-2 group-focus-within:text-[#8B9D8A] transition-colors duration-300">
                    How can we help you today?
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 bg-white/70 dark:bg-[#1A1A1A]/70 text-[#2A2A2A] dark:text-[#F5F5F5] focus:ring-2 focus:ring-[#8B9D8A]/50 focus:border-[#8B9D8A] transition-all duration-300 hover:border-[#8B9D8A]/40 dark:hover:border-[#6B7A6A]/50 cursor-pointer"
                    >
                      <option value="">Select a topic</option>
                      <option value="order">📦 Order Status & Tracking</option>
                      <option value="custom">✨ Custom Product Inquiry</option>
                      <option value="beauty">💄 Beauty Consultation</option>
                      <option value="ingredients">🌿 Ingredient Questions</option>
                      <option value="wholesale">🤝 Wholesale Partnership</option>
                      <option value="returns">↩️ Returns & Exchanges</option>
                      <option value="support">💬 General Support</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B9D8A]/5 to-[#F5C5A8]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2A2A2A] dark:text-[#F5F5F5] mb-2 group-focus-within:text-[#8B9D8A] transition-colors duration-300">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 bg-white/70 dark:bg-[#1A1A1A]/70 text-[#2A2A2A] dark:text-[#F5F5F5] focus:ring-2 focus:ring-[#8B9D8A]/50 focus:border-[#8B9D8A] transition-all duration-300 placeholder:text-[#2A2A2A]/50 dark:placeholder:text-[#F5F5F5]/50 resize-none hover:border-[#8B9D8A]/40 dark:hover:border-[#6B7A6A]/50"
                      placeholder="Tell us more about how we can assist you with your natural beauty journey..."
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B9D8A]/5 to-[#F5C5A8]/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#8B9D8A]/5 via-[#F5C5A8]/5 to-[#D4806B]/5 dark:from-[#6B7A6A]/10 dark:via-[#E8C4A8]/10 dark:to-[#C18B6B]/10 rounded-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8]"></div>
                  <p className="text-sm text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70 text-center">
                    <strong className="text-[#2A2A2A] dark:text-[#F5F5F5]">Need immediate assistance?</strong> Email us directly at{' '}
                    <a 
                      href="mailto:support@tonnika.com" 
                      className="text-[#D4806B] hover:text-[#8B9D8A] font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300"
                    >
                      support@tonnika.com
                    </a>
                    {' '}or call us at{' '}
                    <a 
                      href="tel:+18881234567" 
                      className="text-[#D4806B] hover:text-[#8B9D8A] font-semibold underline decoration-2 underline-offset-2 transition-colors duration-300"
                    >
                      +1 (888) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ + Contact Info */}
          <div className="space-y-12">
            {/* FAQ Section */}
            <div className="bg-white/90 dark:bg-[#2A2A2A]/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#F5C5A8]/10 to-transparent rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-8 flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-[#F5C5A8] to-[#D4806B] rounded-full"></div>
                Frequently Asked Questions
                <div className="flex-1 h-px bg-gradient-to-r from-[#F5C5A8]/30 to-transparent ml-4"></div>
              </h3>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 rounded-2xl overflow-hidden bg-white/60 dark:bg-[#1A1A1A]/60 hover:bg-white/80 dark:hover:bg-[#1A1A1A]/80 transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left text-[#2A2A2A] dark:text-[#F5F5F5] font-semibold hover:bg-[#8B9D8A]/5 dark:hover:bg-[#6B7A6A]/10 transition-all duration-300 group"
                    >
                      <span className="group-hover:text-[#8B9D8A] transition-colors duration-300 pr-4">
                        {faq.question}
                      </span>
                      <div className={`transform transition-all duration-300 ${expandedFAQ === index ? 'rotate-180' : ''} text-[#D4806B] shrink-0`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-4 text-sm text-[#2A2A2A]/80 dark:text-[#F5F5F5]/80 leading-relaxed border-t border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 pt-4 bg-gradient-to-r from-[#8B9D8A]/5 to-[#F5C5A8]/5 dark:from-[#6B7A6A]/5 dark:to-[#E8C4A8]/5">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-[#8B9D8A]/10 via-white/90 to-[#F5C5A8]/10 dark:from-[#6B7A6A]/10 dark:via-[#2A2A2A]/90 dark:to-[#C18B6B]/10 backdrop-blur-md p-8 rounded-3xl border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B9D8A] via-[#D4806B] to-[#F5C5A8]"></div>
              
              <h3 className="text-xl font-bold text-[#2A2A2A] dark:text-[#F5F5F5] mb-6 flex items-center gap-3">
                <div className="w-2 h-6 bg-gradient-to-b from-[#D4806B] to-[#8B9D8A] rounded-full"></div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-[#1A1A1A]/60 rounded-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8B9D8A] to-[#D4806B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">Email Support</p>
                    <a href="mailto:support@tonnika.com" className="text-sm text-[#D4806B] hover:text-[#8B9D8A] transition-colors duration-300">
                      support@tonnika.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-[#1A1A1A]/60 rounded-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F5C5A8] to-[#D4806B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">Phone Support</p>
                    <a href="tel:+18881234567" className="text-sm text-[#D4806B] hover:text-[#8B9D8A] transition-colors duration-300">
                      +1 (888) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-[#1A1A1A]/60 rounded-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D4806B] to-[#8B9D8A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">Live Chat</p>
                    <p className="text-sm text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70">Mon–Fri, 9am–5pm EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/60 dark:bg-[#1A1A1A]/60 rounded-xl border border-[#8B9D8A]/10 dark:border-[#6B7A6A]/20 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8B9D8A] to-[#F5C5A8] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2A2A2A] dark:text-[#F5F5F5]">Response Time</p>
                    <p className="text-sm text-[#2A2A2A]/70 dark:text-[#F5F5F5]/70">Within 24 hours</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-[#8B9D8A]/10 to-[#F5C5A8]/10 dark:from-[#6B7A6A]/10 dark:to-[#E8C4A8]/10 rounded-xl border border-[#8B9D8A]/20 dark:border-[#6B7A6A]/20">
                  <p className="text-xs text-[#2A2A2A]/60 dark:text-[#F5F5F5]/60 text-center">
                    🌿 <strong>Sustainability Note:</strong> We{`'`}re committed to eco-friendly practices in all our communications and packaging
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}