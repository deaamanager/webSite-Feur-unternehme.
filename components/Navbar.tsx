"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import urlFor from "@/lib/urlFor";

type Props = {
  firmaInfo: FirmaInfo[];
};
function Navbar({ firmaInfo }: Props) {
  const [navbar, setNavbar] = useState(false);
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className="fixed w-full left-0 right-0 z-50 overflow-x-hidden ">
      <nav
        className={` w-full ${
          show && "bg-[rgba(0,0,0,0.7)] rounded-b-2xl  shadow"
        }  `}
      >
        <div className=" justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            {firmaInfo.map((firmaInfo) => (
              <div
                key={firmaInfo._id}
                className="flex items-center justify-between py-3 md:py-5 md:block"
              >
                <Link href="/" className="flex items-start flex-col gapy-y-2">
                  <motion.img
                    initial={{ opacity: 0, x: -90 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 50,
                    }}
                    src={urlFor(firmaInfo?.logo).url()}
                    className="h-16 transition-transform duration-300 ease-out "
                    alt="SYR Services GmbH Logo"
                  />
                </Link>
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.5 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className="md:hidden pr-8"
                >
                  <button
                    className="px-3 py-2  
            bg-gray-900  text-[#ffbf00] flex items-center rounded-full text-center
            animate-pulse transition-transform duration-150 ease-out  "
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Bars3Icon className="h-5" />
                    ) : (
                      <Bars3Icon className="h-5" />
                    )}
                  </button>
                </motion.div>
              </div>
            ))}
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-[#ffbf00]/70 bg-[rgba(0,0,0,0.4)] font-bold text-base md:bg-inherit 
        rounded-3xl text-center  py-5
            ${show && "bg-inherit"}`}
              >
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className=""
                >
                  <Link href="/#blog_list">Services</Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.7,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className=""
                >
                  <Link href="/#ueber_uns">Über uns</Link>
                </motion.li>

                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                    type: "spring",
                    stiffness: 50,
                  }}
                  className=""
                >
                  <Link href="/Neuigkeiten">Neuigkeiten</Link>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
