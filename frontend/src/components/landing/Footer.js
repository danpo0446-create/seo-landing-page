import { Zap, ArrowRight } from "lucide-react";

const Footer = () => {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* CTA Section */}
      <section data-testid="footer-cta-section" className="py-24 px-6 border-t border-[#1e1e21]" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Transforma-ti strategia
            <br />
            <span className="gradient-text">SEO astazi</span>
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Inregistreaza-te gratuit si incepe sa generezi articole in mai putin de 5 minute.
          </p>
          <a
            href="#pricing"
            data-testid="footer-cta-btn"
            className="btn-primary inline-flex"
            onClick={(e) => scrollTo(e, "#pricing")}
          >
            Incepe Trial Gratuit de 7 Zile <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#52525b] mt-4">
            Fara card de credit necesar &bull; Anuleaza oricand
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer data-testid="footer" className="py-8 px-6 border-t border-[#1e1e21]" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#00D26A] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="text-sm font-bold text-white">SEO Automation</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            {[
              { label: "Functionalitati", href: "#features" },
              { label: "Preturi", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                data-testid={`footer-link-${l.href.slice(1)}`}
                className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-[#52525b]">
            &copy; {new Date().getFullYear()} SEO Automation. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
