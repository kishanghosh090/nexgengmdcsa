"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const paginate = (direction: number) => {
    setActive(
      (prev) => (prev + direction + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => paginate(1), 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-20 md:max-w-4xl md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="relative h-80 w-full overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={testimonials[active].src}
              src={testimonials[active].src}
              alt={testimonials[active].name}
              className="absolute h-full w-full object-cover rounded-3xl"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, { offset, velocity }) => {
                if (offset.x > 100 || velocity.x > 500) {
                  paginate(-1);
                } else if (offset.x < -100 || velocity.x < -500) {
                  paginate(1);
                }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{testimonials[active].name}</h3>
          <p className="text-sm text-gray-500">
            {testimonials[active].designation}
          </p>
          <p className="mt-4 text-lg text-gray-700">
            {testimonials[active].quote}
          </p>
        </div>
      </div>
    </div>
  );
};
