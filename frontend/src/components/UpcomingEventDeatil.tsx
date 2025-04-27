import { WarpBackground } from "@/components/magicui/warp-background";
import { motion } from "framer-motion";
export default function UpcomingEventDetail({ data, setDataOpen }: any) {
  console.log(data);

  return (
    <div className="z-50 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 bg-[#171717]  text-white p-6 w-full rounded-2xl md:w-1/2"
      >
        <span
          onClick={(e) => {
            if (e.target != e.currentTarget) {
              setDataOpen(false);
            }
          }}
          aria-hidden="true"
          className="cursor-pointer "
        >
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <WarpBackground className="flex items-center justify-center z-auto ">
          <div className="w-80 bg-neutral-800 p-4 m-5">{data}</div>
        </WarpBackground>
      </motion.div>
    </div>
  );
}
