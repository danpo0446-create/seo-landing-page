import { useInView } from "@/hooks/useInView";
import { Check } from "lucide-react";

const benefits = [
  "Economisesti 40+ ore/luna",
  "Continut SEO optimizat in romana",
  "Zero efort manual dupa configurare",
  "Creste traficul organic constant",
  "Backlinks de calitate automat",
  "Monitorizare completa performanta",
  "100% White-label",
  "Suport in limba romana",
];

const Benefits = () => {
  const [ref, isInView] = useInView();

  return (
    <section data-testid="benefits-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">De Ce Noi</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-6 mb-4 tracking-tight text-white">
              Rezultate reale,
              <br />
              <span className="gradient-text">fara efort manual</span>
            </h2>
            <p className="text-[#a1a1aa] text-base sm:text-lg leading-relaxed">
              Platforma noastra automatizeaza complet procesul de SEO, de la cercetarea keywords
              pana la publicarea articolelor si outreach-ul pentru backlinks.
            </p>
          </div>

          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={b}
                data-testid={`benefit-${i}`}
                className={`flex items-center gap-3 p-4 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-[rgba(0,210,106,0.1)] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#00D26A]" />
                </div>
                <span className="text-sm font-medium text-white">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
