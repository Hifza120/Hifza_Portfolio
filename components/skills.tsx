"use client";

import { motion } from "framer-motion";

const stack = {
  languages: ["Python", "SQL", "C++", "TypeScript"],
  ml: [
    "Machine Learning",
    "MLOps",
    "Predictive Modeling",
    "Feature Engineering",
    "Data Analysis",
  ],
  tools: ["Git", "MySQL", "SQLite", "REST APIs", "React", "Excel"],
};

export function Skills() {
  return (
    <section id="skills" className="container-page py-24">
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
        What I work with
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-surface p-6 font-mono text-sm"
      >
        {Object.entries(stack).map(([key, values]) => (
          <div
            key={key}
            className="flex flex-wrap items-baseline gap-x-3 py-3 border-b border-border last:border-0"
          >
            <span className="text-text-tertiary w-24 shrink-0">{key}:</span>
            <span className="text-text-primary">
              [{values.map((v) => `"${v}"`).join(", ")}]
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}