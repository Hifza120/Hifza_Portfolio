"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const certifications = [
  {
    name: "HEC National Software Competency Test — 89.7 Percentile",
    issuer: "Higher Education Commission, Pakistan",
    year: "Taken at start of 7th semester · 2026",
    image: "/certifications/hec-nsct.png",
  },
  {
    name: "Teaching Assistant Certificate — OOP Lab (Fall 2025)",
    issuer: "University of Central Punjab",
    year: "2025",
    image: "/certifications/ta-oop-fall2025.jpg",
  },
  {
    name: "Teaching Assistant Certificate — OOP Lab (Fall 2024)",
    issuer: "University of Central Punjab",
    year: "2024",
    image: "/certifications/ta-oop-fall2024.jpg",
  },
  {
    name: "Out of Thin Air Game Jam — Certificate of Participation",
    issuer: "Takhleeq Problem Solving Institute",
    year: "2026",
    image: "/certifications/oota-game-jam.jpg",
  },
  {
    name: "Python Fundamentals",
    issuer: "Kaggle",
    year: "2026",
    image: "/certifications/kaggle-python.png",
  },
];

export function Certifications() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certifications" className="container-page py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-3"
      >
        // certifications
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight mb-10"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <motion.button
            key={cert.name}
            type="button"
            onClick={() => setSelected(i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="card-surface overflow-hidden text-left group hover:border-border-strong transition-colors"
          >
            <div className="relative aspect-[4/3] bg-black/20 overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium leading-snug">
                {cert.name}
              </h3>
              <p className="font-mono text-xs text-text-tertiary mt-1.5">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <div
            className="relative max-w-3xl w-full aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certifications[selected].image}
              alt={certifications[selected].name}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}