import CurrentEvents from "@/components/CurrentEvents";
import Navbar from "@/components/Navbar";
import UpcomingEvents from "@/components/UpcomingEvents";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
function Events() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // or "auto"
    });
  }, [pathname]);

  return (
    <div className=" h-full  relative w-full overflow-hidden bg-neutral-950 bg-gradient-to-b from-black to-gray-900">
      <Navbar />

      <CurrentEvents />
      <UpcomingEvents />
      <Footer/>
    </div>
  );
}

export default Events;
