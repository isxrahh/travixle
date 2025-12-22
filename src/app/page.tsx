"use client";

import HeroCarousel from "@/components/HeroCarousel";
import MiniForm from "@/components/MiniForm";
import OffersCard from "@/components/OffersCard";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import TripPlanner from "@/components/TripPlanner";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Navbar />
      <MiniForm />

      <div className="h-32" />

      <OffersCard />
      <MainSection />
      <TripPlanner/>
    </>
  );
}
