import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Funcționalitatea de înregistrare va fi disponibilă în curând!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor: "#050505" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#00D26A] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold text-white">SEO Automation</span>
          </Link>
          <h1 data-testid="register-title" className="text-2xl font-extrabold text-white mb-2">Creează cont gratuit</h1>
          <p className="text-sm text-[#a1a1aa]">7 zile gratuit, fără card de credit</p>
        </div>

        <form data-testid="register-form" onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Nume complet</label>
            <input
              data-testid="register-name"
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
              data-testid="register-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors"
              placeholder="email@exemplu.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Parolă</label>
            <div className="relative">
              <input
                data-testid="register-password"
                type={showPass ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors pr-12"
                placeholder="Minimum 8 caractere"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52525b] hover:text-[#a1a1aa]"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            data-testid="register-submit"
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#00D26A] text-black font-semibold text-sm rounded-xl hover:bg-[#00E676] transition-all mt-6"
          >
            Începe Trial Gratuit <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-[#52525b] mt-6">
          Ai deja cont?{" "}
          <Link to="/login" data-testid="register-login-link" className="text-[#00D26A] hover:underline font-medium">
            Autentifică-te
          </Link>
        </p>

        <p className="text-center text-xs text-[#52525b] mt-4">
          Prin înregistrare, ești de acord cu{" "}
          <Link to="/terms" className="text-[#a1a1aa] hover:underline">Termenii și Condițiile</Link>{" "}
          și{" "}
          <Link to="/privacy" className="text-[#a1a1aa] hover:underline">Politica de Confidențialitate</Link>.
        </p>
      </div>
    </div>
  );
};

export default Register;
