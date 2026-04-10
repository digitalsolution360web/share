import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  IndianRupee,
  Users,
  GraduationCap,
  Award,
  Smartphone,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Crypto Trading Course | Transform Your Future with Expert Training",
  description: "Learn Bitcoin, Altcoins, Futures, Price Action, and Risk Management from beginner to advanced with real market examples and practical guidance.",
};

export default function CryptoTradingCourse() {
  const basicCourse = [
    "Introduction to Crypto Market",
    "Crypto Exchanges & Platforms",
    "Wallets & Security",
    "Chart Setup (TradingView)",
    "Candlestick Patterns",
    "Chart Patterns",
    "Types of Trend & How to Identify a Trend",
    "Support & Resistance and Price Action",
    "EMA",
    "RSI",
    "Volume Analysis"
  ];

  const advancedCourse = [
    "Bitcoin Market Structure & Altcoin Behavior",
    "The Power of Compounding & Crypto Growth Mindset",
    "Technical Confirmation Using Trend & Momentum",
    "Multi-Timeframe Analysis",
    "Deep Dive into Market Cycles",
    "Swing Trading Strategies for Crypto",
    "Relative Strength & Market Selection",
    "Smart Money Concepts (SMC)",
    "Psychology as a Trader",
    "Trade Journal & Performance Review",
    "Real Trade Case Studies"
  ];

  const futuresOptions = [
    "Futures Trading Basics",
    "Liquidation & Leverage Risk",
    "Order Types",
    "Funding Rate & Open Interest",
    "Options Basics",
    "Option Buying Strategy",
    "Option Selling Strategy",
    "Hedging Techniques",
    "Non-Directional Strategies",
    "Payoff Charts"
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 md:pt-32 pb-12 bg-[#111] overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7ED321]/10 blur-[120px] rounded-full -mr-20 -mt-20 opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#7ED321]/5 blur-[100px] rounded-full -ml-10 -mb-10 opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white mb-6 leading-[1.2]">
              Transform Your Future
              with Our <br />
              <span className="text-[#7ED321]">Expert Crypto Trading Training!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
              Learn Bitcoin, Altcoins, Futures, Price Action, and Risk Management — from beginner to advanced, with real market examples and practical guidance.
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

      {/* ================= MENTOR SECTION ================= */}
      <section className="py-12 md:py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Crypto Mentor Name 1 Card */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group transition-all hover:border-[#7ED321]/30">
              {/* TOP SECTION: IMAGE + MAIN DETAILS */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                <div className="w-40 h-40 md:w-52 md:h-52 relative shrink-0">
                  <div className="absolute inset-0 rounded-full border-4 border-[#7ED321]/20 group-hover:border-[#7ED321]/50 transition-all z-10" />
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl relative">
                    <Image src="/ashish.png" alt="Crypto Mentor Name 1" fill className="object-cover object-top" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-1">Ashish Singh</h3>
                  <p className="text-[#7ED321] text-sm font-bold tracking-widest uppercase">CRYPTO TRADING MENTOR | FULL-TIME TRADER</p>
                  <p className="text-gray-500 italic text-sm mt-3 leading-relaxed">“Trading crypto is not about guessing — it is about reading the market with discipline.”</p>
                </div>
              </div>

              {/* MIDDLE SECTION: FULL WIDTH SPECIALIZATION */}
              <div className="mb-8 w-full">
                <div className="space-y-3">
                  <p className="font-bold text-[#7ED321] text-xs uppercase tracking-tighter flex items-center gap-1">✔ MY SPECIALIZATION:</p>
                  <p className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed">✔ Crypto Market Foundations – Understanding how digital asset markets work</p>
                  <p className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed">✔ Spot & Futures Trading – Practical strategies for different market conditions</p>
                  <p className="text-gray-300 text-sm flex items-start gap-2 leading-relaxed">✔ Risk Management – Protecting capital in highly volatile markets</p>
                </div>
              </div>

              {/* BOTTOM SECTION: WHY FOLLOW + CTA */}
              <div className="pt-6 border-t border-white/10 w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="font-bold text-white text-xs uppercase tracking-tighter mb-2">WHY FOLLOW ME?</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ Practical market experience</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ Structured learning from basics to advanced</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ Focus on risk first, profits second</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#7ED321] font-bold text-sm">📢 Let’s Build Your Trading Edge Together!</p>
                    <div className="text-gray-400 text-[13px] space-y-1">
                      <p>→ DM for mentorship</p>
                      <p>→ Join our next masterclass</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-white font-bold text-sm">
                      <span className="text-[#7ED321]">Connect Now:</span> +91 84601 88483
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Crypto Mentor Name 2 Card */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group transition-all hover:border-[#7ED321]/30">
              {/* TOP SECTION: IMAGE + MAIN DETAILS */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
                <div className="w-40 h-40 md:w-52 md:h-52 relative shrink-0">
                  <div className="absolute inset-0 rounded-full border-4 border-[#7ED321]/20 group-hover:border-[#7ED321]/50 transition-all z-10" />
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl relative">
                    <Image src="/nikhil.png" alt="Nikhil Singh" fill className="object-cover object-top" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-1">Nikhil Singh</h3>
                  <p className="text-[#7ED321] text-sm font-bold tracking-widest uppercase">CRYPTO MARKET ANALYST | TRADING EXPERT</p>
                  <p className="text-gray-500 italic text-sm mt-3 leading-relaxed">“Mastering technical analysis and high-probability crypto setups.”</p>
                </div>
              </div>

              {/* MIDDLE SECTION: FULL WIDTH WHAT I EXCEL AT */}
              <div className="mb-8 w-full">
                <div className="space-y-4">
                  <p className="font-bold text-[#7ED321] text-xs uppercase tracking-tighter flex items-center gap-1">📍 WHAT I EXCEL AT:</p>
                  <div className="space-y-3">
                    {[
                      { t: "Pattern Analysis", d: "Candlesticks, chart patterns, and setup recognition" },
                      { t: "Trendline & Support/Resistance", d: "Identifying key market levels" },
                      { t: "Breakout & Momentum Trading", d: "Catching strong market moves with precision" },
                      { t: "Risk Management", d: "Because capital protection is the first rule of trading" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#7ED321] mt-0.5 shrink-0" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          <span className="font-bold text-white">{item.t}</span> – {item.d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM SECTION: WHY FOLLOW + CTA */}
              <div className="pt-6 border-t border-white/10 w-full">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="font-bold text-white text-xs uppercase tracking-tighter mb-2">WHY FOLLOW ME?</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ Battle-tested crypto strategies</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ High-probability setup identification</p>
                    <p className="text-gray-400 text-sm flex items-center gap-3">✅ Discipline & technical edge focus</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#7ED321] font-bold text-sm">📢 Let’s Build Your Trading Edge Together!</p>
                    <div className="text-gray-400 text-[13px] space-y-1">
                      <p>→ DM for mentorship</p>
                      <p>→ Join our next masterclass</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-white font-bold text-sm">
                      <span className="text-[#7ED321]">Connect Now:</span> +91 99247 68290
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7ED321] font-bold tracking-widest uppercase mb-4 text-sm">Why Choose Us?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                We Don’t Just Teach; <br />
                <span className="text-[#7ED321]">We Mentor!</span>
              </h2>

              <div className="space-y-6">
                {[
                  { title: "Lifetime Support", desc: "Get doubt-clearing guidance and support even after the course ends.", icon: <Users size={24} /> },
                  { title: "Extended Learning Support", desc: "Continue learning through guided practice sessions until you build confidence.", icon: <Clock size={24} /> },
                  { title: "Free Course Material", desc: "Receive study resources and reference material to support your learning.", icon: <BookOpen size={24} /> },
                  { title: "Practical Market Exposure", desc: "Learn through live chart examples, trade setups, and real market case studies.", icon: <Award size={24} /> },
                  { title: "Certificate of Completion", desc: "Earn a certificate to showcase your learning and credibility.", icon: <GraduationCap size={24} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-[#7ED321]/10 text-[#7ED321] p-3 rounded-2xl group-hover:bg-[#7ED321] group-hover:text-white transition-all h-fit shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7ED321]/20 rounded-full blur-3xl" />
              <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 p-5">
                <Image
                  src="/cources/cryptocurrency-course.jpeg"
                  alt="Training Session"
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

      {/* ================= PRACTICAL LEARNING / ROADMAP ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">100% Practical Learning</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#7ED321] mb-5">Complete Training Roadmap</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              From the basics of crypto to advanced trading strategies, we cover everything you need to become a confident trader.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Basic Course */}
            <div className="bg-white p-6 md:p-7 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#7ED321] text-black w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-[#7ED321]/30">1</div>
                <h3 className="text-xl font-bold">Basic Course</h3>
              </div>
              <ul className="space-y-2">
                {basicCourse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-gray-700 font-medium leading-[1.3]">
                    <span className="text-[#7ED321] font-bold w-5 text-base">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Course */}
            <div className="bg-white p-6 md:p-7 rounded-[2rem] shadow-xl border-t-8 border-[#7ED321] relative z-10 lg:scale-105">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7ED321] text-black px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Higher Level</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg">2</div>
                <h3 className="text-xl font-bold">Advanced Course</h3>
              </div>
              <ul className="space-y-2">
                {advancedCourse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-gray-700 font-medium leading-[1.3]">
                    <span className="text-[#7ED321] font-bold w-5 text-base">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Futures & Options */}
            <div className="bg-white p-6 md:p-7 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#7ED321] text-black w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg shadow-[#7ED321]/30">3</div>
                <div>
                  <h3 className="text-xl font-bold">Smart Trading!</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Futures & Options</p>
                </div>
              </div>
              <ul className="space-y-2">
                {futuresOptions.map((item, i) => (
                  <li key={i} className="flex gap-4 text-sm text-gray-700 font-medium leading-[1.3]">
                    <span className="text-[#7ED321] font-bold w-5 text-base">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO SHOULD JOIN ================= */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ED321]/10 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Who Should Join?</h2>
                <div className="grid gap-4">
                  {[
                    { title: "Beginners", icon: "👨‍🎓", desc: "Learn crypto trading from scratch in a simple, structured way." },
                    { title: "Aspiring Full-Time Traders", icon: "📊", desc: "Build a strong foundation to trade professionally." },
                    { title: "Students", icon: "🎓", desc: "Gain a valuable financial skill early." },
                    { title: "Part-Time Traders", icon: "⏳", desc: "Learn to trade alongside your studies or job." },
                    { title: "Investors", icon: "💡", desc: "Understand the market better and make smarter decisions." }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-all group">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/gll.jpeg"
                  alt="Student Community"
                  width={600}
                  height={800}
                  className="rounded-[2.5rem] shadow-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-10">
                  <div className="space-y-4">
                    <p className="text-white text-2xl font-black leading-tight">Join our community of <br /> <span className="text-[#7ED321]">[500+ / X+] successful learners!</span></p>
                    <p className="text-white/80 text-lg font-bold">Master Crypto Trading in Just [X] Weeks / Months!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE DETAILS / PRICING ================= */}
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Schedule */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-snug">Course Schedule & <br /><span className="text-[#7ED321]">Details</span></h2>
              <div className="space-y-6">
                {[
                  { title: "3-Month Comprehensive Course", desc: "Weekly 3 live lectures", icon: <Calendar size={28} /> },
                  { title: "Flexible Batches", desc: "Morning: 10:00 AM | Evening: 7:00 PM", icon: <Clock size={28} /> },
                  { title: "Online & Offline Options", desc: "Learn from anywhere or in person", icon: <Smartphone size={28} /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                    <div className="bg-[#7ED321]/10 text-[#7ED321] p-3 rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 mt-1 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-[#0a0a0a] rounded-[3rem] p-10 md:p-14 text-white relative flex flex-col justify-center shadow-2xl overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ED321]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <p className="text-[#7ED321] font-bold tracking-[0.2em] uppercase text-center mb-10 text-xs">Course Fee Structure</p>
                <div className="space-y-10 mb-12">
                  <div className="text-center group">
                    <div className="flex items-center justify-center gap-3 mb-2 translate-x-[-10px]">
                      <IndianRupee className="text-[#7ED321]" size={36} />
                      <span className="text-3xl md:text-4xl font-black group-hover:scale-110 transition-transform block">12,000/-</span>
                    </div>
                    <p className="text-gray-400 uppercase tracking-widest font-bold text-[10px]">Online Course Fee</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="text-center opacity-70">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <IndianRupee className="text-white/40" size={28} />
                      <span className="text-3xl md:text-4xl font-black text-white/80">15,000/-</span>
                    </div>
                    <p className="text-gray-600 uppercase tracking-widest font-bold text-[10px]">Offline Course Fee</p>
                  </div>
                </div>
                <Link href="/contact" className="block w-full bg-[#7ED321] text-black py-5 rounded-2xl font-black text-xl text-center hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(126,211,33,0.3)]">
                  Enroll Now <ArrowRight className="inline-block ml-2" size={24} />
                </Link>
                <p className="mt-8 text-gray-500 text-[10px] text-center italic font-medium">✨ Limited seats available for each batch!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-zinc-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">Ready to Build Your <br /> <span className="text-[#7ED321]">Trading Edge?</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:[Phone Number 1]" className="bg-[#7ED321] text-black px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-[#7ED321]/20">
              DM for Mentorship
            </a>
            <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-black text-lg hover:bg-white/20 transition-all backdrop-blur-md">
              Join Next Masterclass
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-3 md:gap-5 flex-wrap">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full whitespace-nowrap">
              <span className="text-gray-400 font-bold text-[10px] tracking-widest uppercase leading-none">CONNECT NOW:</span>
              <span className="text-white font-black text-base leading-none">+91 84601 88483</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full whitespace-nowrap">
              {/* <span className="text-gray-400 font-bold text-[10px] tracking-widest uppercase leading-none">CONNECT NOW:</span> */}
              <span className="text-white font-black text-base leading-none">+91 99247 68290</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto italic font-medium leading-relaxed">
              "Smart crypto trading learning platform for traders and investors. Learn trading with real market exposure and expert guidance"
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
