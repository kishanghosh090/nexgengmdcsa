import CurrentEvents from "@/components/CurrentEvents";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TeamMembers from "@/components/TeamMembers";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();
        useEffect(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // or "auto"
          });
        }, [pathname]);
  return (
    <>
      <div className="bg-neutral-950">
        <Navbar />
        <Hero />
        <CurrentEvents />
        <TeamMembers />
      </div>
    </>
  );
}
