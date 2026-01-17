"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import TargetAudience from "@/components/sections/TargetAudience";

import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

import DemoForm from "@/components/sections/DemoForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <TargetAudience />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <DemoForm />
      <Footer />
    </main>
  );
}
