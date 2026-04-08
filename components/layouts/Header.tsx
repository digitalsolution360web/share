"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP INFO BAR – Desktop only */}
      {!scrolled && (
        <div className="hidden md:block w-full bg-white border-b border-gray-200 text-sm relative z-50">
          <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-gray-700">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Mail size={16} className="text-[#7ED321]" />
                sharemarketskillsacademy@gmail.com
              </span>
              <span className="flex items-center gap-1">
                <Phone size={16} className="text-[#7ED321]" />
                +91 84601 88483
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/Sharemarketskills"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <Facebook size={16} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sharemarketskillsacademy?igsh=MWZ4enk5ZjZwdWN0cw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <Instagram size={16} />
              </a>

              {/* LinkedIn (future-ready) */}
              <span className="text-gray-400 cursor-not-allowed">
                <Linkedin size={16} />
              </span>
            </div>

          </div>
        </div>
      )}

      {/* MAIN HEADER */}
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-500 transform-gpu
        ${scrolled ? "top-0 bg-white shadow-md py-2" : "top-0 md:top-[40px] bg-transparent py-4 md:py-6"}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* LOGO WITH LINK */}
          <Link href="/" className="flex items-center">
            <Image
              src={scrolled ? "/share-markit-logo.png" : "/share-white-logo.png"}
              alt="ShareMarket Skills Academy"
              width={140}
              height={50}
              priority
              className="cursor-pointer"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className={`hidden md:flex items-center gap-8 font-medium
            ${scrolled ? "text-gray-800" : "text-white"}`}
          >
            <Link href="/" className="text-[#7ED321]">Home</Link>
            <Link href="/about">About</Link>

            {/* COURSES DROPDOWN */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <button className={`flex items-center gap-1 transition-colors h-full ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-[#7ED321]`}>
                Courses <ChevronDown size={14} className={`transition-transform duration-300 ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu - Sleek Floating Pill Design */}
              <div
                className={`absolute left-[-10px] top-[60px] w-48 transition-all duration-300 origin-top z-50
                ${coursesDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}
              >
                {/* Small Arrow */}
                <div className="absolute top-[-6px] left-[30px] w-3 h-3 bg-white rotate-45 border-t border-l border-gray-100" />

                <div className="bg-white shadow-[0_15px_50px_rgba(0,0,0,0.15)] rounded-xl border border-gray-100 overflow-hidden relative z-10">
                  <Link
                    href="/crypto-trading-course"
                    className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-[#7ED321] hover:text-white transition-all text-[13px] font-bold group/link"
                  >
                    <div className="w-2 h-2 bg-[#7ED321] rounded-full group-hover/link:bg-white transition-colors animate-pulse" />
                    CRYPTO TRADING
                  </Link>
                  <Link
                    href="/online-training"
                    className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-[#7ED321] hover:text-white transition-all text-[13px] font-bold group/link border-t border-gray-50"
                  >
                    <div className="w-2 h-2 bg-[#7ED321] rounded-full group-hover/link:bg-white transition-colors animate-pulse" />
                    STOCK TRAINING
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+918460188483"
              className="md:hidden bg-[#7ED321] text-white p-2 rounded-full"
            >
              <Phone size={18} />
            </a>

            <Link
              href="/contact"
              className="hidden md:inline-block bg-[#7ED321] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#6ac11c]"
            >
              Get Started
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
            >
              {menuOpen ? <X size={26} className="text-gray-800" /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg overflow-y-auto max-h-[80vh]">
            <nav className="flex flex-col p-6 gap-4 text-gray-800 font-medium">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

              <div className="flex flex-col gap-2">
                <Link href="/courses" onClick={() => setMenuOpen(false)}>
                  <div className="flex items-center justify-between font-bold text-[#7ED321]">
                    <span>Courses</span>
                  </div>
                </Link>
                <div className="pl-4 flex flex-col gap-3 mt-1 border-l-2 border-gray-100">
                  <Link href="/crypto-trading-course" onClick={() => setMenuOpen(false)} className="text-sm">Crypto Trading</Link>
                  <Link href="/online-training" onClick={() => setMenuOpen(false)} className="text-sm">Online Training</Link>
                </div>
              </div>

              <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
              <Link href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
