import React from "react";
import StatsSection from "@/components/HomePage/StartStats/StatsSection";
import CategorySection from "@/components/HomePage/Category/CategorySection";
import TypographySection from "@/components/HomePage/Typography/TypographySection";
import ListSection from "@/components/HomePage/ListUMKM/ListSection";
import TestimonialSection from "@/components/HomePage/Testimonial/TestimonialSection";
import MapSection from "@/components/HomePage/Maps/Mapsection";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const Directory = () => {
  return (
    <main className="w-full h-full pt-24">
      <Navbar />
      <HeroSection />
      {/* Category Section */}
      <CategorySection />
      <TypographySection />
      <StatsSection />
      <ListSection />
      <TestimonialSection />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Directory;
