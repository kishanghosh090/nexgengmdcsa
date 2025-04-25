"use client";

import { BackgroundGradient } from "../components/ui/background-gradient";

import { SparklesText } from "@/components/magicui/sparkles-text";

export default function CurrentEvents() {
  let currentEvents = [1, 2, 3];
  return (
    <div className="flex justify-center flex-col items-center gap-10 space-y-4 mt-20">
      <h1>
        <SparklesText className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">Current Events</SparklesText>
      </h1>
      <div className="flex justify-center items-center gap-20 space-y-4 mt-20 flex-wrap">
        {currentEvents.map(() => (
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 hover:transform hover:scale-105 transition-all">
            <img
              src={`/jordans.webp`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
              Air Jordan 4 Retro Reimagined
            </p>

            <p className="text-sm text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
