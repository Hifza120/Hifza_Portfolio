"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const publications = [
  {
    title:
      "Towards Effective Noise Removal and Visual Enhancement Using CILA-SegNet for Color Casting and Illumination Distortions in Underwater Images",
    venue:
      "JISR-C, Journal of Independent Studies and Research Computing · Vol. 24, Issue 1 · Jan–Jun 2026",
    description:
      "Co-authored with Ishmal Nayab, Muhammad Umair, Maham Mehr, Rao Ayan Shihab, and Hira Haider. My contribution centered on the literature review — surveying 14+ research papers and studies to ground the approach. The paper proposes CILA-SegNet, a deep learning approach combining Multi-Scale Retinex and CC-NetColor correction with Adaptive CLAHE to remove color casting and illumination distortion from underwater imagery.",
    meta: "DOI: 10.31645/JISRC.26.24.1.10",
    link: "https://jisrc.szabist.edu.pk/ojs/index.php/jisrc/article/view/404/204",
  },
];

export function Publications() {
  return (
    <section id="publications" className="container-page py-24">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-3"
      >
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight mb-10"
      >
        Publications
      </motion.h2>

      <div className="space-y-0">
        {publications.map((pub, i) => (
          <motion.a
            key={pub.title}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex flex-col md:flex-row md:items-start md:justify-between gap-2 py-7 border-b border-border last:border-0"
          >
            <div className="max-w-2xl">
              <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                {pub.title}
              </h3>
              <p className="font-mono text-xs text-text-tertiary mt-1.5">
                {pub.venue}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mt-2">
                {pub.description}
              </p>
              <p className="font-mono text-xs text-text-tertiary mt-2">
                {pub.meta}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-text-tertiary group-hover:text-accent transition-colors shrink-0 mt-1" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}