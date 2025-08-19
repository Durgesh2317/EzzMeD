import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClinicalNetwork from "./components/ClinicalNetwork";
import OurCapabilities from "./components/OurCapabilities";
import AISection from "./components/AISection";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import ContactCTA from "./components/ContactCTA";
import ValuesSection from "./components/ValuesSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClinicalNetwork />
        <OurCapabilities />
        <ValuesSection />
        <BlogSection />
        <CaseStudies />
        <AISection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
