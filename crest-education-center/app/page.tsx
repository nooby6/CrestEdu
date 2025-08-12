import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Fees } from "../components/Fees";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";
import { Toaster } from "../components/ui/sonner";
import "../app/globals.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Fees />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </ThemeProvider>
  );
}