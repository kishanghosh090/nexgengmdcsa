import { TextAnimate } from "../components/magicui/text-animate";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundLines } from "@/components/ui/background-lines";
import { SparklesCore } from "./ui/sparkles"; // React sparkles effect
import  ColourfulText  from "@/components/ui/colourful-text";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-black overflow-hidden pt-8">
    <BackgroundBeamsWithCollision
      className="h-[90vh] md:h-screen relative w-full overflow-hidden bg-neutral-950 gap-7 flex flex-col items-center justify-center p-5"
    >
      <BackgroundLines className="h-[90vh] md:h-screen relative w-full overflow-hidden bg-neutral-950 flex gap-10 md:gap-12 flex-col md:items-center md:justify-center items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />
        
        <TextAnimate
          animation="blurInUp"
          by="character"
          duration={0.3}
          delay={0.5}
          once={false}
          className="text-5xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans mt-20 "
        >
          Let's Code ,
        </TextAnimate>

        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={0.3}
          delay={0.5}
          once={false}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans  "
        >
          Create & Celebrate
        </TextAnimate>
        <TextAnimate
          animation="slideLeft"
          by="character"
          duration={0.3}
          delay={0.5}
          once={false}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans  "
        >
          Together
        </TextAnimate>

      {/* Large Heading */}
      <h1 className="text-white font-extrabold text-[6vw] md:text-[7vw] leading-none text-center w-[90vw] max-w-[1200px] ml-4">
        <ColourfulText
          text="NEXTGEN"

        />
      </h1>

      {/* Gradient line under heading */}
      <div className="relative w-[30vw] max-w-[1200px] h-4 -mt-12 ml-4">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[2px]" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Sparkles below the gradient */}
      <div className="relative w-[90vw] max-w-[1200px] h-40 -mt-10 ml-4">
        <SparklesCore
          minSize={1}
          maxSize={2}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial mask to fade sparkles at the edges */}
        <div className="absolute inset-0 h-full w-full bg-[#0A0A0A] pointer-events-none [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"></div>
      </div>
      </BackgroundLines>
    </BackgroundBeamsWithCollision>
    </div>
  );
}

export default Hero;

