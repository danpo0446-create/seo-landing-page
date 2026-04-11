import PageLayout from "@/components/PageLayout";
import { CheckCircle2, ArrowRight, Key, Settings, Zap, Mail } from "lucide-react";

const steps = [
  {
    icon: Key,
    title: "1. Obține cheile API",
    items: [
      "Creează un cont OpenAI și generează o cheie API din dashboard",
      "Creează un cont Resend.com pentru trimiterea de emailuri",
      "Opțional: activează Google Search Console pentru monitorizare",
    ],
  },
  {
    icon: Settings,
    title: "2. Configurează platforma",
    items: [
      "Adaugă cheile API în setările contului tău",
      "Conectează site-urile WordPress (necesită Application Password)",
      "Setează nișa, limba și tonul pentru fiecare site",
    ],
  },
  {
    icon: Zap,
    title: "3. Activează automatizarea",
    items: [
      "Generează calendarul editorial pe 90 de zile",
      "Configurează programul de publicare (ora și frecvența)",
      "Activează publicarea automată și monitorizarea",
    ],
  },
  {
    icon: Mail,
    title: "4. Configurează outreach (opțional)",
    items: [
      "Adaugă domeniul în Resend pentru trimitere emailuri",
      "Configurează template-urile de outreach pentru backlinks",
      "Activează automatizarea zilnică (15 emailuri/zi per site)",
    ],
  },
];

const SetupGuide = () => (
  <PageLayout>
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-[rgba(0,210,106,0.12)] text-[#00D26A] text-xs font-semibold border border-[rgba(0,210,106,0.2)] mb-5">
          Ghid de Configurare
        </span>
        <h1 data-testid="guide-title" className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
          Configurează SEO Automation
        </h1>
        <p className="text-[#a1a1aa] text-base max-w-xl mx-auto">
          Urmează acești pași simpli pentru a configura platforma. Durată estimată: 10-15 minute.
        </p>
      </div>

      <div className="space-y-8">
        {steps.map((step, i) => (
          <div
            key={i}
            data-testid={`guide-step-${i}`}
            className="p-6 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center">
                <step.icon className="w-5 h-5 text-[#00D26A]" />
              </div>
              <h2 className="text-lg font-bold text-white">{step.title}</h2>
            </div>
            <ul className="space-y-3 pl-[52px]">
              {step.items.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                  <CheckCircle2 className="w-4 h-4 text-[#00D26A] mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-[rgba(0,210,106,0.05)] border border-[rgba(0,210,106,0.15)] text-center">
        <h3 className="text-lg font-bold text-white mb-2">Nu vrei să configurezi singur?</h3>
        <p className="text-sm text-[#a1a1aa] mb-4">
          Echipa noastră poate face toată configurarea pentru tine. Setup complet: <strong className="text-white">&euro;79</strong> (plată unică).
        </p>
        <a
          href="mailto:martechassistance@gmail.com?subject=Setup Complet SEO Automation"
          data-testid="guide-setup-btn"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D26A] text-black font-semibold text-sm rounded-xl hover:bg-[#00E676] transition-all"
        >
          Solicită Setup Complet <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </PageLayout>
);

export default SetupGuide;
