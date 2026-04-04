import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, CheckCircle2, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Top Stock Market Course Near Me Ghaziabad | Skills Academy",
  description: "Master trading with the best stock market course near me Ghaziabad. Join Share Market Skills Academy for expert-led live market training today.",
};

export default function StockMarketCourseNearMeGhaziabad() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* ================= BANNER ================= */}
      <section
        className="relative flex items-center bg-cover bg-center pt-32 md:pt-40 pb-20"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white text-center md:text-left">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-[#7ED321] mb-8 transition-all hover:translate-x-[-4px]"
          >
            <ArrowLeft size={18} /> Back to Blogs
          </Link>

          <p className="text-[#7ED321] font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            stock market course near me ghaziabad
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Master the Bulls and Bears: <br className="hidden md:block" />
            <span className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-200 mt-2 block">Your Guide to the Best Stock Market Course in Ghaziabad</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full shadow-lg">
              <Calendar size={18} className="text-[#7ED321]" />
              <div className="flex items-center gap-1.5 text-sm">
                <span className="text-gray-300">Published on</span>
                <span className="font-bold text-white">1 Apr 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

            {/* Introduction Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Stop Gambling, Start Trading with Expert Guidance
            </h2>
            <p className="mb-6">
              There is no way a person can become a pro in the world of the stock market without continuous learning and implementation of unique strategies. However, these skills won’t appear just randomly. It requires patience and quality education in the share market.
            </p>
            <p className="mb-6">
              That’s why you need someone who can give you the expert guidance in your journey of becoming one of the finest traders in India. For now, it is in Ghaziabad. Ghaziabad has become a hub for traders. The <Link href="/" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">Share Market Skills Academy</Link> runs the <strong>best stock market course near me in ghaziabad</strong>.
            </p>
            <p className="bg-gray-50 border-l-4 border-[#7ED321] p-6 italic rounded-r-xl text-gray-700 font-medium my-10">
              "Stop scrolling while searching “stock market course near me ghaziabad” – start investing in the skills that actually generate wealth."
            </p>

            {/* Why Choosing Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-16 mb-8 underline decoration-[#7ED321] decoration-4 underline-offset-8">
              Why Choosing a Professional Trading Institute Near Me is Your Best Investment
            </h2>
            <p className="mb-8">
              A structured <strong>stock market coaching near me</strong> provides a detailed observational overview. It gives you the liberty and wisdom to understand the share market, including all of its pros and cons.
            </p>
            <p className="mb-8">
              At Share Market Skills Academy, we believe education is the only hedge against market volatility.
            </p>
            <p className="font-bold text-gray-900 text-xl mb-6">
              When you choose our local institute in Ghaziabad, you are going to benefit from:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mb-10">
              {[
                "Face-to-face mentorship",
                "Live market practice",
                "Community of like-minded traders",
                "Get financial context"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-[#7ED321] transition-all group">
                  <CheckCircle2 className="text-[#7ED321] group-hover:scale-110 transition-transform" size={24} />
                  <span className="font-semibold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Here, we keep your stock market learning up with structured learning and proper networking. Discipline is the key you will also learn from here. So, while searching for “trading institute near me”, you should choose us all the time in Ghaziabad.
            </p>
            <p className="text-center font-bold text-xl text-gray-900 py-6 border-y border-gray-100 my-10">
              Join Share Market Skills Academy today and turn your financial dreams into reality!
            </p>

            {/* Curriculum Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-16 mb-8">
              Comprehensive Curriculum: What Sets Our Stock Market Coaching Near Me Apart
            </h2>
            <p className="mb-6">
              When you are going for a nearby trading institute in ghaziabad, you always want an institute that delivers all the wisdom with a minimal package. That’s the first priority that many aspirants choose.
            </p>
            <p className="mb-8">
              So, when you love to invest your time and money in the right <strong>trading classes near me ghaziabad</strong>, then you should always expect excellence out of it.
            </p>
            <p className="font-bold text-gray-900 mb-6">The Share Market Skills Academy sets things clear for its aspirants. Here, we provide:</p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-6 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7ED321]" /> Deep technical analysis</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7ED321]" /> Comprehensive fundamental analysis</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7ED321]" /> Risk management methods</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#7ED321]" /> Conduct live market sessions</li>
                </ul>
              </div>
            </div>
            <p className="italic font-bold text-center text-[#7ED321] mb-12">
              Secure your seat at Share Market Skills Academy and start trading with confidence!
            </p>

            {/* Diverse Financial Markets Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-black mt-16 mb-8">
              Exploring Diverse Financial Markets: Investment Classes Near Me
            </h2>
            <p className="mb-6">
              Many students focus on investment classes near me, but they forget to chase after excellence and successful <Link href="/courses" className="text-blue-600 font-bold hover:underline">course</Link> completion with practical case studies.
            </p>
            <p className="mb-6">
              Only a reputable <strong>share market course near me</strong>, Share Market Skills Academy, explores many financial markets and teaches them to its students for their financial ideas and stock marketing benefits.
            </p>
            <p className="font-bold text-gray-900 mb-6">Here, we provide you:</p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 mb-10">
              {[
                "Long-term wealth build-up plan",
                "Portfolio diversification",
                "Tax planning",
                "Retirement planning"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-[#7ED321]/5 p-4 rounded-xl border border-[#7ED321]/20">
                  <div className="w-2 h-2 bg-[#7ED321] rounded-full" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center font-bold text-lg bg-black text-white p-8 rounded-2xl mb-16">
              Sign up for our investment classes today at the nearby trading institute in ghaziabad and master the art of long-term wealth!
            </p>

            {/* Conclusion */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>
              <p className="mb-6">
                As we’ve explored, finding a stock market course near ghaziabad is about more than just finding a classroom. For the 2026 markets, the trend is to search <strong>Share Market Skills Academy Near Me</strong>.
              </p>
              <p className="mb-8">
                This is not just about performance, but commitment to give you the excellent learning skills of the share market! <Link href="/contact" className="text-blue-600 font-bold hover:underline decoration-2 underline-offset-4">Contact us</Link> today for admission!
              </p>
            </div>

            {/* FAQs Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-black mb-10 flex items-center gap-3">
                <HelpCircle className="text-[#7ED321]" size={32} />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do I need a finance background to join the stock market course near me ghaziabad?",
                    a: "No, Share Market Skills Academy opens for all students, irrespective of any financial background."
                  },
                  {
                    q: "What is the duration of the share market course near me at your academy?",
                    a: "The length of the course varies, as it may take 6 months for your comprehensive professional programs."
                  },
                  {
                    q: "Will I get a certificate after completing the trading classes near me ghaziabad?",
                    a: "Yes, of course! Here, you will get professional certification, as it validates skills and adds value to your professional profile."
                  },
                  {
                    q: "Are the classes at the trading institute near me held on weekends?",
                    a: "Yes, our experts also schedule classes for various aspirants who are working professionals and love to join us on weekends."
                  },
                  {
                    q: "How much capital do I need to start trading after the stock market coaching near me?",
                    a: "Our course fee is within an affordable range and way better than other institutes in Ghaziabad. For more info, feel free to contact us."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
