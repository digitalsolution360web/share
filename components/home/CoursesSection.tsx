"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Online Stock Market Training",
    subtitle: "Advanced Online Stock Market Training",
    img: "/gl2.jpeg",
    points: [
      "Master Option Selling strategies",
      "Cash Equity Swing Trading",
      "9+ Years of market experience",
      "Lifetime mentorship & support",
      "Pattern analysis & Breakout trading",
      "Risk management focus",
      "Certificate & Job Assistance",
    ],
  },
  {
    title: "Stock Market Trading Courses",
    subtitle: "Stock Market Trading Courses in Ghaziabad & Delhi NCR",
    img: "/cources/stock-market-course.jpeg",
    points: [
      "Stock market course for beginners in Ghaziabad",
      "Share market trading course with live market practice",
      "Technical analysis course in Delhi NCR (Indian stock market)",
      "Fundamental analysis for long-term investing",
      "Swing trading & positional trading strategies",
      "Options trading course with live examples (Futures & Options)",
      "Risk management & trading psychology",
    ],
  },
  {
    title: "Cryptocurrency & Crypto Trading",
    subtitle: "Cryptocurrency & Crypto Trading Courses in Ghaziabad & Delhi NCR",
    img: "/cources/cryptocurrency-course.jpeg",
    points: [
      "Crypto trading course for beginners in Ghaziabad",
      "Cryptocurrency trading course in Delhi NCR",
      "Bitcoin & altcoin trading fundamentals",
      "Crypto technical analysis & chart reading",
      "Spot & futures crypto trading basics",
      "Online crypto trading course with live guidance",
      "Best crypto trading classes near me",
    ],
  },
  {
    title: "Investing & Wealth Building",
    subtitle: "Investing & Wealth-Building Courses",
    img: "/cources/investment-management-course.jpeg",
    points: [
      "How to invest in stock market for beginners in Ghaziabad",
      "Long-term investing strategies Delhi NCR",
      "Mutual funds & portfolio basics",
      "Difference between trading and investing",
      "Demat & trading account guidance",
      "Capital protection & risk planning",
    ],
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= H2 HEADING ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#2DB7F5]">Courses</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Industry-focused trading, crypto & investing courses with
            live market practice and expert mentorship.
          </p>
        </div>

        {/* ================= COURSES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={course.img}
                  alt={course.title}
                  fill
                  className=" object-top object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left space-y-4 flex flex-col flex-1">
                {/* H3 */}
                <h3 className="text-xl font-semibold text-gray-900 min-h-[56px]">
                  {course.subtitle}
                </h3>

                <ul className="space-y-2 text-sm text-gray-700 flex-1">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href={
                      index === 0 ? "/online-training" : 
                      index === 1 ? "/stock-market-course-near-me-ghaziabad" : 
                      index === 2 ? "/crypto-trading-course" : 
                      "/courses"
                    }
                    className="text-[#7ED321] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    View Course Details <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
