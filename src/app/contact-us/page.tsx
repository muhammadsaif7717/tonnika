'use client'

'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with tracking details. You can also track it in your account dashboard.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We ship worldwide. Shipping costs and delivery times vary depending on your location.",
  },
  {
    question: "Can I customize a product?",
    answer: "Absolutely. We offer engraving and color customization options on select products. Just mention it in your inquiry.",
  },
];

export default function ContactPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Form */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-rose-100/50 dark:border-rose-900/30">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <select
                id="subject"
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="">Select a topic</option>
                <option value="order">Order Inquiry</option>
                <option value="custom">Custom Order</option>
                <option value="partnership">Partnership Request</option>
                <option value="support">General Support</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm focus:ring-rose-500 focus:border-rose-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="mt-8 text-sm text-gray-600 dark:text-gray-400 text-center">
            Or email us at <a href="mailto:support@tonnika.com" className="underline text-rose-600 dark:text-rose-400">support@tonnika.com</a>
          </div>
        </div>

        {/* FAQ + Contact Info */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-rose-100 dark:border-rose-900/40 rounded-lg overflow-hidden bg-white/70 dark:bg-gray-900/70">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left text-gray-800 dark:text-white font-medium hover:bg-rose-50 dark:hover:bg-gray-800 transition"
                  >
                    {faq.question}
                    {expandedFAQ === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4 text-sm text-gray-600 dark:text-gray-300 transition">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/70 dark:bg-gray-900/70 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-rose-500" /> support@tonnika.com</li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-rose-500" /> +1 (888) 123-4567</li>
              <li className="flex items-center gap-3"><MessageSquare className="w-5 h-5 text-rose-500" /> Live Chat: Mon–Fri, 9am–5pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
