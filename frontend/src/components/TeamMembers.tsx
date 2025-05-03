import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function TeamMembers() {
  const testimonials = [
    {
      quote: "President",
      name: "Sanjay Mandal",
      designation: "9647801363",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Secretary",
      name: "Indrajit Mandal",
      designation: "9907302997",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Event Coordinator",
      name: "Hiranmay Das",
      designation: "9593870459",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <div className="pt-28 bg-gradient-to-b from-black to-gray-900">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
          Team Lead
        </h1>
        <AnimatedTestimonials testimonials={testimonials}  />
      </div>
    </>
  );
}
