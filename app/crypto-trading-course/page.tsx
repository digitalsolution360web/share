import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  PieChart,
  Star,
  BookOpen,
  Layers,
  ArrowLeft,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Trading Course | Master Bitcoin & Altcoins | Skills Academy",
  description: "Learn professional crypto trading from beginner to pro. Master Bitcoin, Altcoins, Futures and Price Action with live market examples at Share Market Skills Academy.",
};

export default function CryptoTradingCourse() {
  const modules = [
    "Module 1: Introduction to Crypto",
    "Module 2: Exchange Setup & Wallets",
    "Module 3: Chart Reading Basics",
    "Module 4: Price Action Mastery",
    "Module 5: Futures Trading Strategy",
    "Module 6: Risk Management System",
    "Module 7: Live Trading Practice",
  ];

  const whatYouWillLearn = [
    "Basics of Cryptocurrency & Blockchain",
    "How to trade Bitcoin & Altcoins",
    "Technical Analysis (Support/Resistance, Trend, Patterns)",
    "Price Action Strategy (No indicators dependency)",
    "Futures Trading & Risk Management",
    "Live Trading Sessions & Case Studies",
    "Psychology of Successful Traders",
  ];

  const benefits = [
    {
      title: "Market Insights",
      desc: "Understand how crypto markets actually work",
      icon: <TrendingUp size={24} />,
    },
    {
      title: "Proven Strategies",
      desc: "Trade with confidence using proven strategies",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Common Pitfalls",
      desc: "Avoid common beginner mistakes",
      icon: <Zap size={24} />,
    },
    {
      title: "Financial Freedom",
      desc: "Build consistent income skills",
      icon: <PieChart size={24} />,
    },
  ];

  const whyChooseUs = [
    { title: "Simple Language", desc: "Hindi + English Explanation", icon: <Star size={18} /> },
    { title: "Practical First", desc: "No Theory Overload", icon: <BookOpen size={18} /> },
    { title: "Profit Focused", desc: "Focus on Real Profits, Not Hype", icon: <TrendingUp size={18} /> },
    { title: "Structured Path", desc: "Beginner to Advanced Path", icon: <Layers size={18} /> }
  ];

  const whoIsThisFor = [
    "Beginners who want to start crypto trading",
    "Stock market traders shifting to crypto",
    "Students & working professionals",
    "Anyone looking for side income or full-time trading"
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ================= HERO SECTION (DARK) ================= */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-[#111] overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7ED321]/10 blur-[120px] rounded-full -mr-20 -mt-20 opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#7ED321]/5 blur-[100px] rounded-full -ml-10 -mb-10 opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
             <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7ED321] mb-6 text-sm transition-all"
                >
                <ArrowLeft size={16} /> Back to Courses
            </Link>

            <p className="text-[#7ED321] font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
               Premium Crypto Trading Course
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[54px] font-extrabold text-white mb-6 leading-[1.1]">
              Master Crypto Trading & <br />
              <span className="text-[#7ED321]">Build Real Wealth 🚀</span>
            </h1>
            <p className="text-base md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Learn Bitcoin, Altcoins, Futures & Price Action from Beginner to Pro — Step-by-Step with Live Market Examples.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/contact" className="bg-[#7ED321] text-black px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(126,211,33,0.3)]">
                Enroll Now
              </Link>
              <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm">
                Watch Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY THIS COURSE (WHITE) ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7ED321] font-bold tracking-widest uppercase mb-4 text-sm">Why This Course?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight text-gray-900">
                Master the Markets with <br />
                <span className="text-[#7ED321]">Confidence & Clarity</span>
              </h2>

              <ul className="space-y-8">
                {benefits.map((item, i) => (
                  <li key={i} className="flex gap-6 group">
                    <div className="bg-[#7ED321]/10 text-[#7ED321] p-3 rounded-2xl group-hover:bg-[#7ED321] group-hover:text-white transition-all h-fit shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7ED321]/20 rounded-full blur-3xl opacity-30" />
               <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 p-5 border border-gray-100">
                <Image
                  src="/cources/cryptocurrency-course.jpeg"
                  alt="Crypto Training Session"
                  width={600}
                  height={800}
                  className="rounded-[2.5rem] w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl z-20 border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-[#7ED321] text-white p-3 rounded-xl shadow-lg shadow-[#7ED321]/40">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900 leading-none">100%</p>
                    <p className="text-gray-500 text-xs font-bold uppercase mt-1">Practical Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU WILL LEARN (DARK) ================= */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-white">What You Will Learn</h2>
            <p className="text-gray-400 text-lg leading-relaxed">A comprehensive curriculum designed to take you from a beginner to a professional crypto trader.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouWillLearn.map((item, i) => (
              <div key={i} className="bg-[#111] p-6 rounded-2xl shadow-sm border border-white/10 flex items-center gap-4 hover:border-[#7ED321] transition-all group hover:bg-[#151515]">
                <div className="bg-[#7ED321]/10 text-[#7ED321] p-2 rounded-full group-hover:bg-[#7ED321] group-hover:text-black transition-all">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-semibold text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO IS THIS FOR / WHY US (WHITE) ================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#7ED321]/5 rounded-full blur-[100px] opacity-30" />
           <div className="grid lg:grid-cols-5 gap-8 relative z-10">
            {/* Who is this for */}
            <div className="lg:col-span-3 bg-gray-50 p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900">
                <span className="text-[#7ED321]">🎯</span> Who Is This For?
              </h2>
              <ul className="space-y-5">
                {whoIsThisFor.map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-base text-gray-700">
                    <div className="w-2 h-2 bg-[#7ED321] rounded-full flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="lg:col-span-2 bg-[#111] text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-white/10">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ED321]/10 rounded-full blur-3xl -mr-16 -mt-16" />
               <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                <span className="text-[#7ED321]">🧠</span> Why Choose Us?
              </h2>
              <div className="space-y-6 relative z-10">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-[#7ED321] mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE MODULES (LIGHT) ================= */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900">📦 Course Modules</h2>
            <p className="text-gray-500 text-sm">A step-by-step roadmap to crypto trading mastery</p>
          </div>
          
          <div className="space-y-3">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-white border border-gray-200 p-4 md:p-5 rounded-2xl hover:border-[#7ED321] transition-all shadow-sm group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-gray-200 group-hover:text-[#7ED321] transition-colors w-6">
                    {index + 1}
                  </span>
                  <span className="text-base font-semibold text-gray-800">{module}</span>
                </div>
                <CheckCircle2 size={18} className="text-[#7ED321] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link
                href="/contact"
                className="inline-block bg-[#7ED321] text-black px-10 py-4 rounded-full font-bold text-base hover:scale-105 transition-all shadow-lg shadow-[#7ED321]/10"
              >
                Start Your Crypto Journey
              </Link>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA (DARK) ================= */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-zinc-900" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">Ready to Build Your <br /> <span className="text-[#7ED321]">Crypto Trading Edge?</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-[#7ED321] text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-[#7ED321]/20">
              Enroll Now
            </Link>
             <a href="tel:+918460188483" className="bg-white/5 text-white border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                <Phone size={20} /> +91 84601 88483
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
