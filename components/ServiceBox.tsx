"use client";
import { motion } from "framer-motion";

type Props = {
  service: Services;
};

function ServiceBox({ service }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, scale: 0 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 50 }}
      className="py-20 flex mt-5 items-center pl-5 md:pl-24 w-full rounded-2xl bg-gradient-to-t from-[#111] animate-pulse overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.8,
          type: "spring",
          stiffness: 50,
        }}
        className=" md:text-2xl text-lg font-medium text-[#111] flex items-center justify-center space-x-2"
      >
        <span className="pb-[0.15rem] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M12 2v2" />
            <path d="M12 22v-2" />
            <path d="m17 20.66-1-1.73" />
            <path d="M11 10.27 7 3.34" />
            <path d="m20.66 17-1.73-1" />
            <path d="m3.34 7 1.73 1" />
            <path d="M14 12h8" />
            <path d="M2 12h2" />
            <path d="m20.66 7-1.73 1" />
            <path d="m3.34 17 1.73-1" />
            <path d="m17 3.34-1 1.73" />
            <path d="m11 13.73-4 6.93" />
          </svg>
        </span>
        <span className="text-[#ffbf00]">{service?.shortTitle}</span>
      </motion.h1>
    </motion.div>
  );
}

export default ServiceBox;
