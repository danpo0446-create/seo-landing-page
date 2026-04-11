import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PageHeader = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a] border-b border-[#1e1e21]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="w-9 h-9 rounded-lg bg-[#00D26A] flex items-center justify-center transition-transform group-hover:scale-110">
          <Zap className="w-5 h-5 text-black" />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">SEO Automation</span>
      </Link>
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Înapoi la pagina principală
      </Link>
    </div>
  </nav>
);

const PageFooter = () => (
  <footer className="py-8 px-6 border-t border-[#1a1a1d]" style={{ backgroundColor: "#050505" }}>
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link to="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#00D26A] flex items-center justify-center">
          <Zap className="w-4 h-4 text-black" />
        </div>
        <span className="text-sm font-bold text-white leading-tight">
          SEO Phoenix Martech<br />Assistance
        </span>
      </Link>
      <div className="flex items-center gap-6">
        <Link to="/terms" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">Termeni și Condiții</Link>
        <Link to="/privacy" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">Confidențialitate</Link>
        <Link to="/contact" className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors">Contact</Link>
      </div>
      <p className="text-xs text-[#52525b]">
        &copy; {new Date().getFullYear()} SEO Phoenix Martech Assistance. Toate drepturile rezervate.
      </p>
    </div>
  </footer>
);

const PageLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#050505", color: "#f4f4f5" }}>
    <PageHeader />
    <main className="flex-1 pt-[72px]">
      {children}
    </main>
    <PageFooter />
  </div>
);

export default PageLayout;
