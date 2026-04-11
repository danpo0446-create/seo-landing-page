import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 data-testid="contact-title" className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">Contact</h1>
          <p className="text-[#a1a1aa] text-base max-w-lg mx-auto">
            Ai o întrebare? Suntem aici să te ajutăm. Completează formularul sau contactează-ne direct.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12">
          {/* Contact Form */}
          <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Nume complet</label>
                <input
                  data-testid="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                  placeholder="Numele tău"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Email</label>
                <input
                  data-testid="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                  placeholder="email@exemplu.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Subiect</label>
              <input
                data-testid="contact-subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                placeholder="Despre ce este vorba?"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Mesaj</label>
              <textarea
                data-testid="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors resize-none"
                placeholder="Scrie mesajul tău aici..."
              />
            </div>

            <button
              data-testid="contact-submit"
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#00D26A] text-black font-semibold text-sm rounded-xl hover:bg-[#00E676] transition-all hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Mesaj trimis!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Trimite mesajul
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 md:w-64">
            <div className="p-5 rounded-xl bg-[#0c0c0e] border border-[#1e1e21]">
              <Mail className="w-5 h-5 text-[#00D26A] mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">Email</h3>
              <a href="mailto:support@seamanshelp.com" className="text-xs text-[#a1a1aa] hover:text-[#00D26A] transition-colors">
                support@seamanshelp.com
              </a>
            </div>
            <div className="p-5 rounded-xl bg-[#0c0c0e] border border-[#1e1e21]">
              <MapPin className="w-5 h-5 text-[#00D26A] mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">Locație</h3>
              <p className="text-xs text-[#a1a1aa]">România</p>
            </div>
            <div className="p-5 rounded-xl bg-[#0c0c0e] border border-[#1e1e21]">
              <Clock className="w-5 h-5 text-[#00D26A] mb-3" />
              <h3 className="text-sm font-bold text-white mb-1">Program suport</h3>
              <p className="text-xs text-[#a1a1aa]">Luni - Vineri: 9:00 - 18:00<br />Răspuns în max. 24h</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
