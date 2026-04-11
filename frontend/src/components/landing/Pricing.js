import { useInView } from "@/hooks/useInView";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "19",
    popular: false,
    features: [
      "1 site WordPress",
      "15 articole/luna",
      "Keyword research",
      "Calendar editorial",
      "Publicare automata",
      "Template-uri articole",
    ],
  },
  {
    name: "Pro",
    price: "49",
    popular: true,
    features: [
      "5 site-uri WordPress",
      "50 articole/luna",
      "Google Search Console",
      "Manager backlinks",
      "Social Media posting",
      "Rapoarte avansate",
      "Email notificari",
      "PageSpeed Insights",
    ],
  },
  {
    name: "Agency",
    price: "99",
    popular: false,
    features: [
      "20 site-uri WordPress",
      "200 articole/luna",
      "WooCommerce integrare",
      "Social Media posting",
      "Web 2.0 Backlinks",
      "Audit SEO tehnic",
      "Suport prioritar",
      "White-label complet",
    ],
  },
];

const Pricing = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" data-testid="pricing-section" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Preturi Simple</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Alege planul potrivit
            <br />
            <span className="gradient-text">pentru tine</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-base sm:text-lg">
            Incepe cu 7 zile gratuit, fara obligatii. Anuleaza oricand.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""} ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {plan.popular && (
                <div className="text-xs font-bold text-[#00D26A] tracking-widest mb-4">CEL MAI POPULAR</div>
              )}
              <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-6">
                <span className="text-sm text-[#a1a1aa]">&#8364;</span>
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-[#a1a1aa] text-sm">/luna</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#00D26A] flex-shrink-0" />
                    <span className="text-[#a1a1aa]">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-[#00D26A] text-black hover:bg-[#00E676]"
                    : "bg-transparent border border-[#1e1e21] text-white hover:border-[#a1a1aa]"
                }`}
              >
                Incepe Gratuit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Transparency note */}
        <div data-testid="transparency-note" className="mt-12 p-6 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21] text-center max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-2">Transparenta Totala</h3>
          <p className="text-sm text-[#a1a1aa] leading-relaxed">
            Folosesti propriile tale chei API. Platesti direct la OpenAI, Resend, etc. pentru ce consumi.
            Fara comisioane ascunse, control total asupra costurilor. Costuri extra estimate: 1-10 euro/luna.
          </p>
        </div>

        <div className="text-center mt-8">
          <a href="#" data-testid="pricing-see-all" className="text-sm text-[#00D26A] font-medium hover:underline">
            Vezi toate planurile si functionalitatile &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
