"use client";
import React from "react";
import EventRegisterForm from "./EventRegisterForm";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import chess_tournament from "../assets/Chess_Tournament.jpg";
import code_connect from "../assets/CODE-COONECT.png";
import quiz from "../assets/QUIZ TIME.jpg";

export default function CurrentEvents() {
  let currentEvents = [
    {
      title:
        "Chess Tournament Test your wits in the ultimate chess face-off! Every move makes a master. ♟️",
      src: chess_tournament,
    },
    {
      title:
        "Code Connect Code. Create. Conquer. Join the Hackathon! Where ideas turn into innovation. 💡💻",
      src: code_connect,
    },
    {
      title:
        "Quiz Tournament Quiz Time! 🤓 Common Sense with Knowledge Think fast, answer faster!",
      src: quiz,
    },
  ];

  const [RegisterForm, setRegisterForm] = React.useState(false);

  const openResgisterForm = () => {
    setRegisterForm(!RegisterForm);
  };
  return (
    <div className="flex justify-center flex-col items-center gap-10 space-y-4 mt-20 p-4 border-b border-zinc-800 pb-10">
      {RegisterForm && <EventRegisterForm setRegisterForm={setRegisterForm} />}
      <h1>
        <SparklesText className="text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
          Current Events
        </SparklesText>
      </h1>
      <div className="flex justify-center items-center gap-20 space-y-4 mt-20 flex-wrap">
        {currentEvents.map((event) => (
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 hover:transform hover:scale-105 hover:shadow-2xl  transition-all">
            <div className="w-full flex justify-center">
              <img
                src={event.src}
                alt=""
                height="200"
                width="250"
                className="object-contain text-center rounded-2xl"
              />
            </div>
            <p className="text-sm text-neutral-400 m-2">{event.title}</p>

            <ShimmerButton
              onClick={openResgisterForm}
              className="shadow-2xl mt-2"
            >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Register Now
              </span>
            </ShimmerButton>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
