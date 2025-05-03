// import React from "react";
// import {
//   TextRevealCard,

// } from "./ui/text-reveal-card";
// import { TextGenerateEffect } from "./ui/text-generate-effect";

// const DetailsNexGen = () => {
//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center">
//       <TextRevealCard
//         text="What is NexGen ?"
//         revealText="What is NexGen ?"
//         className=" flex flex-col items-center justify-center"
//       ></TextRevealCard>
//       <TextGenerateEffect
//         className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white relative z-2 font-sans w-[80%] md:w-1/2"
//         words="The NexGen, the Premier Celebration of Creativity and Innovation in Computer Science and Application !! Join us for an exhilarating showcase of talent, where competitions in singing, dancing, drawing, coding, and more come together in a celebration of both technology and the arts. Whether you're a tech enthusiast, an aspiring artist, or a music lover, NexGen offers something for everyone.Connect with us to witness the remarkable skills of our participants, enjoy highlights from the event, and be inspired by the powerful fusion of technology and creativity.'Let's code, create, and celebrate together!'"
//       />
//     </div>
//   );
// };

// export default DetailsNexGen;

import { BoxReveal } from "@/components/magicui/box-reveal";
import { TextAnimate } from "@/components/magicui/text-animate";
import TeamMembers from "./TeamMembers";

export default function DetailsNexGen() {
  return (
    <div className="p-4">
      <div className="h-screen flex flex-col items-center justify-center">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] md:text-8xl font-semibold ">
            What is NEXGEN<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            "Let's code, create, and celebrate together!"
            <span className="text-[#5046e6]"> NexGen</span>
          </h2>
        </BoxReveal>
      </div>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <TextAnimate
          animation="fadeIn"
          by="line"
          as="p"
          delay={0.3}
          className="text-2xl md:text-4xl md:w-1/2 gap-3.5"
        >
          {
            "The NexGen, the Premier Celebration of Creativity and Innovation in Computer Science and Application \n\n Join us for an exhilarating showcase of talent,\n\n where competitions in singing, dancing, drawing,coding, and more come together in a celebration of both technology and the arts.\n\n Whether you're a tech enthusiast, an aspiring artist, or a music lover, NexGen offers something for everyone.\n\n Connect with us to witness the remarkable skills of our participants.\n\n enjoy highlights from the event, and be inspired by the powerful fusion of technology and creativity."
          }
        </TextAnimate>
      </div>
      <TeamMembers />
    </div>
  );
}
