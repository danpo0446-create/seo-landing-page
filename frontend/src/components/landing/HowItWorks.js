import { useInView } from "@/hooks/useInView";
import { Globe, Sliders, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Globe,
    title: "Conecteaza Site-urile WordPress",
    desc: "Adauga site-urile tale WordPress in cateva secunde. Configurare simpla cu Application Password.",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Configureaza Nisa si Programul",
    desc: "Seteaza nisa, tonul, limba si programul de publicare. AI-ul se ocupa de restul.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Lasa AI-ul sa Lucreze",
    desc: "Articole generate, publicate si promovate automat. Monitorizeaza rezultatele din dashboard.",
  },
];

const HowItWorks = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Cum Functioneaza</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            3 pasi simpli catre
            <br />
            <span className="gradient-text">SEO automat</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-base sm:text-lg">
            De la configurare la rezultate in mai putin de 5 minute.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.num}
              data-testid={`step-${i}`}
              className={`relative text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(0,210,106,0.1)] border border-[rgba(0,210,106,0.2)] mb-6">
                <s.icon className="w-7 h-7 text-[#00D26A]" />
              </div>
              <div className="text-xs font-bold text-[#00D26A] tracking-widest mb-3">PASUL {s.num}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
