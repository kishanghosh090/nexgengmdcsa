import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import sanjay from "../assets/Sanjay.png";
import indrajit from "../assets/INDRAJIT SECRETARY.png";
import hiranmay from "../assets/HIRANMAY DAS.png";

export default function TeamMembers() {
  const testimonials = [
    {
      quote: "President",
      name: "Sanjay Mandal",
      designation: "9647801363",
      src: `${sanjay}`,
    },
    {
      quote: "Secretary",
      name: "Indrajit Mandal",
      designation: "9907302997",
      src: `${indrajit}`,
    },
    {
      quote: "Event Coordinator",
      name: "Hiranmay Das",
      designation: "9593870459",
      src: `${hiranmay}`,
    },
  ];
  return (
    <>
      <div className="pt-28 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
          Team Lead
        </h1>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </>
  );
}
