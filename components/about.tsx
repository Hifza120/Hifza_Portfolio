"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="container-page py-24">
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
        className="text-3xl font-semibold tracking-tight mb-6 max-w-2xl"
      >
        I turn messy data and open questions into systems that actually work.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl space-y-4 text-text-secondary leading-relaxed"
      >
        <p>
          I&apos;m a final-year Computer Science student who spends most days
          somewhere between a Jupyter notebook and a research paper. As a
          Data Science Intern at 10Pearls, I built an end-to-end AQI
          forecasting system — from leakage-safe model validation to
          automated retraining pipelines with GitHub Actions.
        </p>
        <p>
          My background spans machine learning, MLOps, and academic
          research — I co-authored a peer-reviewed paper on underwater image
          enhancement, and I currently mentor 45+ students a semester as a
          three-time Teaching Assistant. Right now I&apos;m building an
          Ethical AI system for my final year project, focused on keeping
          learning tools genuinely useful without compromising academic
          integrity.
        </p>
      </motion.div>
    </section>
  );
}