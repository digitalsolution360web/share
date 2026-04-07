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
  title: "Online Stock Market Training | Master Trading Skills | Share Market Skills Academy",
  description: "Join our comprehensive 3-month online stock market training. Master Option Selling, Swing Trading, Technical Analysis, and more with expert mentors Ashish Singh & Nikhil Singh.",
};

export default function OnlineTraining() {
  const basicCourse = [
    "Types of Products Available to Trade in the Indian Stock Market",
    "Tradingview",
    "Demat Account",
    "Candlestick Patterns",
    "Chart Patterns",
    "Types of Trend & How to Identify a trend",
    "Support & Resistance and Price Action",
    "EMA",
    "Volume analysis",
    "RSI"
  ];

  const advancedCourse = [
    "The Power of Compounding & Roadmap to ₹1 CR",
    "Our Custom Indicator & Scanner",
    "Relative Strength & Its Magic",
    "Why align you trade with Market",
    "Deep Dive: P&L + Balance Sheet",
    "Master Swing Trading strategy",
    "Must-Know Financial Ratios",
    "Fibonacci Retracement& Extension Tool",
    "Psychology as a Trader",
    "Multi-timeframe Analysis",
    "Smart Money Concept (SMC)"
  ];

  const futuresOptions = [
    "Futures Trading + Hedging Secrets",
    "Options Demystified – Start Here!",
    "Master the Option Chain & Greeks",
    "Option Buying vs. Selling – Key Differences",
    "How to Win with Option Buying",
    "Our Killer Option Selling Strategy",
    "Strategy Adjustments & Risk Management",
    "Non-Directional Strategies + Payoff Charts"
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 md:pt-40 pb-20 bg-[#111] overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7ED321]/10 blur-[120px] rounded-full -mr-20 -mt-20 opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#7ED321]/5 blur-[100px] rounded-full -ml-10 -mb-10 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white mb-6 leading-[1.2]">
              Transform Your Career <br />
              with Our <br />
              <span className="text-[#7ED321]">Expert Stock Market Training!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
              500+ Students Trained Offline in Delhi NCR! – Join our growing community of successful learners!
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/contact" className="bg-[#7ED321] text-black px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(126,211,33,0.3)]">
                Enroll Now
              </Link>
              <a href="tel:+918460188483" className="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-sm flex items-center gap-2">
                <Phone size={18} /> +91 84601 88483
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENTOR SECTION ================= */}
      <section className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Ashish Singh Card */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group transition-all hover:border-[#7ED321]/30">
              <div className="w-40 h-40 md:w-56 md:h-56 relative shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-[#7ED321]/20 group-hover:border-[#7ED321]/50 transition-all z-10" />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl relative">
                  <Image src="/ashish.png" alt="Ashish Singh" fill className="object-cover object-top" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-1">Ashish Singh</h3>
                  <p className="text-[#7ED321] text-sm font-bold tracking-widest uppercase">CERTIFIED TECHNICAL ANALYST | FULL-TIME TRADER</p>
                  <p className="text-gray-500 italic text-sm mt-3">"I don't predict markets—I exploit edges."</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-bold text-[#7ED321] text-xs uppercase tracking-tighter flex items-center gap-1">🔥 MY SPECIALIZATION:</p>
                  <p className="text-gray-300 text-sm flex items-start gap-2">✔ Option Selling Mastery – High-probability strategies to generateconsistent income 💰</p>
                  <p className="text-gray-300 text-sm flex items-start gap-2">✔ Cash Equity Swing Trading – Capturing 5-15% moves in quality stocks 🏦</p>
                  
                  <div className="pt-4 border-t border-white/5 space-y-3 mt-4">
                     <p className="font-bold text-white text-xs uppercase tracking-tighter">WHY FOLLOW ME?</p>
                     <p className="text-gray-400 text-sm flex items-center gap-3">✅ 9+ Years of live market experience</p>
                     <p className="text-gray-400 text-sm flex items-center gap-3">✅ Battle-tested strategies for bullish & bearish markets <span className="text-[#7ED321]">✅</span></p>
                     <p className="text-xs text-gray-500 ml-8 italic">Focus on risk management first, profits second</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-[#7ED321] font-bold text-sm">📢 Let’s Build Your Trading Edge Together!</p>
                  <div className="text-gray-400 text-[13px] space-y-1">
                    <p>→ DM for mentorship</p>
                    <p>→ Join my next masterclass</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm">
                    <span className="text-[#7ED321]">Connect Now:</span> +91 84601 88483
                  </div>
                </div>
              </div>
            </div>

            {/* Nikhil Singh Card */}
            <div className="bg-[#0c0c0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-10 items-center md:items-start group transition-all hover:border-[#7ED321]/30">
              <div className="w-40 h-40 md:w-56 md:h-56 relative shrink-0">
                <div className="absolute inset-0 rounded-full border-4 border-[#7ED321]/20 group-hover:border-[#7ED321]/50 transition-all z-10" />
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl relative">
                  <Image src="/nikhil.png" alt="Nikhil Singh" fill className="object-cover object-top" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-1">Nikhil Singh</h3>
                  <p className="text-[#7ED321] text-sm font-bold tracking-widest uppercase">STOCK MARKET ANALYST | TRADING EXPERT</p>
                  <p className="text-gray-500 italic text-sm mt-3">"Mastering high-probability breakout strategies."</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-bold text-[#7ED321] text-xs uppercase tracking-tighter flex items-center gap-1">📍 WHAT I EXCEL AT:</p>
                  <div className="space-y-4">
                    {[
                      { t: "Pattern Analysis", d: "Mastering candlesticks & chart patterns for highprobability trades." },
                      { t: "Trendline & Support/Resistance", d: "Spotting key levels for strategic entries & exits." },
                      { t: "Breakout Trading", d: "Riding the momentum waves with precision & discipline." },
                      { t: "Risk Management", d: "Because preserving capital is just as crucial as making profits!" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-[#7ED321] mt-0.5" />
                        <p className="text-gray-300 text-sm leading-tight">
                          <span className="font-bold text-white">{item.t}</span> – {item.d}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <p className="text-[#7ED321] font-bold text-sm">📢 Let’s Build Your Trading Edge Together!</p>
                  <div className="text-gray-400 text-[13px] space-y-1">
                    <p>→ DM for mentorship</p>
                    <p>→ Join my next masterclass</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm">
                    <span className="text-[#7ED321]">Connect Now:</span> +91 99247 68290
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#7ED321] font-bold tracking-widest uppercase mb-4 text-sm">Why Choose Us?</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                We Don't Just Teach; <br />
                <span className="text-[#7ED321]">We Mentor!</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { title: "Lifetime Support", desc: "We don't just teach; we mentor! Get doubt-clearing sessions & guidance even after the course ends.", icon: <Users size={24} /> },
                  { title: "Extended Learning Support", desc: "Continue learning for 4-5 months postcourse until you master every concept!", icon: <Clock size={24} /> },
                  { title: "Free Course Material", desc: "Get comprehensive study resources to strengthen your knowledge.", icon: <BookOpen size={24} /> },
                  { title: "Job Placement Assistance", desc: "Want a career in the stock market? 🏦 We help arrange interviews for eligible students!", icon: <Award size={24} /> },
                  { title: "Certificate of Completion", desc: "Get recognized certification to boost your resume & credibility!", icon: <GraduationCap size={24} /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-[#7ED321]/10 text-[#7ED321] p-3.5 rounded-2xl group-hover:bg-[#7ED321] group-hover:text-white transition-all h-fit shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1.5 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7ED321]/20 rounded-full blur-3xl" />
              <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl relative z-10 p-6">
                <Image 
                  src="/gl2.jpeg" 
                  alt="Training Session" 
                  width={600} 
                  height={800} 
                  className="rounded-[2rem] w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl z-20 border border-gray-100 hidden md:block">
                <div className="flex items-center gap-5">
                  <div className="bg-[#7ED321] text-white p-4 rounded-2xl shadow-lg shadow-[#7ED321]/40">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-gray-900 leading-none">100%</p>
                    <p className="text-gray-500 text-sm font-bold uppercase mt-1">Practical Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE CONTENT ================= */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Complete Training Roadmap</h2>
            <p className="text-gray-600 text-lg leading-relaxed">From basics to advanced professional strategies, we cover everything you need to become a consistently profitable trader.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic Course */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#7ED321] text-black w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-[#7ED321]/30">1</div>
                <h3 className="text-2xl font-bold">Basic Course</h3>
              </div>
              <ul className="space-y-5">
                {basicCourse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-gray-700 font-medium">
                    <span className="text-[#7ED321] font-bold w-6 text-lg">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Course */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 border-[#7ED321] relative z-10 lg:scale-105">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#7ED321] text-black px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-black text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">2</div>
                <div>
                  <h3 className="text-2xl font-bold">Advanced Course</h3>
                  <p className="text-xs text-[#7ED321] font-bold uppercase tracking-wider">Cash Equity Swing Trading</p>
                </div>
              </div>
              <ul className="space-y-5">
                {advancedCourse.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-gray-900 font-bold">
                    <span className="text-black font-black w-6 text-lg">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Futures & Options */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#7ED321] text-black w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg shadow-[#7ED321]/30">3</div>
                <div>
                  <h3 className="text-2xl font-bold">Smart Trading!</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Futures & Options</p>
                </div>
              </div>
              <ul className="space-y-5">
                {futuresOptions.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-gray-700 font-medium">
                    <span className="text-[#7ED321] font-bold w-6 text-lg">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO SHOULD JOIN ================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ED321]/10 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">Who Should Join?</h2>
                <div className="grid gap-5">
                  {[
                    { title: "Housewives", icon: "👩‍💼", desc: "Learn to trade from home & earn independently!" },
                    { title: "Aspiring Full-Time Traders", icon: "📊", desc: "Build a lucrative career in the markets!" },
                    { title: "Students", icon: "🎓", desc: "Gain valuable skills early & secure your financial future!" },
                    { title: "Part-Time Traders", icon: "⏳", desc: "Boost your income without quitting your job!" },
                    { title: "Investors", icon: "💡", desc: "Learn smart strategies to grow your wealth!" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center gap-8 hover:bg-white/10 transition-all group">
                      <div className="text-4xl">{item.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-1.5">{item.title}</h4>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
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
                  className="rounded-[3rem] shadow-2xl opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end p-12">
                  <p className="text-white text-3xl font-black leading-tight">Join our community of <br /> <span className="text-[#7ED321]">500+ successful students!</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSE DETAILS / PRICING ================= */}
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Schedule */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-12">Master the Share Market <br /> in <span className="text-[#7ED321]">Just 3 Months!</span></h2>
              <div className="space-y-8">
                {[
                  { title: "3-Month Comprehensive Course", desc: "Weekly 3 Lectures (Mon - Wed - Fri)", icon: <Calendar size={32} /> },
                  { title: "Flexible Batches", desc: "Morning: 9:30 AM - 10:30 AM | Evening: 6:30 PM - 7:30 PM", icon: <Clock size={32} /> },
                  { title: "Online & Offline Options", desc: "Learn from anywhere or in person!", icon: <Smartphone size={32} /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-8 hover:shadow-md transition-shadow">
                    <div className="bg-[#7ED321]/10 text-[#7ED321] p-4 rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 mt-1 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-black rounded-[4rem] p-12 md:p-16 text-white relative flex flex-col justify-center shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ED321]/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="relative z-10">
                <p className="text-[#7ED321] font-bold tracking-[0.2em] uppercase text-center mb-8 text-sm">Course Fee Structure</p>
                <div className="space-y-12 mb-16">
                  <div className="text-center group">
                    <div className="flex items-center justify-center gap-3 mb-2 translate-x-[-10px]">
                       <IndianRupee className="text-[#7ED321]" size={40} />
                       <span className="text-5xl md:text-6xl font-black group-hover:scale-110 transition-transform block">12,000/-</span>
                    </div>
                    <p className="text-gray-400 uppercase tracking-widest font-bold text-sm">Online Course Fee</p>
                  </div>
                  <div className="w-full h-px bg-white/10" />
                  <div className="text-center opacity-70">
                    <div className="flex items-center justify-center gap-2 mb-2">
                       <IndianRupee className="text-white/40" size={32} />
                       <span className="text-3xl md:text-4xl font-black text-white/80">15,000/-</span>
                    </div>
                    <p className="text-gray-600 uppercase tracking-widest font-bold text-xs">Offline Course Fee</p>
                  </div>
                </div>
                <Link href="/contact" className="block w-full bg-[#7ED321] text-black py-6 rounded-3xl font-black text-2xl text-center hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(126,211,33,0.3)]">
                  Enroll Now <ArrowRight className="inline-block ml-3" size={28} />
                </Link>
                <p className="mt-8 text-gray-500 text-sm text-center italic font-medium">✨ Limited seats available for each batch!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-[#7ED321]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-10 leading-tight">Ready to Build Your <br /> Trading Edge?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/918460188483" target="_blank" className="bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:bg-gray-900 transition-all shadow-2xl">
              DM for Mentorship
            </a>
            <Link href="/contact" className="bg-white text-black px-12 py-5 rounded-full font-black text-xl hover:bg-gray-100 transition-all shadow-2xl">
              Join Next Masterclass
            </Link>
          </div>
          <p className="mt-12 font-black text-black/70 flex items-center justify-center gap-4 flex-wrap text-lg">
            <span>Connect Now: +91 84601 88483</span>
            <span className="hidden md:block opacity-30">|</span>
            <span>+91 99247 68290</span>
          </p>
        </div>
      </section>
    </div>
  );
}
