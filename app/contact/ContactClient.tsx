"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import React from "react";

export default function ContactClient() {
  return (
    <div className="overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-[#7ED321]">Us</span>
          </h1>

          <p className="mt-5 max-w-2xl text-gray-200">
            Let’s talk! Reach out to our centers for expert guidance and personalized support.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Govindpuram */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-6 text-[#7ED321]">
              Govindpuram Center
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-3">
                <Phone className="text-[#2DB7F5]" />
                <span>+91 84601 88483</span>
              </p>

              <p className="flex items-start gap-3">
                <Mail className="text-[#2DB7F5]" />
                <span>sharemarketskillsacademy@gmail.com</span>
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="text-[#2DB7F5]" />
                <span>
                  Vishnu enclave, 41, Hapur Rd, Opp. Govindpuram, Gangapuram, Avantika Colony, Shastri Nagar, Ghaziabad, Uttar Pradesh 201013
                </span>
              </p>
            </div>
          </div>

          {/* Raj Nagar Extension */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-6 text-[#7ED321]">
              Raj Nagar Extension Center
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-3">
                <Phone className="text-[#2DB7F5]" />
                <span>+91 99247 68290</span>
              </p>

              <p className="flex items-start gap-3">
                <Mail className="text-[#2DB7F5]" />
                <span>sharemarketskillsacademy@gmail.com</span>
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="text-[#2DB7F5]" />
                <span>AVS City Square Mall, 407, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201003</span>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          <div className="bg-gray-200 rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">
              Send Us a <span className="text-[#7ED321]">Message</span>
            </h2>

            <form
              onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    phone: formData.get("phone"),
                    message: formData.get("message"),
                  }),
                });

                if (res.ok) {
                  alert("Thank you! Your message has been sent.");
                  form.reset();
                } else {
                  alert("Something went wrong. Please try again.");
                }
              }}
              className="grid gap-5"
            >
              <input
                name="name"
                required
                placeholder="Full Name"
                className="w-full text-black border border-black rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-0 focus:border-black"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full text-black border border-black rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-0 focus:border-black"
              />

              <input
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full text-black border border-black rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-0 focus:border-black"
              />

              <textarea
                name="message"
                rows={4}
                required
                placeholder="Your Message"
                className="w-full text-black border border-black rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-0 focus:border-black"
              />

              <button
                type="submit"
                className="bg-[#7ED321] hover:bg-[#6abc1e] text-white font-semibold py-3 rounded-lg transition"
              >
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= MAPS ================= */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6">

            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3615452658055!2d77.488283!3d28.678829599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf34e4fde2697%3A0x2578fcd757789f38!2sShareMarket%20Skills%20Academy%20-%20Govindpuram!5e0!3m2!1sen!2sin!4v1775793205007!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224143.3003642962!2d77.17763772812502!3d28.62259618671216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1d008cc1187%3A0x721e2f4a909a3d38!2sShareMarket%20Skills%20Academy%20-%20Raj%20Nagar%20Extension!5e0!3m2!1sen!2sin!4v1775794162162!5m2!1sen!2sin"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
