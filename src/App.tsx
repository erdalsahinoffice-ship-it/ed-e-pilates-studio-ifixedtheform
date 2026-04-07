import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StudiosSection from "./components/StudiosSection";
import ClassesSection from "./components/ClassesSection";
import GaleriaSection from "./components/GaleriaSection";
import TrainersSection from "./components/TrainersSection";
import TestimonialsSection from "./components/TestimonialsSection";
import InstagramSection from "./components/InstagramSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StudiosSection />
        <ClassesSection />
        <GaleriaSection />
        <TrainersSection />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
