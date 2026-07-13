"use client";

import { motion } from "framer-motion";

const experience = [
  {
    role: "Data Science Intern",
    company: "10Pearls (Remote)",
    period: "Apr 2026 — Jun 2026",
    points: [
      "Built an end-to-end AQI forecasting solution using Machine Learning and MLOps, processing multi-year air quality and weather datasets through automated pipelines.",
      "Developed and evaluated multiple regression models with leakage-safe, time-series-aware validation for robust forecasting performance.",
      "Enhanced model transparency with SHAP and supported automated retraining workflows through GitHub Actions-based CI/CD pipelines.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "University of Central Punjab",
    period: "Nov 2024 — Present",
    points: [
      "Mentored 45+ students per semester across Programming Fundamentals and OOP labs — debugging, problem solving, and core concepts.",
      "Selected three times as Teaching Assistant based on academic excellence and faculty recommendation.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="container-page py-24">
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
        Where I&apos;ve worked
      </motion.h2>

      <div className="space-y-0">
        {experience.map((job, i) => (
          <motion.div
            key={job.role + job.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-8 py-8 border-b border-border last:border-0"
          >
            <span className="font-mono text-xs text-text-tertiary pt-1">
              {job.period}
            </span>
            <div>
              <h3 className="text-lg font-medium">
                {job.role}{" "}
                <span className="text-text-secondary font-normal">
                  · {job.company}
                </span>
              </h3>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm text-text-secondary leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-text-tertiary"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}