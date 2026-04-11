import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await axios.post(`${BACKEND_URL}/api/contact`, form);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      window.location.href = `mailto:martechassistance@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`De la: ${form.name} (${form.email})\n\n${form.message}`)}`;
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h1 data-testid="contact-title" className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">Contacteaza-ne</h1>
          <p className="text-[#a1a1aa] text-base">Ai intrebari? Suntem aici sa te ajutam.</p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-5">
            <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00D26A]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Email</h3>
                  <a href="mailto:martechassistance@gmail.com" className="text-sm text-[#a1a1aa] hover:text-[#00D26A] transition-colors">
                    martechassistance@gmail.com
                  </a>
                  <p className="text-xs text-[#52525b] mt-1">Raspundem in 24h</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00D26A]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Telefon</h3>
                  <a href="tel:+40721578660" className="text-sm text-[#a1a1aa] hover:text-[#00D26A] transition-colors">
                    +40 721 578 660
                  </a>
                  <p className="text-xs text-[#52525b] mt-1">Luni - Vineri, 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,210,106,0.12)] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#00D26A]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Adresa</h3>
                  <p className="text-sm text-[#a1a1aa]">Constanta, Romania</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0c0e] border border-[#1e1e21]">
            <h2 className="text-lg font-bold text-white mb-6">Trimite un mesaj</h2>
            <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Nume</label>
                  <input
                    data-testid="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                    placeholder="Numele tau"
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
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                    placeholder="email@exemplu.ro"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
                  placeholder="Despre ce e vorba?"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors resize-none"
                  placeholder="Scrie mesajul tau aici..."
                />
              </div>
              <button
                data-testid="contact-submit"
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00D26A] text-black font-semibold text-sm rounded-xl hover:bg-[#00E676] transition-all disabled:opacity-60"
              >
                {sent ? (
                  <><CheckCircle2 className="w-4 h-4" /> Mesaj trimis!</>
                ) : sending ? (
                  "Se trimite..."
                ) : (
                  <><Send className="w-4 h-4" /> Trimite Mesajul</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
