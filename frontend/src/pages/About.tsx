import DetailsNexGen from "@/components/DetailsNexGen";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Clubs from "@/components/Clubs";
function About() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto"
    });
  }, [pathname]);
  return (
    <div className=" h-full  relative w-full overflow-hidden bg-neutral-950 ">
      <Navbar />
      <DetailsNexGen />
      <Clubs />
    </div>
  );
}

export default About;
