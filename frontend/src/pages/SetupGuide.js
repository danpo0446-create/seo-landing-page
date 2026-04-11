import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, ArrowRight, Euro, Shield, Settings, ChevronDown, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

const whyCards = [
  {
    icon: Euro,
    title: "Transparenta Costuri",
    desc: "Platesti direct furnizorilor (OpenAI, etc.) exact cat consumi. Fara comisioane ascunse sau markup-uri.",
  },
  {
    icon: Shield,
    title: "Control Total",
    desc: "Setezi propriile limite de cheltuieli. Daca vrei sa opresti, dezactivezi cheia si gata.",
  },
  {
    icon: Settings,
    title: "Flexibilitate",
    desc: "Alegi ce servicii folosesti. Vrei doar articole? Folosesti doar OpenAI. Vrei si outreach? Adaugi Resend.",
  },
];

const costs = [
  { item: "10 articole SEO / luna", price: "~€1.00" },
  { item: "50 articole SEO / luna", price: "~€5.00" },
  { item: "100 emailuri outreach / luna", price: "GRATUIT" },
  { item: "Imagini pentru articole", price: "GRATUIT" },
];

const setupFeatures = [
  "Creare conturi pe toate serviciile necesare",
  "Configurare si verificare chei API",
  "Conectare cu platforma SEO Automation",
  "Configurare domeniu pentru email (daca e cazul)",
  "Testare completa a tuturor functiilor",
  "Ghid personalizat de utilizare (30 min video call)",
  "Suport prioritar 30 zile",
];

const services = [
  {
    name: "OpenAI (GPT-4)",
    badge: "Necesar",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    desc: "Genereaza articole SEO optimizate cu inteligenta artificiala",
    price: "~€0.05-0.10 per articol",
    priceNote: "Platesti per utilizare (pay-as-you-go)",
    iconBg: "bg-[#10a37f]",
    iconEmoji: "✦",
    link: "https://platform.openai.com/signup",
    steps: [
      "Acceseaza platform.openai.com si creaza cont",
      "Confirma adresa de email",
      "Din meniu, selecteaza 'API Keys'",
      "Click pe 'Create new secret key'",
      "Copiaza cheia (incepe cu 'sk-')",
      "Important: Adauga credit in sectiunea Billing (minim $5)",
    ],
    tip: "Recomandam sa setezi un limit lunar de $10-20 pentru inceput",
  },
  {
    name: "Google Gemini",
    badge: "Plan Gratuit",
    badgeColor: "bg-[#00D26A]/20 text-[#00D26A] border-[#00D26A]/30",
    desc: "Alternativa gratuita la OpenAI pentru generare continut",
    price: "GRATUIT",
    priceNote: "Pana la 60 requesturi/minut",
    iconBg: "bg-[#4285f4]",
    iconEmoji: "✦",
    link: "https://aistudio.google.com/",
    steps: [
      "Acceseaza aistudio.google.com",
      "Logheaza-te cu contul Google",
      "Click pe 'Get API Key'",
      "Selecteaza sau creaza un proiect",
      "Copiaza cheia API",
    ],
    tip: "Ideal pentru teste sau daca vrei sa reduci costurile",
  },
  {
    name: "Resend (Email Outreach)",
    badge: "Plan Gratuit",
    badgeColor: "bg-[#00D26A]/20 text-[#00D26A] border-[#00D26A]/30",
    desc: "Trimite emailuri pentru campanii de backlinks si outreach",
    price: "3,000 emailuri/luna GRATUIT",
    priceNote: "Apoi €20/luna pentru 50,000 emailuri",
    iconBg: "bg-[#6c47ff]",
    iconEmoji: "✉",
    link: "https://resend.com/signup",
    steps: [
      "Creaza cont pe resend.com",
      "Verifica domeniul tau (adaugi recorduri DNS)",
      "Din Dashboard, click pe 'API Keys'",
      "Creaza o cheie noua",
      "Copiaza cheia (incepe cu 're_')",
    ],
    tip: "Necesita domeniu propriu pentru trimitere. Planul gratuit e suficient pentru inceput.",
  },
  {
    name: "SendGrid (Email)",
    badge: "Plan Gratuit",
    badgeColor: "bg-[#00D26A]/20 text-[#00D26A] border-[#00D26A]/30",
    desc: "Alternativa pentru email outreach cu plan gratuit permanent",
    price: "100 emailuri/zi GRATUIT",
    priceNote: "Pentru totdeauna (3,000/luna)",
    iconBg: "bg-[#1A82E2]",
    iconEmoji: "✉",
    link: "https://signup.sendgrid.com/",
    steps: [
      "Creaza cont pe sendgrid.com",
      "Verifica identitatea (poate dura 1-2 zile)",
      "Din Settings > API Keys",
      "Creaza cheie cu 'Full Access'",
      "Copiaza cheia (incepe cu 'SG.')",
    ],
    tip: "Verificarea contului poate dura. Incepe procesul din timp.",
  },
  {
    name: "Pexels (Imagini)",
    badge: "Plan Gratuit",
    badgeColor: "bg-[#00D26A]/20 text-[#00D26A] border-[#00D26A]/30",
    desc: "Imagini gratuite de calitate pentru articolele tale",
    price: "GRATUIT",
    priceNote: "200 requesturi/ora, nelimitat",
    iconBg: "bg-[#05A081]",
    iconEmoji: "📷",
    link: "https://www.pexels.com/api/",
    steps: [
      "Creaza cont pe pexels.com",
      "Confirma emailul",
      "Acceseaza pexels.com/api",
      "Copiaza cheia API din dashboard",
    ],
    tip: "Cel mai simplu de configurat. Recomandat pentru toti utilizatorii.",
  },
];

const faqs = [
  { q: "Pot folosi platforma fara chei API?", a: "Nu, cheile API sunt necesare pentru a genera continut si a trimite emailuri. Dar configurarea dureaza doar 15-30 minute." },
  { q: "E sigur sa imi pun cheile API in platforma?", a: "Da! Cheile sunt stocate criptat si utilizate exclusiv pentru functionalitatile platformei. Nu le partajam cu nimeni." },
  { q: "Ce se intampla daca imi termin creditul la OpenAI?", a: "Generarea de articole se va opri pana adaugi credit. Restul platformei functioneaza normal." },
  { q: "Pot schimba intre OpenAI si Gemini?", a: "Da, poti comuta oricand din Setari. Gemini e gratuit dar OpenAI genereaza continut de calitate superioara." },
  { q: "Nu am timp/cunostinte pentru configurare. Ce fac?", a: "Oferim serviciul Setup Complet la €79 - ne ocupam noi de tot. Configurare in 24-48h." },
];

const SetupGuide = () => {
  const [openService, setOpenService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen notranslate" style={{ backgroundColor: "#050505", color: "#f4f4f5" }}>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-[#1e1e21]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#00D26A] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold text-white">SEO Automation</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/pricing" className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors">Preturi</Link>
            <Link to="/login" className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors">Autentificare</Link>
            <Link to="/register" className="text-[14px] font-semibold px-6 py-2.5 bg-[#00D26A] text-black rounded-lg hover:bg-[#00E676] transition-all">Incepe Gratuit</Link>
          </div>
        </div>
      </nav>

      <div className="pt-[72px]">
        {/* Hero */}
        <section className="py-16 px-6 text-center" style={{ backgroundColor: "#0a0a0b" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D26A] bg-[rgba(0,210,106,0.1)] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#00D26A]" />
            <span className="text-[13px] font-semibold text-[#00D26A]">Ghid de Configurare</span>
          </div>
          <h1 data-testid="guide-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Tot ce trebuie sa stii inainte sa incepi
          </h1>
          <p className="text-[#a1a1aa] max-w-2xl mx-auto text-base sm:text-lg">
            SEO Automation foloseste propriile tale chei API pentru serviciile externe. Asta inseamna control total asupra costurilor si <strong className="text-white">fara surprize</strong>.
          </p>
        </section>

        {/* De ce folosim aceasta abordare? */}
        <section className="py-16 px-6 border-t border-[#1e1e21]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-white italic">De ce folosim aceasta abordare?</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {whyCards.map((c, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#111113] border border-[#1e1e21]">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center mb-5">
                    <c.icon className="w-5 h-5 text-[#00D26A]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-[#71717a] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cat costa in realitate? */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0b" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-white italic">Cat costa in realitate?</h2>
            <div className="rounded-2xl bg-[#111113] border border-[#1e1e21] overflow-hidden">
              {costs.map((c, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-5 border-b border-[#1e1e21] last:border-b-0">
                  <span className="text-sm text-[#a1a1aa]">{c.item}</span>
                  <span className="text-sm font-bold text-white">{c.price}</span>
                </div>
              ))}
              <div className="flex items-center justify-between px-6 py-5 bg-[rgba(0,210,106,0.06)]">
                <span className="text-sm font-bold text-white">Total estimat / luna</span>
                <span className="text-sm font-extrabold text-[#00D26A]">€1 - €10</span>
              </div>
              <div className="px-6 py-3 text-center">
                <p className="text-xs text-[#52525b] italic">* Estimare pentru utilizare medie. Costurile variaza in functie de volum.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviciu Setup Complet */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border border-[#1e1e21]" style={{ background: "linear-gradient(135deg, #0f1a14 0%, #0c0c0e 50%, #111113 100%)" }}>
              <div className="grid md:grid-cols-[1fr_auto] gap-0">
                <div className="p-8 md:p-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[rgba(0,210,106,0.12)] text-[#00D26A] text-xs font-semibold border border-[rgba(0,210,106,0.2)] mb-5">
                    Serviciu Premium
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Serviciu Setup Complet</h3>
                  <p className="text-sm text-[#a1a1aa] mb-6">Nu vrei sa te ocupi de configurari tehnice? Noi facem totul pentru tine!</p>
                  <div className="space-y-3 mb-6">
                    {setupFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#00D26A] flex-shrink-0" />
                        <span className="text-sm text-[#a1a1aa]">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#52525b] italic">Ideal pentru antreprenori si agentii care vor sa inceapa rapid fara batai de cap tehnice.</p>
                </div>
                <div className="flex items-center p-8 md:p-10 md:pl-0">
                  <div className="w-full md:w-52 rounded-xl bg-[#1e1e21] border border-[#2a2a2d] p-6 text-center">
                    <p className="text-xs text-[#a1a1aa] mb-1">Pret unic</p>
                    <div className="text-4xl font-extrabold text-white mb-1">&euro;79</div>
                    <p className="text-xs text-[#71717a] mb-5">platire o singura data</p>
                    <Link
                      to="/contact"
                      data-testid="setup-contact-btn"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#00D26A] text-black text-sm font-semibold hover:bg-[#00E676] transition-colors"
                    >
                      Contacteaza-ne <ArrowRight className="w-4 h-4" />
                    </Link>
                    <p className="text-xs text-[#52525b] mt-3">Configurare in 24-48h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ghid Pas cu Pas */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0b" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 text-white">Ghid Pas cu Pas</h2>
            <p className="text-center text-[#a1a1aa] mb-10">Configureaza singur in 15-30 minute</p>
            <div className="space-y-5">
              {services.map((s, i) => (
                <div key={i} data-testid={`service-${i}`} className="rounded-2xl bg-[#111113] border border-[#1e1e21] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center text-white text-lg`}>
                          {s.iconEmoji}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-white">{s.name}</h3>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.badgeColor}`}>{s.badge}</span>
                          </div>
                          <p className="text-xs text-[#71717a] mt-0.5">{s.desc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">{s.price}</div>
                        <div className="text-xs text-[#71717a]">{s.priceNote}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpenService(openService === i ? null : i)}
                    className="w-full flex items-center gap-2 px-6 py-3 text-left border-t border-[#1e1e21] hover:bg-[#1e1e21]/30 transition-colors"
                  >
                    <Settings className="w-4 h-4 text-[#52525b]" />
                    <span className="text-sm text-[#a1a1aa] underline">Vezi pasii de configurare</span>
                    <ChevronDown className={`w-4 h-4 text-[#52525b] ml-auto transition-transform ${openService === i ? "rotate-180" : ""}`} />
                  </button>
                  {openService === i && (
                    <div className="px-6 pb-6 border-t border-[#1e1e21] pt-5">
                      <ol className="space-y-4 mb-5">
                        {s.steps.map((step, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-[rgba(0,210,106,0.12)] flex items-center justify-center text-xs font-bold text-[#00D26A] flex-shrink-0 mt-0.5">{j + 1}</span>
                            <span className="text-sm text-[#a1a1aa]">{step}</span>
                          </li>
                        ))}
                      </ol>
                      {/* Sfat box */}
                      <div className="flex items-start gap-2 p-4 rounded-xl bg-[rgba(234,179,8,0.06)] border border-[rgba(234,179,8,0.15)] mb-5">
                        <span className="text-amber-400 text-sm mt-0.5">ⓘ</span>
                        <p className="text-sm text-[#a1a1aa]"><strong className="text-amber-400">Sfat:</strong> {s.tip}</p>
                      </div>
                      {/* Deschide button */}
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#2a2a2d] text-white text-sm font-medium hover:bg-[#1e1e21] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Deschide {s.name}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-white italic">Intrebari Frecvente</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden transition-colors ${openFaq === i ? "border-[rgba(0,210,106,0.3)] bg-[#0c0c0e]" : "border-[#1e1e21]"}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                    <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${openFaq === i ? "text-[#00D26A] rotate-180" : "text-[#52525b]"}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-4" : "max-h-0"}`}>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-16 px-6 border-t border-[#1e1e21]" style={{ backgroundColor: "#0a0a0b" }}>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">Gata sa incepi?</h2>
            <p className="text-[#a1a1aa] mb-8">7 zile gratuit, fara card. Configureaza cheile si testeaza toate functiile.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register" className="btn-primary">Incepe Gratuit <ArrowRight className="w-4 h-4" /></Link>
              <Link to="/contact" className="btn-secondary">Vreau Setup Complet (€79)</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#1a1a1d]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D26A] flex items-center justify-center"><Zap className="w-4 h-4 text-black" /></div>
              <span className="text-sm font-bold text-white">SEO Phoenix Martech Assistance</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Termeni</Link>
              <Link to="/privacy" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Confidentialitate</Link>
              <Link to="/contact" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Contact</Link>
            </div>
            <p className="text-xs text-[#52525b]">&copy; {new Date().getFullYear()} SEO Phoenix Martech Assistance.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SetupGuide;
