"use client";

import Carousel from "@/components/ui/carousel";

import openMic from "../assets/OPEN MIC.jpg";
import algoArena from "../assets/AlgoArena.jpg";

import debateComp from "../assets/Debate Comp.jpg";

export default function UpcomingEvents() {
  const slideData = [
    {
      title: "Open Mic",
      button: "comming soon...",
      src: openMic,
      data: "🎤 Unmute Yourself! Step into the spotlight and let your talent speak. Poetry, music, stand-up, storytelling — your stage, your vibe. Open Mic Night – Where every voice matters.",
    },
    {
      title: "Algo Arena",
      button: "comming soon...",
      src: algoArena,
      data: "In addition to gathering events from different platforms, Coolture, which is currently in its second version of the platform, is also a place where exclusive opinion articles can be found.",
    },
    {
      title: "Debate Competition",
      button: "comming soon...",
      src: debateComp,
      data: "Complex integration between WordPress and PHC, with real-time communications of schedules for scheduling appointments, WooCommerce invoices and viewing various information in each customer's account",
    },
  ];
  return (
    <div className=" overflow-hidden w-full h-full py-20">
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative  font-sans mb-7">
        Upcoming Events
      </h1>

      <Carousel slides={slideData} />
    </div>
  );
}
