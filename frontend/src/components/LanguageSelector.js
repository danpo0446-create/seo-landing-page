import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "ro", label: "RO", flag: "🇷🇴" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 86400000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = useCallback((lang) => {
    setCurrent(lang);
    setOpen(false);

    if (lang.code === "ro") {
      // Reset to original Romanian
      setCookie("googtrans", "", 0);
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
      // Try to reset via select
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = "ro";
        combo.dispatchEvent(new Event("change", { bubbles: true }));
      } else {
        window.location.reload();
      }
      return;
    }

    // Set Google Translate cookie
    const transValue = `/ro/${lang.code}`;
    setCookie("googtrans", transValue, 365);
    document.cookie = `googtrans=${transValue};path=/;domain=.${window.location.hostname}`;

    // Try to use the select element
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = lang.code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Fallback: reload page so Google Translate picks up the cookie
      window.location.reload();
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
              className={`w-full flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors text-left ${
                current.code === lang.code
                  ? "text-white bg-white/5"
                  : "text-[#a1a1aa] hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-xl leading-none">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}

      <button
        data-testid="language-toggle"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl shadow-2xl transition-all hover:-translate-y-0.5"
        style={{
          backgroundColor: "rgba(30, 30, 30, 0.95)",
          backdropFilter: "blur(12px)",
          border: "1px solid #2a2a2d",
        }}
      >
        <span className="text-xl leading-none">{current.flag}</span>
        <span className="text-sm font-bold text-white">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#a1a1aa] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
};

export default LanguageSelector;
