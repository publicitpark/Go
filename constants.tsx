
import React from 'react';
import { Leaf, ShieldCheck, Droplets, Heart, Sparkles, UserCheck } from 'lucide-react';
import { Ingredient, Review, FAQItem } from './types';

export const COMPANY_NAME = "অরণ্য অর্গানিক (Aranya Organic)";
export const WHATSAPP_NUMBER = "8801700000000";
export const PHONE_NUMBER = "+8801700000000";

export const INGREDIENTS: Ingredient[] = [
  {
    name: "আমলকি",
    description: "ভিটামিন সি সমৃদ্ধ যা চুলের গোড়া শক্ত করে এবং অকাল পক্বতা রোধ করে।",
    image: "https://picsum.photos/seed/amla/200/200"
  },
  {
    name: "কালোজিরা",
    description: "মাথার ত্বকের রক্ত সঞ্চালন বাড়িয়ে নতুন চুল গজাতে জাদুর মতো কাজ করে।",
    image: "https://picsum.photos/seed/kalojira/200/200"
  },
  {
    name: "নারিকেল তেল",
    description: "১০০% খাঁটি নারিকেল তেল যা চুলে গভীর পুষ্টি জোগায় ও আর্দ্রতা বজায় রাখে।",
    image: "https://picsum.photos/seed/coconut/200/200"
  },
  {
    name: "মেথি",
    description: "প্রোটিন সমৃদ্ধ মেথি খুশকি দূর করে এবং চুলকে সিল্কি ও উজ্জ্বল করে।",
    image: "https://picsum.photos/seed/methi/200/200"
  },
  {
    name: "ভৃঙ্গরাজ",
    description: "চুল পড়া দ্রুত কমিয়ে চুলে প্রাকৃতিক জেল্লা ফিরিয়ে আনতে অনন্য।",
    image: "https://picsum.photos/seed/bringraj/200/200"
  }
];

export const REVIEWS: Review[] = [
  {
    name: "সুমাইয়া আক্তার",
    city: "ঢাকা",
    comment: "মাত্র ১৫ দিন ব্যবহারে আমার চুল পড়া প্রায় অর্ধেক কমে গেছে। খুব ভালো পণ্য!",
    rating: 5
  },
  {
    name: "রাকিব হাসান",
    city: "চট্টগ্রাম",
    comment: "আমি অনেক তেল ট্রাই করেছি, কিন্তু এই তেলের মতো কার্যকর আর কিছু পাইনি।",
    rating: 5
  },
  {
    name: "তানিয়া সুলতানা",
    city: "সিলেট",
    comment: "খুশকির জন্য এটি সেরা। চুলের রুক্ষতাও অনেক কমেছে। ধন্যবাদ অরণ্য অর্গানিক।",
    rating: 4
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "এটি কি সত্যিই ১০০% অর্গানিক?",
    answer: "হ্যাঁ, আমরা কোনো প্রকার ক্ষতিকারক কেমিক্যাল বা কৃত্রিম সুগন্ধি ব্যবহার করি না। এটি সম্পূর্ণ ভেষজ উপাদানে তৈরি।"
  },
  {
    question: "ফলাফল পেতে কতদিন সময় লাগবে?",
    answer: "সাধারণত ২-৩ সপ্তাহ নিয়মিত ব্যবহারে চুল পড়া কমার লক্ষণ দেখা যায়। ভালো ফলাফলের জন্য অন্তত ২ মাস ব্যবহারের পরামর্শ দিচ্ছি।"
  },
  {
    question: "পুরুষ এবং মহিলা উভয়ই কি ব্যবহার করতে পারবে?",
    answer: "হ্যাঁ, এটি পুরুষ এবং মহিলা উভয়ের মাথার ত্বকের জন্যই উপযোগী করে তৈরি করা হয়েছে।"
  },
  {
    question: "পার্শ্বপ্রতিক্রিয়া হওয়ার কোনো সম্ভাবনা আছে?",
    answer: "সম্পূর্ণ প্রাকৃতিক হওয়ায় এর কোনো পার্শ্বপ্রতিক্রিয়া নেই। তবে আপনার যদি কোনো নির্দিষ্ট উপাদানে অ্যালার্জি থাকে তবে ব্যবহারের আগে একবার টেস্ট করে নিতে পারেন।"
  }
];

export const BENEFITS = [
  { title: "চুল পড়া কমায়", icon: <ShieldCheck size={32} className="text-gold" /> },
  { title: "নতুন চুল গজাতে সাহায্য করে", icon: <Leaf size={32} className="text-gold" /> },
  { title: "খুশকি দূর করে", icon: <Sparkles size={32} className="text-gold" /> },
  { title: "স্কাল্প পুষ্টি জোগায়", icon: <Droplets size={32} className="text-gold" /> },
  { title: "চুল ঘন ও কালো করে", icon: <Heart size={32} className="text-gold" /> },
  { title: "রাসায়নিকমুক্ত নিরাপদ", icon: <UserCheck size={32} className="text-gold" /> },
];
