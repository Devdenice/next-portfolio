"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import TechStacks from "@/components/TechStacks";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <main className="relative flex min-h-screen flex-col bg-base-100 overflow-clip">
      <Navbar />
      <div className="relative z-0 container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <TechStacks />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <ScrollTop />
      <Footer />
    </main>
  );
}
// bg-[#121212]
