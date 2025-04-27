import CurrentEvents from "@/components/CurrentEvents";
import Navbar from "@/components/Navbar";

function Events() {
  return (
    <div className=" h-full md:h-screen relative w-full overflow-hidden bg-neutral-950 ">
      <Navbar />
      <CurrentEvents />
    </div>
  );
}

export default Events;
