"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-[100px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_75%)]" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6 border border-transparent rounded-full px-3 py-1.5 cursor-default"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Open to full-time opportunities, remote collaborations, and contract-based work.
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="text-accent inline-block relative"
              animate={{
                textShadow: [
                  "0 0 0px var(--color-accent)",
                  "0 0 20px var(--color-accent)",
                  "0 0 0px var(--color-accent)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            >
              Hifza
            </motion.span>
            .
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-5 max-w-xl text-lg text-text-secondary"
        >
          Final-year CS student & former Data Science Intern at 10Pearls. I build
          ML-driven systems — from forecasting pipelines to research — with a
          focus on real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex items-center gap-3"
        >
          <motion.a
            href="#projects"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-1.5 rounded-md bg-accent px-5 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
          >
            View projects
            <motion.span
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-border-strong transition-colors"
          >
            Contact me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}