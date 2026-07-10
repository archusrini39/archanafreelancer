import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import TrustedBy from "@/components/sections/TrustedBy";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <TrustedBy />
      <Services />
    </>
  );
}