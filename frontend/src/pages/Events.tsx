import CurrentEvents from "@/components/CurrentEvents";
import Navbar from "@/components/Navbar";
import UpcomingEvents from "@/components/UpcomingEvents";

function Events() {

  return (
    <div className=" h-full  relative w-full overflow-hidden bg-neutral-950 pt-20">
      <Navbar />
     
      <CurrentEvents />
      <UpcomingEvents />
    </div>
  );
}

export default Events;
