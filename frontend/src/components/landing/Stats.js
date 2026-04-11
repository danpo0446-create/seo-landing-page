import { useInView } from "@/hooks/useInView";
import { FileText, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { value: "10K+", label: "Articole Generate", icon: FileText },
  { value: "500+", label: "Clienti Activi", icon: Users },
  { value: "150%", label: "Crestere Trafic Mediu", icon: TrendingUp },
  { value: "24/7", label: "Automatizare Non-Stop", icon: Clock },
];

const Stats = () => {
  const [ref, isInView] = useInView();

  return (
    <section data-testid="stats-section" className="py-16 px-6 border-y border-[#1e1e21]">
      <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            data-testid={`stat-${i}`}
            className={`text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(0,210,106,0.1)] mb-3">
              <s.icon className="w-5 h-5 text-[#00D26A]" />
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#00D26A] mb-1">{s.value}</div>
            <div className="text-sm text-[#a1a1aa] font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
