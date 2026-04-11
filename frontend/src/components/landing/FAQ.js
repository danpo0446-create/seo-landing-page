import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Ce limba suporta pentru articole?",
    a: "Platforma genereaza articole native in limba romana. Continutul este optimizat SEO si adaptat publicului romanesc.",
  },
  {
    q: "Functioneaza cu orice tema WordPress?",
    a: "Da! Folosim WordPress REST API, deci este compatibil cu orice tema si configuratie WordPress.",
  },
  {
    q: "E nevoie de cunostinte tehnice?",
    a: "Nu. Configurarea dureaza sub 5 minute. Trebuie doar sa adaugi site-ul WordPress si sa setezi preferintele.",
  },
  {
    q: "Pot anula abonamentul oricand?",
    a: "Da, poti anula oricand fara penalitati. Ai acces la functionalitati pana la finalul perioadei platite.",
  },
  {
    q: "Ce AI folositi pentru generarea articolelor?",
    a: "Folosim OpenAI GPT-4 si Google Gemini pentru generarea articolelor. Poti alege modelul preferat din setari.",
  },
  {
    q: "Cum functioneaza trial-ul gratuit?",
    a: "Primesti 7 zile gratuit cu acces complet la toate functionalitatile planului ales. Nu este necesar card de credit.",
  },
  {
    q: "Folosesc propriile mele chei API?",
    a: "Da! Platforma este 100% transparenta - folosesti propriile chei API pentru OpenAI, Resend, etc. Platesti direct la furnizori.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" data-testid="faq-section" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-6 mb-4 tracking-tight text-white">
            Intrebari
            <span className="gradient-text"> frecvente</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-testid={`faq-item-${i}`}
              className={`border rounded-xl overflow-hidden transition-colors ${
                openIndex === i ? "border-[#00D26A]/30 bg-[#0c0c0e]" : "border-[#1e1e21] hover:border-[#2a2a2d]"
              }`}
            >
              <button
                data-testid={`faq-toggle-${i}`}
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-semibold pr-4 text-white">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-4 h-4 text-[#00D26A] flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-[#52525b] flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
