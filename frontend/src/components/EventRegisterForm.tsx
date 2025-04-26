import { ShineBorder } from "./magicui/shine-border";
import { motion } from "framer-motion";

export function ShineBorderDemo({ setRegisterForm }: any) {
  return (
    <div
      onClick={(e) => {
        if (e.target == e.currentTarget) {
          setRegisterForm(false);
        }
      }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4  w-full h-screen backdrop-blur-md bg-neutral-950/2 z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 0.1 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 bg-[#171717]  text-white p-6 rounded-2xl w-11/12 md:w-1/2"
      >
        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white relative z-2 font-sans">
          Let's Particpate
        </h1>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-white">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className=" w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="name@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="department">Department</label>
                <input
                  id="department"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="department">Department</label>
                <input
                  id="department"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="studentId">Student ID</label>
                <input
                  id="studentId"
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 p-2 mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default ShineBorderDemo;
