"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
const projects = [
  {
    title: "Ethical AI — Academic Assistant",
    description:
      "A final-year project: a chat-based learning assistant that helps students with coursework — explaining concepts like recursion and Big O — while preserving academic integrity instead of just handing out answers.",
    tags: ["Python", "LLM", "Chat UI"],
    github: "#",
    live: "https://ethical-ai-frontend-ten.vercel.app/chat",
  },
  {
    title: "AQI Forecasting System",
    description:
      "An end-to-end air quality forecasting pipeline built during my Data Science internship at 10Pearls — leakage-safe, time-series-aware model validation, SHAP-based transparency, and automated retraining via GitHub Actions.",
    tags: ["Python", "Machine Learning", "MLOps", "CI/CD"],
    github: "https://github.com/Hifza120/aqi_predictor",
    live: "https://aqipredictor-rygzfuyfvhp5mtzc6qeeeu.streamlit.app",
  },
  {
    title: "SmartPriceAlertBot",
    description:
      "A monitoring system tracking 10,000+ cryptocurrencies via the CoinGecko API, using a linear regression model for short-term PKR price prediction with automated email and Telegram alerts.",
    tags: ["Python", "Scikit-learn", "Pandas", "Telegram Bot API"],
    github: "https://github.com/Hifza120/SmartPriceAlertBot",
    live: "#",
  },
  {
    title: "Neighborhood Community Issue Management System",
    description:
      "A relational database system for reporting and resolving community issues, with structured CRUD operations and SQL workflows.",
    tags: ["MySQL", "SQL"],
    github: "https://github.com/Hifza120/-Neighborhood-Community-Issue-Management-System-",
    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container-page py-24">
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
        Selected work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface p-6 flex flex-col justify-between hover:border-border-strong transition-colors"
          >
            <div>
              <h3 className="text-lg font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-text-tertiary border border-border rounded-md px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              
               <a href={project.github}
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Code2 className="h-4 w-4" />
                Code
              </a>
              
                <a href={project.live}
                className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                Live <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}