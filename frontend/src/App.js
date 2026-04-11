import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Transparency from "@/components/landing/Transparency";
import Benefits from "@/components/landing/Benefits";
import Integrations from "@/components/landing/Integrations";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Contact from "@/pages/Contact";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import SetupGuide from "@/pages/SetupGuide";

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#050505" }}>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Transparency />
      <HowItWorks />
      <Benefits />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ghid-configurare" element={<SetupGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
