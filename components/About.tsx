"use client";

import Image from "next/image";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type Props = {
  firmaInfo: FirmaInfo[];
};

function About({ firmaInfo }: Props) {
  const [cardOne, setCardOne] = useState<number>(0);
  const [cardTsec, setCardTsec] = useState<number>(0);
  const [cardThree, setCardThree] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  // Handel animation after run observer
  const handleAnimation = (
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    threshold: number
  ) => {
    let animationTimeout: NodeJS.Timeout | null = null;

    if (state < threshold && isVisible) {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
      animationTimeout = setTimeout(() => {
        setState((prev) => prev + 1);
      }, 5);
    } else if (state >= threshold && !isVisible) {
      setState(0);
    }

    return () => {
      if (animationTimeout) {
        clearTimeout(animationTimeout);
      }
    };
  };

  // observer fun
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Effect on Elmenet
  useEffect(
    () => handleAnimation(cardOne, setCardOne, 90),
    [isVisible, cardOne]
  );
  useEffect(
    () => handleAnimation(cardTsec, setCardTsec, 95),
    [isVisible, cardTsec]
  );
  useEffect(
    () => handleAnimation(cardThree, setCardThree, 99),
    [isVisible, cardThree]
  );

  return (
    <div className="relative max-w-7xl mx-5  my-10 overflow-x-hidden ">
      {firmaInfo.map((firmaInfo) => (
        <div key={firmaInfo._id} className=" my-12 px-7">
          <div className="relative flex flex-col  items-center justify-center  hover:drop-shadow-xl group transition ease-out duration-200">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              }}
            >
              <Image
                src="https://cdn.sanity.io/images/7n5v8za3/production/f338aa271935e9b49eeb69d6f578fc1a6c035344-3000x1800.png"
                alt="Picture of the author"
                width={500}
                height={500}
                className=" object-contain object-center  z-0  group-hover:scale-105 duration-500 ease-out"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className="  z-40 relative  w-full md:w-[50%] -top-[4.5rem] -left-5 md:-left-[12rem]  "
            >
              <h1 className="text-4xl font-bold text-start text-[#ffbf00] py-4">
                <span className="absolute z-40 -top-[8.5rem] md:-top-[12rem] ">
                  <Typewriter
                    loop={true}
                    delaySpeed={1000}
                    words={[`${firmaInfo?.name}`, `dein beste wahl`]}
                  />
                </span>
              </h1>
              <p className="text-start absolute top-[4rem] md:-top-[8rem]  md:text-lg text-sm  text-[#ffbf00] font-semibold md:font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam harum nulla, eius omnis beatae provident delectus
                vitae velit minus quod! deaa
                {firmaInfo?.description}{" "}
              </p>
            </motion.div>
          </div>
          <hr className="border border-[#ffbf00] md:mt-14 mt-24" />
        </div>
      ))}

      <div className="flex items-center justify-center py-12 pt-24 flex-col gap-y-5">
        <div className="w-full group h-[17rem] relative overflow-hidden rounded-lg drop-shadow-md flex items-center justify-center">
          <div className=" absolute top-12 left-5 md:left-[8rem] z-40 text-xl font-bold">
            <h1>
              <span className="text-sm md:text-base text-black z-40">
                <Typewriter
                  loop={true}
                  delaySpeed={1000}
                  words={[
                    `Ihr Schlüssel zur problemlosen Lösung `,
                    `schnellen und sicheren Service für sorgenfreie Ergebnisse`,
                  ]}
                />
              </span>
              <span>
                <Cursor cursorColor="#ffbf00" />
              </span>
            </h1>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y1: -50 }}
              whileInView={{ opacity: 1, y1: 0, rotate: "45deg" }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className=" absolute -top-[15rem] md:right-[8.9rem] lg:md:right-0  md:left-[13rem] xl:left-[25rem] -left-28 w-[90%] xl:w-full z-20 h-[500%] bg-black/50 blur-sm"
            />
            <motion.div>
              <Image
                height={300}
                width={470}
                className=" oblect-cover object-center mix-blend-screen absolute md:top-0 md:right-0 top-0 -right-0 h-full w-full md:w-[50%] group-hover:scale-110 transition duration-1000 ease-out rounded-md"
                alt="image-service"
                src="https://cdn.sanity.io/images/7n5v8za3/production/f24d8bcdb93e090f4f25a52a6e8dd8fd15e83092-900x521.jpg"
              />
            </motion.div>
          </div>
        </div>

        <div
          ref={ref}
          className="w-full flex flex-col md:flex-row items-center justify-center py-5 gap-5 mt-8 md:mt-14 "
        >
          <div className="   w-[15rem] h-[15rem] relative flex flex-col shadow-[#111]/50 shadow-2xl rounded-2xl items-center hover:scale-105 duration-500 transition ease-out">
            <div className="absolute  h-full w-full  border-2 border-[#111] rounded-2xl blur-[1px] p-1" />
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className=" w-full flex items-center justify-center "
            >
              <h1
                className=" relative flex items-center justify-center space-x-1 text-sm font-semibold bg-black/90 border-b-2 border-x-2 rounded-b-md border-gray-400 px-4 z-0 text-amber-500 
                  pt-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)]
                   before:block before:contents-[''] 
                   before:absolute before:left-[28px] before:right-[28px]
                  before:top-[25px] before:h-[90%] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-50
                "
              >
                <span className="pb-1">Review</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <Image
              width={400}
              height={200}
              className=" drop-shadow-2xl absolute top-0 mr-2 "
              src="https://cdn.sanity.io/images/7n5v8za3/production/0ddf50c8c3572b32bd0ebb3358eb77d6dc39c2a7-510x360.png"
              alt="zertifikatImage"
            />

            <svg className=" absolute top-[4.7rem] pl-20  ">
              <circle
                cx={220 / 2}
                cy={200 / 2}
                strokeWidth="2px"
                r="40"
                className="fill-none blur-[1px] stroke-2 stroke-[#111]   "
              />
            </svg>
            <motion.h1
              initial={{ opacity: 0, z: -70, scale: 0 }}
              whileInView={{ opacity: 1, z: 0, scale: 1.5 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              }}
              className="text-2xl absolute bottom-[3rem] pl-1   
               bg-gradient-to-r from-[#ffbf00] via-[#a8892c] to-[#ffbf00] bg-clip-text text-transparent
                "
            >
              <span>{cardOne}</span>
              <span className="text-base font-bold">%</span>
            </motion.h1>
          </div>
          <div className="w-[15rem] h-[15rem] relative flex flex-col shadow-[#111]/50 shadow-2xl rounded-2xl items-center hover:scale-105 duration-500 transition ease-out">
            <div className="absolute  h-full w-full  border-2 border-[#111] rounded-2xl blur-[1px] p-1" />
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className=" w-full flex items-center justify-center "
            >
              <h1
                className=" relative space-x-1 flex items-center justify-center text-sm font-semibold bg-black/90 border-b-2 border-x-2 rounded-b-md border-gray-400 px-4 z-0 text-amber-500 
                  pt-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)]
                   before:block before:contents-[''] 
                   before:absolute before:left-[28px] before:right-[28px]
                  before:top-[25px] before:h-[90%] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-50
                "
              >
                <span className="pb-1"> Feedback</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <Image
              width={130}
              height={75}
              className=" drop-shadow-2xl absolute top-[2.5rem] mr-1  "
              src="https://cdn.sanity.io/images/7n5v8za3/production/cf0ee269fb18dfdf9a3d486e5fc6a8c8efd239da-772x483.png"
              alt="zertifikatImage"
            />

            <svg className=" absolute top-[4.7rem] pl-20">
              <circle
                cx={220 / 2}
                cy={200 / 2}
                strokeWidth="2px"
                r="40"
                className="fill-none blur-[1px] stroke-2 stroke-[#111]"
              />
            </svg>
            <motion.h1
              initial={{ opacity: 0, z: -70, scale: 0 }}
              whileInView={{ opacity: 1, z: 0, scale: 1.5 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              }}
              className="text-2xl absolute bottom-[3rem] pl-1
               bg-gradient-to-r from-[#ffbf00] via-[#a8892c] to-[#ffbf00]  bg-clip-text  text-transparent
                "
            >
              <span>{cardTsec}</span>
              <span className="text-base font-bold">%</span>
            </motion.h1>
          </div>
          <div className="   w-[15rem] h-[15rem] relative flex flex-col shadow-[#111]/50 shadow-2xl rounded-2xl items-center hover:scale-105 duration-500 transition ease-out">
            <div className="absolute  h-full w-full  border-2 border-[#111] rounded-2xl blur-[1px] p-1" />
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className=" w-full flex items-center justify-center "
            >
              <h1
                className=" relative flex items-center justify-center space-x-1 text-sm font-semibold bg-black/90 border-b-2 border-x-2 rounded-b-md border-gray-400 px-4 z-0 text-amber-500 
                  pt-1 bg-[linear-gradient(#ffffff99,#ffffff00,#0000004d,#ffffff33)]
                   before:block before:contents-[''] 
                   before:absolute before:left-[28px] before:right-[28px]
                  before:top-[25px] before:h-[90%] before:transform  before:rounded-full before:bg-[linear-gradient(#ffffffcc,#ffffff00)]  before:z-50 before:blur  before:opacity-50
                "
              >
                <span className="pb-1"> Service</span>
                <span>
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
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <Image
              width={70}
              height={70}
              className=" drop-shadow-2xl absolute top-10 mr-1 "
              src="https://cdn.sanity.io/images/7n5v8za3/production/b601904458415de8c17b0ae982e52f7c9fb91927-301x350.png"
              alt="zertifikatImage"
            />

            <svg className=" absolute top-[4.7rem] pl-20  ">
              <circle
                cx={220 / 2}
                cy={200 / 2}
                strokeWidth="2px"
                r="40"
                className="fill-none blur-[1px] stroke-2 stroke-[#111]"
              />
            </svg>
            <motion.h1
              initial={{ opacity: 0, z: -70, scale: 0 }}
              whileInView={{ opacity: 1, z: 0, scale: 1.5 }}
              transition={{
                duration: 1,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              }}
              className="text-2xl absolute bottom-[3rem] pl-1 
               bg-gradient-to-r from-[#ffbf00] via-[#a8892c] to-[#ffbf00] bg-clip-text text-transparent
                "
            >
              <span>{cardThree}</span>
              <span className="text-base font-bold">%</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
