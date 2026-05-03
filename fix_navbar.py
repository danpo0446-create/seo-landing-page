content = '''import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Functionalitati", href: "#features" },
  { label: "Preturi", href: "#pricing" },
  { label: "Testimoniale", href: "#testimonials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-10 h-[64px] flex items-center justify-between">
        <Link
          to="/"
          data-testid="logo-link"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00D26A] flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap className="w-4 h-4 text-black" />
          </div>
          <span className="text-base font-bold tracking-tight text-white hidden sm:inline">SEO Automation</span>
          <span className="text-base font-bold tracking-tight text-white sm:hidden">SEO Auto</span>
        </Link>

        {isHome && (
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((l) => (
              
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
        )}

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            data-testid="nav-auth-btn"
            className="text-[15px] font-medium text-[#a1a1aa] hover:text-white transition-colors"
          >
            Autentificare
          </Link>
          <Link
            to="/register"
            data-testid="nav-cta-btn"
            className="text-[14px] font-semibold px-6 py-2.5 bg-[#00D26A] text-black rounded-lg hover:bg-[#00E676] transition-all hover:-translate-y-0.5"
          >
            Incepe Gratuit
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Link
            to="/register"
            onClick={() => setMobileOpen(false)}
            className="text-[13px] font-semibold px-3 py-2 bg-[#00D26A] text-black rounded-lg whitespace-nowrap"
          >
            Incepe Gratuit
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-t border-[#1e1e21] px-6 py-6 space-y-1"
        >
          {isHome && navLinks.map((l) => (
            
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="block text-[#a1a1aa] hover:text-white py-2.5 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block text-[#a1a1aa] hover:text-white py-2.5 text-sm font-medium transition-colors"
          >
            Autentificare
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;'''

with open('frontend/src/components/landing/Navbar.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('OK')