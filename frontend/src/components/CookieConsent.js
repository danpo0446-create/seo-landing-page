import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      data-testid="cookie-consent"
      className="fixed bottom-4 left-4 z-[9999] w-[320px] p-5 rounded-xl shadow-2xl"
      style={{
        backgroundColor: "rgba(30, 30, 30, 0.95)",
        backdropFilter: "blur(12px)",
        border: "1px solid #2a2a2d",
      }}
    >
      <p className="text-[13px] text-[#c4c4c4] leading-relaxed mb-4">
        We use cookies to enhance your browsing experience, provide personalized content,
        and improve site performance. For the best experience, please keep your browser up
        to date —{" "}
        <a
          href="https://browsehappy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00D26A] underline hover:text-[#00E676]"
        >
          Performance Browser Fix
        </a>
        .
      </p>
      <div className="flex items-center gap-3">
        <button
          data-testid="cookie-accept"
          onClick={() => handleChoice("accepted")}
          className="px-4 py-2 text-xs font-bold border border-[#c4c4c4] text-[#c4c4c4] rounded hover:bg-white/10 transition-colors tracking-wider"
        >
          ACCEPT
        </button>
        <button
          data-testid="cookie-reject"
          onClick={() => handleChoice("rejected")}
          className="px-4 py-2 text-xs font-bold border border-[#c4c4c4] text-[#c4c4c4] rounded hover:bg-white/10 transition-colors tracking-wider"
        >
          REJECT
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
