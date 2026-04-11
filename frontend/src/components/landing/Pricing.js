import { useInView } from "@/hooks/useInView";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "19",
    popular: false,
    features: [
      "1 site WordPress",
      "15 articole/lună",
      "Keyword research",
      "Calendar editorial",
      "Publicare automată",
    ],
  },
  {
    name: "Pro",
    price: "49",
    popular: true,
    features: [
      "5 site-uri WordPress",
      "50 articole/lună",
      "Google Search Console",
      "Manager backlinks",
      "Rapoarte avansate",
      "Email notificări",
    ],
  },
  {
    name: "Agency",
    price: "99",
    popular: false,
    features: [
      "20 site-uri WordPress",
      "200 articole/lună",
      "WooCommerce integrare",
      "Social Media posting",
      "Audit SEO tehnic",
      "Suport prioritar",
    ],
  },
];

const Pricing = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="pricing" data-testid="pricing-section" className="py-24 px-6" style={{ backgroundColor: "#0a0a0b" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e1e21] text-[#a1a1aa] text-[13px] font-medium border border-[#2a2a2d]">
            Prețuri Simple
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Alege planul potrivit pentru tine
          </h2>
          <p className="text-[#a1a1aa] max-w-xl mx-auto text-base sm:text-lg">
            Începe cu 7 zile gratuit, fără obligații. Anulează oricând.
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
                <span className="text-sm text-[#a1a1aa]">&euro;</span>
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-[#a1a1aa] text-sm">/lună</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-[#00D26A] flex-shrink-0" />
                    <span className="text-[#a1a1aa]">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "bg-[#00D26A] text-black hover:bg-[#00E676]"
                    : "bg-transparent border border-[#1e1e21] text-white hover:border-[#a1a1aa]"
                }`}
              >
                Începe Gratuit <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/pricing" data-testid="pricing-see-all" className="text-sm text-[#00D26A] font-medium hover:underline">
            Vezi toate planurile și funcționalitățile &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
