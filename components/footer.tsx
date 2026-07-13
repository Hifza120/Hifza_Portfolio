export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-tertiary">
          © {new Date().getFullYear()} Hifza. Built with Next.js.
        </p>
        <div className="flex items-center gap-6 font-mono text-xs text-text-tertiary">
          <a href="#about" className="hover:text-text-primary transition-colors">
            about
          </a>
          <a href="#projects" className="hover:text-text-primary transition-colors">
            projects
          </a>
          <a href="#contact" className="hover:text-text-primary transition-colors">
            contact
          </a>
        </div>
      </div>
    </footer>
  );
}