import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const links = [
  { label: "Funcționalități", href: "#features" },
  { label: "Prețuri", href: "#pricing" },
  { label: "Testimoniale", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-[#1e1e21]"
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#"
          data-testid="logo-link"
          className="flex items-center gap-2.5 group"
          onClick={(e) => scrollTo(e, "#")}
        >
          <div className="w-9 h-9 rounded-lg bg-[#00D26A] flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SEO Automation</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.slice(1)}`}
              onClick={(e) => scrollTo(e, l.href)}
              className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#pricing"
            data-testid="nav-auth-btn"
            onClick={(e) => scrollTo(e, "#pricing")}
            className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors"
          >
            Autentificare
          </a>
          <a
            href="#pricing"
            data-testid="nav-cta-btn"
            onClick={(e) => scrollTo(e, "#pricing")}
            className="text-[14px] font-semibold px-6 py-2.5 bg-[#00D26A] text-black rounded-lg hover:bg-[#00E676] transition-all hover:-translate-y-0.5"
          >
            Începe Gratuit
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-1"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-t border-[#1e1e21] px-6 py-6 space-y-1"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="block text-[#a1a1aa] hover:text-white py-2.5 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => scrollTo(e, "#pricing")}
            className="block text-[#a1a1aa] hover:text-white py-2.5 text-sm font-medium transition-colors"
          >
            Autentificare
          </a>
          <div className="pt-4">
            <a
              href="#pricing"
              onClick={(e) => scrollTo(e, "#pricing")}
              className="block w-full text-center px-5 py-2.5 bg-[#00D26A] text-black font-semibold rounded-lg text-sm"
            >
              Începe Gratuit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
