"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
  services: Services;
};

function ServiceTypeWrite({ services }: Props) {
  const [write, conut] = useTypewriter({
    words: [` ${services?.title}:`],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <span className="text-base md:text-2xl md:font-extrabold font-bold bg-gradient-to-r from-[#ffbf00] via-gray-700 to-[#ffbf00]  bg-clip-text  text-transparent my-3">
        {write}
        <Cursor cursorColor="#4b5563" />
      </span>
    </>
  );
}

export default ServiceTypeWrite;
