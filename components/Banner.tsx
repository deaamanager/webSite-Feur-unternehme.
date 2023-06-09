"use client";

import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { motion } from "framer-motion";



type Props = {
   firmaInfo: FirmaInfo[];
};

function Banner({ firmaInfo }: Props) {
   return (
      <div className="relative  flex flex-col lg:flex-row lg:space-x-5 h-[40rem] justify-between  font-bold
      overflow-x-hidden    px-10 py-5 mb-10 ">

         {firmaInfo.map((firmaInfo) => (

            <div key={firmaInfo._id}  >
               <div >
                  <Image
                     src={urlFor(firmaInfo.image).url()}
                     alt={firmaInfo.name}
                     className=" object-cover w-full h-full absolute drop-shadow-xl rounded-b-xl  "
                     fill
                  />
                  <div className=" drop-shadow-xl rounded-b-xl  absolute  bottom-0 left-0 right-0 h-full  bg-gradient-to-t from-[#111]  " />
               </div>
               <div className="pt-56 absolute " >
                  <motion.h1
                     initial={{ opacity: 0, z: -70, scale: 0 }}
                     whileInView={{ opacity: 1, z: 0, scale: 1 }}
                     transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 50 }}
                     className=" text-5xl md:text-6xl bg-gradient-to-r from-gray-300 to-gray-200   bg-clip-text  text-transparent">
                     {firmaInfo.name}
                  </motion.h1>
                  <h2 className="mt-5 md:mt-8 text-2xl md:text-3xl font-semibold
                      text-white">
                     <span> <Typewriter loop={true} delaySpeed={1000} words={[`${firmaInfo.shortTitle1} `, `${firmaInfo.shortTitle2} `, `${firmaInfo.shortTitle3} `]} /> </span>
                     <Cursor cursorColor='#6b7280' />
                  </h2>
               </div>
            </div>

         ))}

      </div>

   );
}

export default Banner;


