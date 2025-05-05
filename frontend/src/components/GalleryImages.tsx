import React from "react";
import { motion } from "framer-motion";
interface Props {
  ABACUS: Array<string>;
}
function GalleryImages({ ABACUS: ABACUS }: Props) {
  const [open, setOpen] = React.useState(false);
  const [whichImage, setWhichImage] = React.useState("");
  return (
    <>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={(e) => {
            if (e.target == e.currentTarget) {
              setOpen(false);
            }
          }}
          className="fixed bg-fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 justify-center items-center  w-full h-screen backdrop-blur-2xl bg-neutral-950/2 z-50 px-3"
        >
          {" "}
          <img
            src={whichImage}
            alt=""
            height="30%"
            className="rounded-2xl border-2  border-zinc-100"
          />
          <span
            onClick={() => setOpen(false)}
            className="absolute top-5 right-6 text-xl bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          >
            close
          </span>
        </motion.div>
      )}
      <div className="h-full flex gap-2 justify-center items-center flex-wrap">
        <div className="flex gap-2 justify-center items-center flex-wrap overflow-y-auto">
          {ABACUS.map((item: any, idx: any) => (
            <img
              onClick={() => {
                setOpen(true);
                setWhichImage(item);
              }}
              className="h-30 md:h-40 rounded-2xl border-2 border-zinc-100 cursor-pointer"
              key={idx}
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GalleryImages;
