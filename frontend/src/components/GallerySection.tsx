import React from "react";
import GalleryImages from "./GalleryImages";
import { motion } from "framer-motion";
// define gallery items
import sample from "../assets/VideoCapture_20240910-003404.jpg";
type GalleryItem = {
  label: string;
  imageUrl: string;
  alt: string;
  href?: string;
  colSpan?: string;
};

const galleryItems: GalleryItem[] = [
  {
    label: "VR",
    imageUrl:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
    alt: "Photo by Minh Pham",
  },
  {
    label: "Tech",
    imageUrl:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000",
    alt: "Photo by Magicle",
    colSpan: "md:col-span-2",
  },
  {
    label: "Dev",
    imageUrl:
      "https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000",
    alt: "Photo by Martin Sanchez",
    colSpan: "md:col-span-2",
  },
  {
    label: "Retro",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
    alt: "Photo by Lorenzo Herrera",
  },
];
const GallerySection: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const ABACUS = [
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
    sample,
  ];
  return (
    <>
      <>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={(e) => {
              if (e.target == e.currentTarget) {
                setOpen(false);
              }
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4  w-full h-full backdrop-blur-md bg-neutral-950/2 z-50 overflow-y-auto p-2 md:10"
          >
            {" "}
            <GalleryImages ABACUS={ABACUS} />
            <span
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
            >
              close
            </span>
          </motion.div>
        )}
        <div className="bg-gray-900 pt-30 py-2 ">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <h2 className="text-2xl font-bold text-white lg:text-3xl">
                  Gallery
                </h2>
                <p className="hidden max-w-screen-sm text-gray-300 md:block">
                  This is a section of some simple filler text, also known as
                  placeholder text. It shares some characteristics of a real
                  written text.
                </p>
              </div>
              <a
                href="#"
                className="inline-block rounded-lg border bg-gray-700 border-none px-4 py-2 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </a>
            </div>
            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {galleryItems.map((item, idx) => (
                <a
                  key={idx}
                  onClick={() => setOpen(true)}
                  className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${
                    item.colSpan || ""
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    loading="lazy"
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                  <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default GallerySection;
