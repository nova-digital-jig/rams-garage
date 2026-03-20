import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencyBanner from "@/components/EmergencyBanner";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EmergencyBanner />
        <Services />
        <WhyChooseUs />
        <About />
        <Gallery />
        <Reviews />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
