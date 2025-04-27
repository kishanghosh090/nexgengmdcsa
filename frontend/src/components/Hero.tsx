import ColourfulText from "@/components/ui/colourful-text";
import { TextAnimate } from "../components/magicui/text-animate";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

import { BackgroundLines } from "@/components/ui/background-lines";

function Hero() {
  return (
    <BackgroundBeamsWithCollision
      className="h-[90vh] md:h-screen relative w-full overflow-hidden bg-neutral-950 gap-7 flex flex-col items-center justify-center p-5
        "
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
          Create & Celebrate Together
        </TextAnimate>
        <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
          <ColourfulText text="NEXGEN" />
        </h1>
      </BackgroundLines>
    </BackgroundBeamsWithCollision>
  );
}

export default Hero;
