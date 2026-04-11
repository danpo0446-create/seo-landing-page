import { ArrowRight } from "lucide-react";

const Transparency = () => {
  return (
    <section data-testid="transparency-section" className="py-20 px-6" style={{ backgroundColor: "#0a0a0b" }}>
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-[#1e1e21]" style={{ background: "linear-gradient(135deg, #0f1a14 0%, #0c0c0e 50%, #111113 100%)" }}>
          <div className="grid md:grid-cols-[1fr_auto] gap-0">
            {/* Left content */}
            <div className="p-8 md:p-10">
              <span className="inline-block px-3 py-1 rounded-full bg-[rgba(0,210,106,0.12)] text-[#00D26A] text-xs font-semibold border border-[rgba(0,210,106,0.2)] mb-5">
                Transparenta Totala
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Folosesti propriile tale chei API
              </h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                Platesti direct la OpenAI, Resend, etc. pentru ce consumi. Fara comisioane ascunse, control total asupra costurilor.{" "}
                <strong className="text-white">Costuri extra estimate: &euro;1-10/luna.</strong>
              </p>
              <a
                href="#"
                data-testid="transparency-guide-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#00D26A] text-[#00D26A] text-sm font-semibold hover:bg-[rgba(0,210,106,0.08)] transition-colors"
              >
                Vezi Ghidul Complet <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right card */}
            <div className="flex items-center p-8 md:p-10 md:pl-0">
              <div className="w-full md:w-48 rounded-xl bg-[#1e1e21] border border-[#2a2a2d] p-6 text-center">
                <p className="text-xs text-[#a1a1aa] mb-2">Nu vrei sa configurezi?</p>
                <div className="text-3xl font-extrabold text-white mb-1">&euro;79</div>
                <p className="text-xs text-[#a1a1aa] mb-4">Setup Complet de la noi</p>
                <a
                  href="#"
                  data-testid="transparency-setup-btn"
                  className="inline-block w-full px-4 py-2 rounded-lg bg-[#00D26A] text-black text-xs font-semibold hover:bg-[#00E676] transition-colors"
                >
                  Afla mai multe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparency;
