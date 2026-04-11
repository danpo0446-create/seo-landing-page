import { useInView } from "@/hooks/useInView";

const integrations = [
  "WordPress",
  "Google Search Console",
  "Google PageSpeed",
  "LinkedIn",
  "Facebook Pages",
  "Pexels",
  "Resend",
  "OpenAI GPT-4",
  "Google Gemini",
];

const Integrations = () => {
  const [ref, isInView] = useInView();

  return (
    <section data-testid="integrations-section" className="py-24 px-6" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-label notranslate">Integrări</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-6 mb-4 tracking-tight text-white">
          Se conecteaza cu
          <br />
          <span className="gradient-text">tool-urile tale preferate</span>
        </h2>
        <p className="text-[#a1a1aa] max-w-xl mx-auto text-base sm:text-lg mb-12">
          Integrari native cu cele mai populare platforme pentru o experienta completa.
        </p>

        <div ref={ref} className="flex flex-wrap items-center justify-center gap-3">
          {integrations.map((name, i) => (
            <span
              key={name}
              data-testid={`integration-${i}`}
              className={`integration-badge ${isInView ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
