import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "ro", label: "RO", full: "Română", flag: "https://flagcdn.com/w40/ro.png" },
  { code: "en", label: "EN", full: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "FR", full: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { code: "de", label: "DE", full: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
  { code: "it", label: "IT", full: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
];

function clearGoogTransCookies() {
  const domains = [
    window.location.hostname,
    "." + window.location.hostname,
    ""
  ];
  // Also try parent domain (e.g. .emergentagent.com)
  const parts = window.location.hostname.split(".");
  if (parts.length > 2) {
    domains.push("." + parts.slice(1).join("."));
  }
  domains.forEach((domain) => {
    const domainStr = domain ? `; domain=${domain}` : "";
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domainStr}`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax${domainStr}`;
  });
}

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(() => {
    const saved = localStorage.getItem("selectedLang");
    if (saved) {
      const found = languages.find((l) => l.code === saved);
      if (found) return found;
    }
    return languages[0]; // RO default
  });
  const ref = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // On mount, if non-RO language was saved, ensure Google Translate is active
  useEffect(() => {
    const saved = localStorage.getItem("selectedLang");
    if (saved && saved !== "ro") {
      const initAndTranslate = () => {
        const combo = document.querySelector(".goog-te-combo");
        if (combo) {
          combo.value = saved;
          combo.dispatchEvent(new Event("change", { bubbles: true }));
        } else if (window.google && window.google.translate) {
          // Reinitialize Google Translate
          new window.google.translate.TranslateElement(
            { pageLanguage: "ro", includedLanguages: "ro,en,fr,de,it", autoDisplay: false },
            "google_translate_element"
          );
          // Wait for combo to appear then set language
          const waitCombo = setInterval(() => {
            const c = document.querySelector(".goog-te-combo");
            if (c) {
              c.value = saved;
              c.dispatchEvent(new Event("change", { bubbles: true }));
              clearInterval(waitCombo);
            }
          }, 300);
          setTimeout(() => clearInterval(waitCombo), 8000);
        }
      };
      // Try after a delay to let Google script load
      setTimeout(initAndTranslate, 1500);
    }
  }, []);

  const switchLanguage = useCallback((lang) => {
    setCurrent(lang);
    setOpen(false);
    localStorage.setItem("selectedLang", lang.code);

    if (lang.code === "ro") {
      // Reset to Romanian - clear everything and reload fresh (GT won't init for RO)
      clearGoogTransCookies();
      localStorage.setItem("selectedLang", "ro");
      setTimeout(() => {
        clearGoogTransCookies();
        window.location.reload();
      }, 100);
      return;
    }

    // Switch to other language
    localStorage.setItem("selectedLang", lang.code);
    
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang.code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Google Translate not initialized yet - init it now
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "ro", includedLanguages: "ro,en,fr,de,it", autoDisplay: false },
          "google_translate_element"
        );
        const waitCombo = setInterval(() => {
          const c = document.querySelector(".goog-te-combo");
          if (c) {
            c.value = lang.code;
            c.dispatchEvent(new Event("change", { bubbles: true }));
            clearInterval(waitCombo);
          }
        }, 300);
        setTimeout(() => clearInterval(waitCombo), 8000);
      } else {
        // Script not loaded - set cookie and reload
        document.cookie = `googtrans=/ro/${lang.code}; path=/`;
        window.location.reload();
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className="fixed bottom-16 right-4 z-[9999]"
      data-testid="language-selector"
    >
      {open && (
        <div
          data-testid="language-dropdown"
          className="mb-2 rounded-xl overflow-hidden shadow-2xl"
          style={{
            backgroundColor: "rgba(30, 30, 30, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid #2a2a2d",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              data-testid={`lang-${lang.code}`}
              onClick={() => switchLanguage(lang)}
              className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors text-left notranslate ${
                current.code === lang.code
                  ? "text-white bg-white/5"
                  : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
              }`}
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-auto rounded-sm" />
              <span>{lang.full}</span>
            </button>
          ))}
        </div>
      )}

      <button
        data-testid="language-toggle"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-2xl transition-all hover:-translate-y-0.5 notranslate"
        style={{
          backgroundColor: "rgba(30, 30, 30, 0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid #2a2a2d",
        }}
      >
        <img src={current.flag} alt={current.label} className="w-5 h-auto rounded-sm" />
        <span className="text-sm font-bold text-white">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#a1a1aa] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
