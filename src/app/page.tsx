import Hero from "@/components/Hero";

import { SparklesCore } from "@/components/ui/sparkles";
import About from '@/components/About'
import Vision from '@/components/Vision'
import Socials from "@/components/Socials";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import FaqSection from "@/components/FaqSection";
import Mission from "@/components/Mission";


export default function Home() {
  return (
    <> 
      <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={13}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Hero />
      <About />
      
      <Vision />
      <Mission />
      <Blog />
      <FaqSection/>
      <Socials/>
      <ContactUs/>
      </div>
    </>
  );
}