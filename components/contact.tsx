"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="container-page py-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-surface p-10 md:p-14 text-center"
      >

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-xl mx-auto">
          Have an opportunity in mind? Let&apos;s talk.
        </h2>

        <p className="mt-4 text-text-secondary max-w-md mx-auto">
          I&apos;m open to full-time roles, collaborations, and interesting
          problems in Data Science and AI. Reach out and I&apos;ll get back to
          you within a day or two.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          
           <a href="mailto:hifzanadeemofficial12@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            <Mail className="h-4 w-4" />
            hifzanadeemofficial12@gmail.com
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          
            <a href="https://www.linkedin.com/in/hifza-nadeem-5141b82a5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          
            <a href="https://github.com/Hifza120"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}