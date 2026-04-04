import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, TrendingUp, BookOpen, Star, Layers, PieChart, ShieldCheck, Zap } from "lucide-react";

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
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Proven Strategies",
      desc: "Trade with confidence using proven strategies",
      icon: <ShieldCheck size={20} />,
    },
    {
      title: "Common Pitfalls",
      desc: "Avoid common beginner mistakes",
      icon: <Zap size={20} />,
    },
    {
      title: "Financial Freedom",
      desc: "Build consistent income skills",
      icon: <PieChart size={20} />,
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex items-center bg-cover bg-center pt-28 md:pt-36 pb-16 md:pb-24"
        style={{ backgroundImage: "url('/banner/b2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7ED321] mb-6 text-sm transition-all"
          >
            <ArrowLeft size={16} /> Back to Courses
          </Link>

          <div className="max-w-3xl">
            <p className="text-[#7ED321] font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
              Premium Crypto Trading Course
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6">
              Master Crypto Trading & <br />
              <span className="text-[#7ED321]">Build Real Wealth 💰</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed font-light">
              Learn Bitcoin, Altcoins, Futures & Price Action from Beginner to Pro — Step-by-Step with Live Market Examples.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-[#7ED321] text-black px-7 py-3 rounded-full font-bold text-sm md:text-base hover:bg-[#6ac11c] transition-all shadow-lg"
              >
                👉 Enroll Now
              </Link>
              <Link
                href="/contact"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-7 py-3 rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all"
              >
                👉 Watch Free Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY THIS COURSE? ================= */}
      <section className="py-16 md:py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why This Course?</h2>
            <p className="text-gray-600 text-base">
              The cryptocurrency market is one of the fastest-growing financial opportunities in the world. 
              But without proper knowledge, it can be risky. This course is designed to help you:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-[#7ED321]/30 transition-all shadow-sm">
                <div className="text-[#7ED321] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU WILL LEARN ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What You Will Learn</h2>
            <div className="grid sm:grid-cols-1 gap-3">
              {whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50/80 p-3.5 rounded-lg border border-transparent hover:border-[#7ED321]/20 transition-all group">
                  <div className="bg-[#7ED321] text-white p-0.5 rounded-full scale-75">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-medium text-gray-700 text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-square">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/cources/cryptocurrency-course.jpeg" 
              alt="Crypto Trading Learning" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-white font-semibold text-lg">Practical Learning with Real-world Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO IS THIS FOR? / WHY US ================= */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Who is this for */}
            <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="text-[#7ED321]">🎯</span> Who Is This For?
              </h2>
              <ul className="space-y-5">
                {[
                  "Beginners who want to start crypto trading",
                  "Stock market traders shifting to crypto",
                  "Students & working professionals",
                  "Anyone looking for side income or full-time trading"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-base text-gray-700">
                    <div className="w-1.5 h-1.5 bg-[#7ED321] rounded-full flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="lg:col-span-2 bg-[#111] text-white p-8 md:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7ED321]/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <h2 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
                <span className="text-[#7ED321]">🧠</span> Why Choose Us?
              </h2>
              <div className="space-y-6 relative z-10">
                {[
                  { title: "Simple Language", desc: "Hindi + English Explanation", icon: <Star size={18} /> },
                  { title: "Practical First", desc: "No Theory Overload", icon: <BookOpen size={18} /> },
                  { title: "Profit Focused", desc: "Focus on Real Profits, Not Hype", icon: <TrendingUp size={18} /> },
                  { title: "Structured Path", desc: "Beginner to Advanced Path", icon: <Layers size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-[#7ED321] mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE MODULES ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">📦 Course Modules</h2>
          <p className="text-gray-500 text-sm mb-12">A step-by-step roadmap to crypto trading mastery</p>
          
          <div className="text-left space-y-3">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between bg-gray-50/50 hover:bg-white border border-gray-100 p-4 md:p-5 rounded-xl transition-all shadow-sm group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-gray-300 group-hover:text-[#7ED321] transition-colors w-6">
                    {index + 1}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-gray-800">{module}</span>
                </div>
                <CheckCircle2 size={18} className="text-[#7ED321] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              href="/contact"
              className="inline-block bg-[#7ED321] text-black px-10 py-4 rounded-full font-bold text-base hover:bg-[#6ac11c] transition-all shadow-lg transform hover:-translate-y-1"
            >
              Start Your Crypto Journey
            </Link>
            <p className="mt-4 text-xs text-gray-400">Join our community of successful traders</p>
          </div>
        </div>
      </section>
    </div>
  );
}
