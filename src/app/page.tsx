import Hero from "@/components/Hero";

import { SparklesCore } from "@/components/ui/sparkles";
import About from '@/components/About'

import Socials from "@/components/Socials";
import Blog from "@/components/Events";
import FaqSection from "@/components/FaqSection";



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
      
 
      <Blog />
      <FaqSection/>
      <Socials/>
  
      
  
      </div>
    </>
  );
}