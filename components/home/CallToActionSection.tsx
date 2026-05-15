"use client";

import Link from "next/link";
import { PhoneCall, MessageCircle, MapPin, Mail } from "lucide-react";
import { usePathname } from "next/navigation";


export default function CallToActionSection() {

  const pathname = usePathname();

  const hideOnPages = ['/crypto-trading-course', "/online-training"];

  if
    (hideOnPages.includes(pathname)) {
    return null;
  }
  return (
    <section className="relative py-24 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your{" "}
          <span className="text-[#7ED321]">
            Stock Market & Crypto Trading Journey Today
          </span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Join <strong>Share Market Skills</strong> and gain professional skills
          in stock market trading, investing, and cryptocurrency with expert
          mentorship and real market experience.
        </p>

        {/* CONTACT INFO */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-[#7ED321]" />
            <span>Call / WhatsApp for Enquiry</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#7ED321]" />
            <span>Ghaziabad | Delhi NCR | Online</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#7ED321]" />
            <span>Book a Free Demo Class Today</span>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/book-demo"
            className="bg-[#7ED321] hover:bg-[#6ac11c] text-black px-10 py-4 rounded-full font-semibold transition"
          >
            Book Free Demo
          </Link>

          <Link
            href="/contact"
            className="border border-[#7ED321] text-[#7ED321] hover:bg-[#7ED321] hover:text-black px-10 py-4 rounded-full font-semibold transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
