import AppCTA from "@/components/home-page/app-cta";
import Hero from "@/components/home-page/hero-section";
import GridSection from "@/components/home-page/grid-section";
import ServiceCards from "@/components/home-page/service-cards";
import Image from "next/image";
import VideoSection from "@/components/home-page/video-section";
import Navbar from "@/components/common-components/Navbar";

export default function Home() {
  return (
    <main className="">
      {/* <Navbar/> */}
        <Hero/>
        <ServiceCards/>
        <AppCTA/>
        <GridSection />
        <VideoSection/>
    </main>
  );
}
