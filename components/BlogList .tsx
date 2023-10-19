"use client";

import urlFor from "@/lib/urlFor";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import { motion } from "framer-motion";

type Props = {
  services: Services[];
};

function BlogList({ services }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 mb-24 ">
        {services?.map((service) => (
          <ClientSideRoute
            key={service?._id}
            route={`/service/${service.slug.current}`}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 50,
              }}
              className="group cursor-pointer flex flex-col"
            >
              {/**  erste div nachem backround-image == blur div  */}
              <div
                className="relative w-full h-80 drop-shadow-xl
            group-hover:scale-105 transition duration-700 ease-out"
              >
                <Image
                  className="object-cover opject-left lg:opject-center filter shadow-2xl drop-shadow-2xl rounded-lg "
                  src={urlFor(service.mainImage).url()}
                  alt="deaa"
                  fill
                />

                <div
                  className="absolute bottom-0 w-full  bg-opacity-30
              bg-black backdrop-blur-md rounded-t-3xl drop-shadow-lg 
               py-5 flex flex-row justify-between  gap-x-4 px-4 rounded-b-md
               "
                >
                  <div>
                    <p className="font-bold py-2 text-base text-white ">
                      {service.title}{" "}
                    </p>
                    <p className="line-clamp-2 text-sm text-gray-200 ">
                      {service.description}{" "}
                    </p>
                  </div>

                  <button
                    className="  bg-black bg-opacity-30  text-[#ffbf00] animate-pulse
                    px-2 py-1 rounded-full text-sm h-9 w-[6rem] font-semibold
           "
                  >
                    Mehr..
                  </button>
                </div>
              </div>
            </motion.div>
          </ClientSideRoute>
        ))}
      </div>
      <hr className="border-[#ffbf00]" />
    </div>
  );
}

export default BlogList;
