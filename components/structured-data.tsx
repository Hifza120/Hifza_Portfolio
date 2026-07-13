export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hifza",
    jobTitle: "AI/ML Engineer & Developer",
    description:
      "Final-year CS student and former Data Science Intern at 10Pearls. Builds ML-driven systems — from forecasting pipelines to research.",
    url: "https://hifza.dev",
    email: "mailto:hifzanadeemofficial12@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/hifza-nadeem-5141b82a5/",
      "https://github.com/Hifza120",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Central Punjab",
    },
    worksFor: {
      "@type": "Organization",
      name: "10Pearls",
    },
    knowsAbout: [
      "Machine Learning",
      "MLOps",
      "Data Science",
      "Python",
      "Predictive Modeling",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
