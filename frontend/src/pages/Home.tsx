import CurrentEvents from "@/components/CurrentEvents";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TeamMembers from "@/components/TeamMembers";
export default function Home() {
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
