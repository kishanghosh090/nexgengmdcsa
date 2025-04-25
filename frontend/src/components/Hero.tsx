import { Boxes } from "../components/ui/background-boxes";
import { Meteors } from "../components/magicui/meteors";
import ColourfulText from "@/components/ui/colourful-text";
import { TextAnimate } from "../components/magicui/text-animate";
function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-neutral-950 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-neutral-950 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <Meteors number={30} />
      <TextAnimate
        animation="blurInUp"
        by="character"
        duration={0.3}
        delay={0.5}
        once={false}
        className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans"
      >
        Let's Code ,Create & Celebrate Together
      </TextAnimate>
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        <ColourfulText text="NEXGEN" />
      </h1>
    </div>
  );
}

export default Hero;
