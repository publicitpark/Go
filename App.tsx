
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Clock,
  LayoutGrid,
  ShieldCheck,
  UserCheck,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { 
  COMPANY_NAME, 
  WHATSAPP_NUMBER, 
  PHONE_NUMBER, 
  INGREDIENTS, 
  REVIEWS, 
  FAQS, 
  BENEFITS 
} from './constants';

// --- Sub-components ---

const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">{children}</h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    <div className="w-24 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
  </div>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-dark-green p-2 rounded-lg">
            <ShieldCheck className="text-gold" size={24} />
          </div>
          <span className="font-bold text-xl text-dark-green hidden md:block">{COMPANY_NAME}</span>
        </div>
        <div className="flex gap-2 md:gap-4">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-dark-green text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
            <Phone size={16} /> <span className="hidden sm:inline">কল করুন</span>
          </a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-all">
            <MessageCircle size={16} /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

const FAQItem: React.FC<{ item: typeof FAQS[0] }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-gray-800 group-hover:text-dark-green transition-colors">{item.question}</span>
        {isOpen ? <ChevronUp className="text-gold" /> : <ChevronDown className="text-gold" />}
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 leading-relaxed transition-all">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-block bg-green-100 text-dark-green px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              ১০০% প্রাকৃতিক ও অর্গানিক
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-dark-green leading-tight mb-6">
              চুল পড়া নিয়ে আর নয় চিন্তা! <span className="text-gold">অরণ্য অর্গানিক</span> ফিরিয়ে আনবে আপনার আত্মবিশ্বাস
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              মাত্র কয়েক সপ্তাহের নিয়মিত ব্যবহারে চুল পড়া বন্ধ করুন এবং নতুন চুল গজাতে সাহায্য করুন আমাদের ভেষজ তেলের জাদুকরী স্পর্শে।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-green-200">
                <MessageCircle size={24} /> WhatsApp এ অর্ডার করুন
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="bg-dark-green text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg">
                <Phone size={24} /> এখনই কল করুন
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-6 opacity-80">
              <div className="flex items-center gap-1 text-sm font-medium"><CheckCircle2 className="text-green-600" size={18} /> Natural</div>
              <div className="flex items-center gap-1 text-sm font-medium"><CheckCircle2 className="text-green-600" size={18} /> Chemical Free</div>
              <div className="flex items-center gap-1 text-sm font-medium"><CheckCircle2 className="text-green-600" size={18} /> 100% Organic</div>
              <div className="flex items-center gap-1 text-sm font-medium"><CheckCircle2 className="text-green-600" size={18} /> Made in BD</div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="absolute -z-10 w-64 h-64 md:w-96 md:h-96 bg-gold opacity-20 blur-3xl rounded-full"></div>
            <img 
              src="https://picsum.photos/seed/hair-oil-bottle/600/800" 
              alt="Herbal Hair Oil Bottle" 
              className="w-full max-w-sm rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="আপনি কি এই সমস্যাগুলোর সম্মুখীন হচ্ছেন?">কেন আপনার চুলের বিশেষ যত্ন প্রয়োজন?</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "অতিরিক্ত চুল পড়া", icon: "💆‍♂️" },
              { label: "খুশকির উপদ্রব", icon: "❄️" },
              { label: "চুল পাতলা হওয়া", icon: "📉" },
              { label: "অকালে চুল পাকা", icon: "🦳" }
            ].map((p, i) => (
              <div key={i} className="bg-cream p-8 rounded-2xl text-center border border-gray-100 hover:border-gold transition-colors shadow-sm">
                <div className="text-5xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-lg text-dark-green">{p.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="আমাদের ভেষজ তেলের প্রতিটি ফোঁটায় রয়েছে প্রকৃতির আশীর্বাদ">কিভাবে আমাদের তেল সমাধান দেয়?</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-cream p-3 rounded-lg">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-green mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">প্রাকৃতিক উপাদানের গুণে আপনার চুলের স্বাস্থ্য নিশ্চিত করে প্রথম দিন থেকেই।</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">গোপন রহস্য - প্রাকৃতিক উপাদান</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {INGREDIENTS.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-4 mx-auto w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-gold shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-2">{item.name}</h3>
                <p className="text-sm opacity-80 leading-snug">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details & How To Use */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-dark-green mb-8">পণ্য পরিচিতি ও তথ্য</h2>
            <ul className="space-y-6">
              {[
                { label: "সাইজ", val: "১০০ মিলি", icon: <LayoutGrid size={20}/> },
                { label: "উপযোগিতা", val: "নারী ও পুরুষ উভয়ের জন্য", icon: <UserCheck size={20}/> },
                { label: "সংরক্ষণ", val: "শুষ্ক ও ঠান্ডা জায়গায় রাখুন", icon: <Clock size={20}/> },
                { label: "মেয়াদ", val: "উৎপাদন থেকে ২ বছর", icon: <ShieldCheck size={20}/> }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 bg-cream p-4 rounded-xl">
                  <span className="bg-dark-green text-gold p-2 rounded-lg">{item.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-bold uppercase">{item.label}</span>
                    <span className="font-semibold text-gray-800">{item.val}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark-green mb-8">কিভাবে ব্যবহার করবেন?</h2>
            <div className="space-y-8 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-gold">
              {[
                { title: "তেল গরম করুন", desc: "হালকা কুসুম গরম করে নিলে চুলের গভীরে পুষ্টি পৌঁছায়।" },
                { title: "ম্যাসাজ করুন", desc: "আঙুলের ডগা দিয়ে ৫-১০ মিনিট মাথায় ভালো করে ম্যাসাজ করুন।" },
                { title: "অপেক্ষা করুন", desc: "কমপক্ষে ২ ঘন্টা বা সারা রাত লাগিয়ে রাখুন।" },
                { title: "শ্যাম্পু করুন", desc: "প্রাকৃতিক বা মাইল্ড কোনো শ্যাম্পু দিয়ে ধুয়ে ফেলুন।" }
              ].map((step, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-dark-green text-gold rounded-full flex items-center justify-center font-bold z-10 border-2 border-gold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-dark-green mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="আমাদের গ্রাহকদের অবিশ্বাস্য পরিবর্তন">বাস্তব ফলাফল</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative">
                  <img src="https://picsum.photos/seed/before/400/500" alt="Before" className="rounded-lg h-64 w-full object-cover" />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold uppercase">Before</span>
                </div>
                <div className="relative">
                  <img src="https://picsum.photos/seed/after/400/500" alt="After" className="rounded-lg h-64 w-full object-cover" />
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-bold uppercase">After</span>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600 italic">"মাত্র ১ মাস ব্যবহারে নতুন চুল গজানো শুরু করেছে।"</p>
            </div>
            <div className="flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-dark-green mb-4">আমাদের ওপর কেন ভরসা করবেন?</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                অরণ্য অর্গানিক শুধু একটি তেল নয়, এটি হাজারো মানুষের সুস্থ চুলের স্বপ্ন পূরণের সঙ্গী। আমরা সরাসরি প্রাকৃতিকভাবে সংগৃহীত উপাদান ব্যবহার করি যা কোনো প্রকার কৃত্রিম রঙ বা প্রিজারভেটিভ ছাড়াই তৈরি।
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> ল্যাব টেস্টেড ১০০% বিশুদ্ধতা</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> কোনো ক্ষতিকর পার্শ্বপ্রতিক্রিয়া নেই</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> গ্রাহক সন্তুষ্টিতে আমরা শীর্ষে</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>গ্রাহকদের মতামত</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-cream p-8 rounded-3xl relative border border-gray-100">
                <div className="flex text-gold mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.comment}"</p>
                <div>
                  <h4 className="font-bold text-dark-green">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-dark-green relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-gold text-dark-green px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
            সীমিত সময়ের অফার!
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">সেরা ভেষজ তেল এখন সেরা দামে</h2>
          <div className="bg-white text-gray-800 max-w-lg mx-auto p-12 rounded-[2rem] shadow-2xl border-b-8 border-gold">
            <h3 className="text-2xl font-bold text-dark-green mb-2">১০০% অর্গানিক হেয়ার অয়েল</h3>
            <p className="text-gray-500 mb-8">(১০০ মিলি সাইজ)</p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-2xl text-gray-400 line-through">৳ ৯৫০</span>
              <span className="text-5xl font-black text-dark-green">৳ ৭৫০</span>
            </div>
            <div className="space-y-4 mb-10 text-left px-4">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> ক্যাশ অন ডেলিভারি (Cash on Delivery)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> সারা বাংলাদেশে হোম ডেলিভারি</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-green-600" /> ডেলিভারি চার্জ মাত্র ৬০ টাকা</div>
            </div>
            <div className="flex flex-col gap-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="bg-green-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                <MessageCircle size={28} /> WhatsApp এ অর্ডার করুন
              </a>
              <p className="text-sm text-gray-500 font-bold">অর্ডার কনফার্ম করতে নিচের বাটনে কল করুন</p>
              <a href={`tel:${PHONE_NUMBER}`} className="bg-dark-green text-white py-4 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                <Phone size={24} /> কল করুন: {PHONE_NUMBER}
              </a>
            </div>
          </div>
          <p className="mt-8 text-gold font-bold">স্টক ফুরিয়ে যাওয়ার আগেই আজই আপনার অর্ডারটি বুক করুন!</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle>সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)</SectionTitle>
          <div className="mt-8">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Last Order Section */}
      <section className="py-16 bg-cream border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-green mb-8">এখনই বদলে নিন আপনার চুলের ভাগ্য</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="flex items-center justify-center gap-3 bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg">
              <MessageCircle size={28} /> WhatsApp অর্ডার
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-3 bg-dark-green text-white px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-lg">
              <Phone size={24} /> সরাসরি কল করুন
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-green text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gold p-2 rounded-lg">
                  <ShieldCheck className="text-dark-green" size={24} />
                </div>
                <span className="font-bold text-2xl text-gold">{COMPANY_NAME}</span>
              </div>
              <p className="text-gray-300 max-w-md leading-relaxed">
                আমরা বিশ্বাস করি সৌন্দর্যের শুরু হয় প্রকৃতি থেকে। আমাদের লক্ষ্য হলো আপনাকে রাসায়নিকমুক্ত ও কার্যকর উপায়ে সুস্থ চুল উপহার দেওয়া।
              </p>
            </div>
            <div>
              <h4 className="text-gold font-bold text-lg mb-6 uppercase tracking-wider">যোগাযোগ</h4>
              <div className="space-y-4">
                <p className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer">
                  <Phone size={18} className="text-gold" /> {PHONE_NUMBER}
                </p>
                <p className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer">
                  <MessageCircle size={18} className="text-gold" /> {WHATSAPP_NUMBER}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-gold font-bold text-lg mb-6 uppercase tracking-wider">সোশ্যাল মিডিয়া</h4>
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-dark-green transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-dark-green transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-dark-green transition-all">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm opacity-60">
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved. 
            <p className="mt-2 text-xs">Developed with ❤️ in Bangladesh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
