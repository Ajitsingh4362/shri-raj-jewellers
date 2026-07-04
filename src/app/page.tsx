import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Collections from "@/components/Collections";
import Offers from "@/components/Offers";
import About from "@/components/About";
import InstagramCTA from "@/components/InstagramCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Collections />
        <Offers />
        <About />
        <InstagramCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
