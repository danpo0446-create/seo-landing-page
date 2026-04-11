import { useState } from "react";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Funcționalitatea de autentificare va fi disponibilă în curând!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 notranslate" style={{ backgroundColor: "#050505" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#00D26A] flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-2xl font-bold text-white">SEO Automation</span>
          </Link>
          <h1 data-testid="login-title" className="text-2xl font-extrabold text-white mb-2">Autentificare</h1>
          <p className="text-sm text-[#a1a1aa]">Bine ai revenit! Conectează-te la contul tău.</p>
        </div>

        <form data-testid="login-form" onSubmit={handleSubmit} className="space-y-4 notranslate">
          <div>
            <label className="block text-xs font-semibold text-[#a1a1aa] mb-2">Email</label>
            <input
              data-testid="login-email"
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
                data-testid="login-password"
                type={showPass ? "text" : "password"}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0c0c0e] border border-[#1e1e21] text-white text-sm placeholder-[#52525b] focus:border-[#00D26A] focus:outline-none transition-colors pr-12"
                placeholder="Parola ta"
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
            data-testid="login-submit"
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-[#00D26A] text-black font-semibold text-sm rounded-xl hover:bg-[#00E676] transition-all mt-6"
          >
            Autentifică-te <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-[#52525b] mt-6">
          Nu ai cont?{" "}
          <Link to="/register" data-testid="login-register-link" className="text-[#00D26A] hover:underline font-medium">
            Înregistrează-te gratuit
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
