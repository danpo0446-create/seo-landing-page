import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowLeft, Check, X, Minus, Plus } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect pentru bloggeri și site-uri mici",
    price: 19,
    color: "#3B82F6",
    popular: false,
    limits: { sites: "1 site WordPress", articles: "15 articole/lună" },
    features: { gsc: false, backlinks: false, woocommerce: false, socialMedia: false, auditSeo: false },
    reports: "Basic",
    support: "Email",
  },
  {
    name: "Pro",
    desc: "Ideal pentru freelanceri și afaceri în creștere",
    price: 49,
    color: "#00D26A",
    popular: true,
    limits: { sites: "5 site-uri WordPress", articles: "50 articole/lună" },
    features: { gsc: true, backlinks: true, woocommerce: false, socialMedia: false, auditSeo: false },
    reports: "Avansat",
    support: "Priority",
  },
  {
    name: "Agency",
    desc: "Pentru agenții și echipe mari",
    price: 99,
    color: "#A855F7",
    popular: false,
    limits: { sites: "20 site-uri WordPress", articles: "200 articole/lună" },
    features: { gsc: true, backlinks: true, woocommerce: true, socialMedia: true, auditSeo: true },
    reports: "Complet",
    support: "Prioritar 24/7",
  },
  {
    name: "Enterprise",
    desc: "Soluție completă fără limite",
    price: 199,
    color: "#F97316",
    popular: false,
    limits: { sites: "Nelimitat", articles: "Nelimitat" },
    features: { gsc: true, backlinks: true, woocommerce: true, socialMedia: true, auditSeo: true },
    reports: "Complet + Export",
    support: "Dedicat + Training",
  },
];

const comparisonRows = [
  { label: "Site-uri", icon: null, key: "sites" },
  { label: "Articole/lună", icon: null, key: "articles" },
  { label: "Google Search Console", icon: null, key: "gsc" },
  { label: "Manager Backlinks", icon: null, key: "backlinks" },
  { label: "Rapoarte Performanță", icon: null, key: "reports" },
  { label: "Integrare WooCommerce", icon: null, key: "woocommerce" },
  { label: "Social Media Posting", icon: null, key: "socialMedia" },
  { label: "Audit SEO Tehnic + AI", icon: null, key: "auditSeo" },
  { label: "Suport", icon: null, key: "support" },
];

const faqs = [
  { q: "Pot să anulez oricând?", a: "Da, poți anula subscripția oricând din setări. Vei avea acces la funcționalități până la sfârșitul perioadei plătite." },
  { q: "Ce se întâmplă după trial?", a: "După cele 7 zile de trial gratuit, vei fi rugat să alegi un plan. Dacă nu alegi, contul va fi dezactivat temporar." },
  { q: "Pot schimba planul?", a: "Da, poți face upgrade sau downgrade oricând. Diferența de preț se calculează proporțional." },
  { q: "Costurile API sunt incluse?", a: "Nu, costurile API (OpenAI, Resend) sunt separate și plătite direct de tine la furnizori. Estimare: €1-10/lună." },
];

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const getPrice = (price) => annual ? Math.round(price * 0.8) : price;

  const getCellValue = (plan, key) => {
    if (key === "sites") return plan.limits.sites;
    if (key === "articles") return plan.limits.articles;
    if (key === "reports") return plan.reports;
    if (key === "support") return plan.support;
    return plan.features[key];
  };

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
            <Link to="/login" className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors">Autentificare</Link>
            <Link to="/register" className="text-[14px] font-semibold px-6 py-2.5 bg-[#00D26A] text-black rounded-lg hover:bg-[#00E676] transition-all">Începe Gratuit</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-[72px]">
        <div className="py-16 px-6 text-center" style={{ backgroundColor: "#0a0a0b" }}>
          <h1 data-testid="pricing-page-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Prețuri Transparente
          </h1>
          <p className="text-[#a1a1aa] max-w-lg mx-auto text-base mb-8">
            Alege planul potrivit pentru nevoile tale. Toate planurile includ 7 zile trial gratuit.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-white" : "text-[#52525b]"}`}>Lunar</span>
            <button
              data-testid="pricing-toggle"
              onClick={() => setAnnual(!annual)}
              className={`w-12 h-6 rounded-full relative transition-colors ${annual ? "bg-[#00D26A]" : "bg-[#2a2a2d]"}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${annual ? "left-7" : "left-1"}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-white" : "text-[#52525b]"}`}>Anual</span>
            {annual && <span className="text-xs font-bold text-[#00D26A] bg-[rgba(0,210,106,0.12)] px-2 py-0.5 rounded-full">-20%</span>}
          </div>
        </div>

        {/* Plan Cards */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                data-testid={`plan-card-${plan.name.toLowerCase()}`}
                className={`rounded-2xl p-6 border transition-all ${
                  plan.popular
                    ? "border-[#00D26A] bg-[linear-gradient(180deg,rgba(0,210,106,0.06)_0%,#0c0c0e_100%)]"
                    : "border-[#1e1e21] bg-[#0c0c0e]"
                }`}
              >
                {plan.popular && <div className="text-xs font-bold text-[#00D26A] text-center mb-3">Cel Mai Popular</div>}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-[#71717a] mb-4">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-sm text-[#a1a1aa]">&euro;</span>
                    <span className="text-4xl font-extrabold text-white">{getPrice(plan.price)}</span>
                    <span className="text-sm text-[#a1a1aa]">/lună</span>
                  </div>
                </div>

                {/* Quick features */}
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between border-b border-[#1e1e21] pb-2">
                    <span className="text-[#71717a]">Site-uri</span>
                    <span className="font-semibold text-white">{plan.limits.sites}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1e1e21] pb-2">
                    <span className="text-[#71717a]">Articole/lună</span>
                    <span className="font-semibold text-white">{plan.limits.articles}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1e1e21] pb-2">
                    <span className="text-[#71717a]">Google Search Console</span>
                    {plan.features.gsc ? <Check className="w-4 h-4 text-[#00D26A]" /> : <X className="w-4 h-4 text-[#52525b]" />}
                  </div>
                  <div className="flex justify-between border-b border-[#1e1e21] pb-2">
                    <span className="text-[#71717a]">Manager Backlinks</span>
                    {plan.features.backlinks ? <Check className="w-4 h-4 text-[#00D26A]" /> : <X className="w-4 h-4 text-[#52525b]" />}
                  </div>
                  <div className="flex justify-between border-b border-[#1e1e21] pb-2">
                    <span className="text-[#71717a]">WooCommerce</span>
                    {plan.features.woocommerce ? <Check className="w-4 h-4 text-[#00D26A]" /> : <X className="w-4 h-4 text-[#52525b]" />}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Suport</span>
                    <span className="font-semibold text-white text-xs">{plan.support}</span>
                  </div>
                </div>

                <Link
                  to="/register"
                  data-testid={`plan-cta-${plan.name.toLowerCase()}`}
                  className={`w-full flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-[#00D26A] text-black hover:bg-[#00E676]"
                      : "border border-[#2a2a2d] text-white hover:border-[#a1a1aa]"
                  }`}
                >
                  Selectează
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto px-6 pb-16">
          <div className="overflow-x-auto rounded-2xl border border-[#1e1e21]">
            <table data-testid="pricing-comparison-table" className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e1e21]">
                  <th className="text-left p-4 text-[#a1a1aa] font-medium w-[200px]">Funcționalitate</th>
                  {plans.map((p) => (
                    <th key={p.name} className="p-4 text-center text-white font-bold">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.key} className={`border-b border-[#1e1e21] ${i % 2 === 0 ? "bg-[#0a0a0b]" : ""}`}>
                    <td className="p-4 text-[#a1a1aa]">{row.label}</td>
                    {plans.map((plan) => {
                      const val = getCellValue(plan, row.key);
                      return (
                        <td key={plan.name} className="p-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? <Check className="w-4 h-4 text-[#00D26A] mx-auto" /> : <X className="w-4 h-4 text-[#52525b] mx-auto" />
                          ) : (
                            <span className="text-white font-medium text-xs">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-6 pb-24">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-white">Întrebări Frecvente</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-testid={`pricing-faq-${i}`}
                className={`border rounded-xl overflow-hidden transition-colors ${
                  openFaq === i ? "border-[rgba(0,210,106,0.3)] bg-[#0c0c0e]" : "border-[#1e1e21]"
                }`}
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="text-sm font-semibold text-white pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus className="w-4 h-4 text-[#00D26A] flex-shrink-0" /> : <Plus className="w-4 h-4 text-[#52525b] flex-shrink-0" />}
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-4" : "max-h-0"}`}>
                  <p className="text-sm text-[#a1a1aa] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-[#1a1a1d]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D26A] flex items-center justify-center"><Zap className="w-4 h-4 text-black" /></div>
              <span className="text-sm font-bold text-white">SEO Phoenix Martech Assistance</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Termeni și Condiții</Link>
              <Link to="/privacy" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Confidențialitate</Link>
              <Link to="/contact" className="text-xs text-[#52525b] hover:text-[#a1a1aa]">Contact</Link>
            </div>
            <p className="text-xs text-[#52525b]">&copy; {new Date().getFullYear()} SEO Phoenix Martech Assistance.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PricingPage;
