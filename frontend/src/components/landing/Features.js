import { useInView } from "@/hooks/useInView";
import {
  FileText, Search, Calendar, Globe,
  Zap, Link, BarChart3, Mail,
  Gauge, Share2, LayoutTemplate, Palette
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Articole SEO Generate cu AI",
    desc: "Articole optimizate pentru SEO, scrise automat în limba română, cu lungime și ton personalizabile.",
  },
  {
    icon: Search,
    title: "Keyword Research Inteligent",
    desc: "Descoperă cuvinte-cheie profitabile pentru nișa ta cu analiza volumului și dificultății.",
  },
  {
    icon: Calendar,
    title: "Calendar Editorial 90 Zile",
    desc: "Planifică conținutul pe 3 luni înainte cu calendar generat automat de AI.",
  },
  {
    icon: Globe,
    title: "Multi-Site WordPress",
    desc: "Gestionează multiple site-uri WordPress dintr-un singur dashboard.",
  },
  {
    icon: Zap,
    title: "Publicare Automată",
    desc: "Articolele sunt publicate automat pe WordPress la ora programată.",
  },
  {
    icon: Link,
    title: "Manager Backlinks",
    desc: "Găsește oportunități de backlinks și trimite email-uri de outreach automat.",
  },
  {
    icon: BarChart3,
    title: "Google Search Console",
    desc: "Monitorizează traficul și performanța direct din dashboard.",
  },
  {
    icon: Mail,
    title: "Notificări Email",
    desc: "Primește notificări când articolele sunt publicate și rapoarte săptămânale.",
  },
  {
    icon: Gauge,
    title: "PageSpeed Insights",
    desc: "Analiză performanță Mobile + Desktop. Scoruri Performance, Accessibility, SEO.",
  },
  {
    icon: Share2,
    title: "Social Media Auto-Posting",
    desc: "Postare automată pe LinkedIn și Facebook după publicarea articolelor.",
  },
  {
    icon: LayoutTemplate,
    title: "Template-uri Articole",
    desc: "Ghid Complet, Listicle, Comparație, How-To, Recenzie. Tonuri personalizabile.",
  },
  {
    icon: Palette,
    title: "White-Label 100%",
    desc: "Fără branding terț. Personalizare completă: logo, culori și notificări.",
  },
];

const Features = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="features" data-testid="features-section" className="py-24 px-6" style={{ backgroundColor: "#111113" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#1e1e21] text-[#a1a1aa] text-[13px] font-medium border border-[#2a2a2d]">
            Funcționalități
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Tot ce ai nevoie pentru SEO de succes
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-base sm:text-lg">
            O platformă completă care automatizează întregul proces de content marketing și SEO.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-testid={`feature-card-${i}`}
              className={`feature-card ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center mb-5">
                <f.icon className="w-5 h-5 text-[#00D26A]" />
              </div>
              <h3 className="text-[15px] font-bold mb-2 text-white leading-snug">{f.title}</h3>
              <p className="text-[13px] text-[#71717a] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
