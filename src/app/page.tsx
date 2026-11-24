import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-20">
        <main>
          <Hero />
          <StatsBand />
          <Services />
          <Process />
          <Testimonials />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
      <RevealObserver />
    </>
  );
}
