import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const trustBadges = ["100% White-Label", "Articole în Română", "Suport 24/7"];

const Hero = () => {
  return (
    <section data-testid="hero-section" className="relative pt-32 pb-24 px-6 hero-grid overflow-hidden">
      <div className="hero-glow" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          data-testid="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D26A] bg-[rgba(0,210,106,0.1)] mb-8 animate-fade-in"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00D26A]" />
          <span className="text-[13px] font-semibold text-[#00D26A]">
            7 zile gratuit &bull; Fără card de credit
          </span>
        </div>

        <h1
          data-testid="hero-headline"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 animate-fade-in-up text-white notranslate"
        >
          Automatizează-ți SEO-ul
          <br />
          <span className="text-[#00D26A]">cu Inteligență Artificială</span>
        </h1>

        <p
          data-testid="hero-subtitle"
          className="text-base sm:text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up notranslate"
          style={{ animationDelay: "150ms" }}
        >
          Generează articole SEO, publică automat pe WordPress, monitorizează traficul și
          crește organic fără efort manual. Tot ce ai nevoie într-o singură platformă.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "250ms" }}
        >
          <Link to="/register" data-testid="hero-cta-primary" className="btn-primary">
            Începe Trial Gratuit <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="#features" data-testid="hero-cta-secondary" className="btn-secondary">
            Vezi Funcționalitățile
          </a>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 animate-fade-in-up"
          style={{ animationDelay: "350ms" }}
        >
          {trustBadges.map((text) => (
            <div key={text} data-testid={`trust-badge`} className="flex items-center gap-2 text-[#a1a1aa]">
              <CheckCircle2 className="w-4 h-4 text-[#00D26A]" />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
