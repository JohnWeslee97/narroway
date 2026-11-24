import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-20">
        <main>
          <Hero />
          <About />
          <StatsBand />
          <Services />
          <Process />
          <Contact />
          <Faq />
        </main>
        <Footer />
      </div>
      <RevealObserver />
    </>
  );
}
