import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TrustedBySection from "./components/TrustedBySection";
import UseCasesSection from "./components/UseCasesSection";
import IntegrationsSection from "./components/HowItWorks";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <UseCasesSection />
        <IntegrationsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
