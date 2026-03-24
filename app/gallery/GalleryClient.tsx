"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"

type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/Gallery/g1.jpg", alt: "Share Market Training Session 1", title: "Live Trading Workshop" },
  { src: "/Gallery/g2.jpg", alt: "Share Market Training Session 2", title: "Technical Analysis Class" },
  { src: "/Gallery/g3.jpg", alt: "Share Market Training Session 3", title: "Options Strategies Seminar" },
  { src: "/Gallery/g4.webp", alt: "Share Market Training Session 4", title: "Student Success Stories" },
  { src: "/Gallery/g5.webp", alt: "Share Market Training Session 5", title: "Market Mentorship" },
  { src: "/Gallery/g6.webp", alt: "Share Market Training Session 6", title: "Trading Floor Experience" },
  { src: "/gll.jpeg", alt: "Advanced Share Market Concepts", title: "Advanced Trading Course" },
  { src: "/gl2.jpeg", alt: "Beginner Share Market Overview", title: "Beginner Market Overview" },
]

export default function GalleryClient() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null)

  return (
    <div className="bg-white">

      {/* ===== Banner ===== */}
      <section
        className="relative h-[55vh] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/banner/b1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <p className="text-sm text-gray-300 mb-3">
            <Link href="/" className="hover:text-[#7ED321]">Home</Link> / Gallery
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-[#7ED321]">Gallery</span>
          </h1>

          <p className="mt-4 max-w-2xl text-gray-200">
            A glimpse of our work, events, training sessions & achievements.
          </p>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Moments that <span className="text-[#7ED321]">Define Us</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our journey through real classroom sessions, workshops,
            live market training and successful milestones.
          </p>
        </div>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setActiveImage(item)}
              title={item.title}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                title={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Popup / Lightbox ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActiveImage(null)}
          >
            {/* Popup Box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 z-10 bg-black/70 text-white p-2 rounded-full hover:bg-black"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative w-full min-h-[400px]">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  title={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
