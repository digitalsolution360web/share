"use client";

import Image from "next/image";
import { Phone, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* 1️⃣ Logo + About */}
          <div>
            <Image
              src="/share-white-logo.png"
              alt="ShareMrKit"
              width={160}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart stock market learning platform for traders and investors.
              Learn trading with real market exposure and expert guidance.
            </p>

            {/* 🔗 Social Icons */}
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://www.instagram.com/sharemarketskillsacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://www.facebook.com/Sharemarketskills"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <Facebook size={22} />
              </a>

              <a
                href="https://wa.me/918460188483"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition cursor-pointer"
              >
                <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "22px" }} />
              </a>
            </div>
          </div>

          {/* 2️⃣ Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-green-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-green-400 transition">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-green-400 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3️⃣ Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Mutual Fund
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Bonds
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Fixed Deposit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition">
                  Algo Trading
                </Link>
              </li>
            </ul>
          </div>

          {/* 4️⃣ Address + Map */}
          <div>
            <h4 className="text-white font-semibold mb-4">Address</h4>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Vishnu enclave, 41, Hapur Rd, <br />
              Opp. Govindpuram, Gangapuram, <br />
              Avantika Colony, Shastri Nagar, Ghaziabad, <br />
              Uttar Pradesh 201013 <br />
              📞 +91 8460188483
            </p>

            <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3615452658055!2d77.488283!3d28.678829599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf34e4fde2697%3A0x2578fcd757789f38!2sShareMarket%20Skills%20Academy%20-%20Govindpuram!5e0!3m2!1sen!2sin!4v1775793205007!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-800">
          © {new Date().getFullYear()} ShareMarket. Skills Academy
        </div>

        {/* Footer Credit - Designed & Developed By */}
        <div className="bg-gradient-to-r from-green-900/40 via-black to-green-900/40 border-t border-green-800/50 py-3 px-4">
          <p className="text-center text-sm text-gray-300">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.digitalsolution360.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-400 hover:text-green-300 underline underline-offset-2 transition-colors duration-200"
            >
              Digital Solution 360
            </a>
          </p>
        </div>
      </footer>

      {/* ============ FLOATING WHATSAPP (DESKTOP ONLY) ============ */}
      <a
        href="https://wa.me/918460188483"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-[999]
                   bg-green-500 hover:bg-green-600
                   w-14 h-14 rounded-full
                   items-center justify-center
                   shadow-xl transition"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
      </a>

      {/* ============ MOBILE FIXED BAR ============ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800
                      flex items-center justify-between px-5 py-3 md:hidden">

        {/* Left Logo */}
        <Image
          src="/share-white-logo.png"
          alt="ShareMrKit"
          width={120}
          height={40}
        />

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          <a href="tel:+918460188483" className="text-white">
            <Phone size={26} />
          </a>

          <a
            href="https://wa.me/918460188483"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </>
  );
}
