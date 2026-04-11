import { useInView } from "@/hooks/useInView";
import {
  FileText, Calendar, Search, Link, Share2, BarChart3,
  Gauge, Globe, LayoutTemplate, Settings, LayoutDashboard, Palette
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Automatizare Articole SEO",
    desc: "Generare automata de articole SEO in limba romana folosind GPT-4 si Gemini. Publicare automata pe WordPress cu imagini de pe Pexels.",
  },
  {
    icon: Calendar,
    title: "Calendar Editorial 90 Zile",
    desc: "Planifica continutul pe 3 luni cu AI. Vizualizare calendar cu status articole: planificat, publicat sau draft.",
  },
  {
    icon: Search,
    title: "Cercetare Cuvinte-Cheie",
    desc: "Generare keywords cu AI bazat pe nisa. Metrici complete: volum cautari, dificultate SEO, CPC si trend.",
  },
  {
    icon: Link,
    title: "Sistem Backlinks Automat",
    desc: "30+ oportunitati backlinks per nisa cu categorii: Guest Post, Directory, Forum. Outreach automat via email.",
  },
  {
    icon: Share2,
    title: "Social Media Auto-Posting",
    desc: "Postare automata pe LinkedIn si Facebook dupa publicarea articolelor. Conectare OAuth 2.0 securizata.",
  },
  {
    icon: BarChart3,
    title: "Google Search Console",
    desc: "Dashboard cu clicks, impressions, CTR si pozitie medie. Grafice trafic zilnic si top queries.",
  },
  {
    icon: Gauge,
    title: "PageSpeed Insights",
    desc: "Analiza performanta Mobile + Desktop. Scoruri Performance, Accessibility, Best Practices si SEO.",
  },
  {
    icon: Globe,
    title: "Web 2.0 Backlinks",
    desc: "Continut pentru Medium, Blogger, LinkedIn Articles, Tumblr si Pinterest. Copy-paste ready.",
  },
  {
    icon: LayoutTemplate,
    title: "Template-uri Articole",
    desc: "Ghid Complet, Listicle, Comparatie, How-To, Recenzie. Tonuri si lungimi personalizabile + custom.",
  },
  {
    icon: Settings,
    title: "Management Site-uri WordPress",
    desc: "Conectare multipla site-uri. Configurare credentiale, automatizare per site si notificari email.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Centralizat",
    desc: "Statistici globale: articole, keywords, backlinks. Overview site-uri si status automatizari.",
  },
  {
    icon: Palette,
    title: "White-Label 100%",
    desc: "Fara branding tert. Personalizare completa: logo, culori si notificari email customizabile.",
  },
];

const Features = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="features" data-testid="features-section" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">Functionalitati</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Tot ce ai nevoie pentru
            <br />
            <span className="gradient-text">SEO de succes</span>
          </h2>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-base sm:text-lg">
            O platforma completa care automatizeaza intregul proces de content marketing si SEO.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-testid={`feature-card-${i}`}
              className={`feature-card ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[rgba(0,210,106,0.1)] flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-[#00D26A]" />
              </div>
              <h3 className="text-base font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
