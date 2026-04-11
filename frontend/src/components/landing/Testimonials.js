import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Am economisit 20+ ore pe saptamana cu automatizarea articolelor. Traficul organic a crescut cu 150%!",
    name: "Maria D.",
    role: "E-commerce Fashion",
    initials: "MD",
  },
  {
    quote: "Gestionez 15 site-uri ale clientilor dintr-un singur loc. Productivitatea echipei s-a dublat.",
    name: "Alexandru P.",
    role: "Agentie SEO",
    initials: "AP",
  },
  {
    quote: "Calitatea articolelor generate este impresionanta. Cititorii nici nu isi dau seama ca sunt scrise de AI.",
    name: "Elena R.",
    role: "Blog Parenting",
    initials: "ER",
  },
];

const Testimonials = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="testimonials" data-testid="testimonials-section" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Testimoniale</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Ce spun
            <br />
            <span className="gradient-text">clienții noștri</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-testid={`testimonial-card-${i}`}
              className={`testimonial-card ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-[#00D26A] text-[#00D26A]" />
                ))}
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,210,106,0.1)] flex items-center justify-center text-sm font-bold text-[#00D26A]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-[#52525b]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
