import { useInView } from "@/hooks/useInView";

const stats = [
  { value: "10K+", label: "Articole Generate" },
  { value: "500+", label: "Clienți Activi" },
  { value: "150%", label: "Creștere Trafic Mediu" },
  { value: "24/7", label: "Automatizare Non-Stop" },
];

const Stats = () => {
  const [ref, isInView] = useInView();

  return (
    <section data-testid="stats-section" className="py-14 px-6 border-y border-[#1a1a1d]" style={{ backgroundColor: "#0a0a0a" }}>
      <div ref={ref} className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-testid={`stat-${i}`}
            className={`text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00D26A] mb-2">{s.value}</div>
            <div className="text-sm text-[#a1a1aa] font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
