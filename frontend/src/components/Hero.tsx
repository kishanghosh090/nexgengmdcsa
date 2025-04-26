import { Meteors } from "../components/magicui/meteors";
import ColourfulText from "@/components/ui/colourful-text";
import { TextAnimate } from "../components/magicui/text-animate";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Hero() {
  return (
    <BackgroundBeamsWithCollision
      className="h-screen relative w-full overflow-hidden bg-neutral-950 gap-7 flex flex-col items-center justify-center p-10
    "
    >
      <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

      <Meteors number={30} />
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={0.3}
        delay={0.5}
        once={false}
        className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans mt-20 "
      >
        Let's Code ,
      </TextAnimate>

      <TextAnimate
        animation="slideLeft"
        by="character"
        duration={0.3}
        delay={0.5}
        once={false}
        className="text-3xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans  "
      >
        Create & Celebrate Together
      </TextAnimate>
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        <ColourfulText text="NEXGEN" />
      </h1>
    </BackgroundBeamsWithCollision>
  );
}

export default Hero;
