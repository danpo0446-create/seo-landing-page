import { Zap, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section data-testid="footer-cta-section" className="py-24 px-6 border-t border-[#1a1a1d]" style={{ backgroundColor: "#0a0a0b" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D26A] bg-[rgba(0,210,106,0.1)] mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#00D26A]" />
            <span className="text-[13px] font-semibold text-[#00D26A]">
              Gata să începi?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Transformă-ți strategia SEO astăzi
          </h2>
          <p className="text-[#a1a1aa] text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Înregistrează-te gratuit și începe să generezi articole în mai puțin de 5 minute.
          </p>
          <Link
            to="/register"
            data-testid="footer-cta-btn"
            className="btn-primary inline-flex"
          >
            Începe Trial Gratuit de 7 Zile <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-xs text-[#52525b] mt-4">
            Fără card de credit necesar &bull; Anulează oricând
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer data-testid="footer" className="py-8 px-6 border-t border-[#1a1a1d]" style={{ backgroundColor: "#050505" }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00D26A] flex items-center justify-center">
              <Zap className="w-4 h-4 text-black" />
            </div>
            <span className="text-sm font-bold text-white leading-tight">
              SEO Phoenix Martech<br />Assistance
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/terms" data-testid="footer-link-terms" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">
              Termeni și Condiții
            </Link>
            <Link to="/privacy" data-testid="footer-link-privacy" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">
              Confidențialitate
            </Link>
            <Link to="/contact" data-testid="footer-link-contact" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">
              Contact
            </Link>
          </div>

          <p className="text-xs text-[#52525b]">
            &copy; {new Date().getFullYear()} SEO Phoenix Martech Assistance. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
