/*import Navbar from "@/components/layout/Navbar";
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
}*/
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BusinessOutcomes from "@/components/home/BusinessOutcomes";
import Industries from "@/components/home/Industries";
import CaseStudies from "@/components/home/CaseStudies";
import Process from "@/components/home/Process";
import CTA from "@/components/home/CTA";



export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
<BusinessOutcomes />
<Industries />
<CaseStudies />

<Process />

<CTA />

      </main>
    </>
  );
}