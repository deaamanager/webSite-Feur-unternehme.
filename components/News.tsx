"use client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import {motion} from "framer-motion";
type Props = {
  neuigkeiten: Neuigkeiten[];
};
function News({ neuigkeiten }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-9 gap-y-5 ">
    <div>
        <div className="flex flex-wrap justify-center pb-9 ">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-center text-gray-800">Neuigkeiten :</h2>
            </div>
        </div> 
     <div className=" flex flex-col  justify-center  items-center px-4  gap-y-10">
     {neuigkeiten.map((neuigkeiten) => (
      <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness:50  }}
    key={neuigkeiten._id}
      className="flex flex-col rounded-lg bg-black/90  hover:drop-shadow-2xl md:h-72 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row  transition-transform duration-200 ">
      <Image
        src={urlFor(neuigkeiten.mainImage).url()}
        alt="Karten Bilder"
        width={500}
        height={500}
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg brightness-75"
        />

      <div className="flex flex-col justify-start p-6">
        <h5
          className="mb-2 text-xl font-medium text-[#ffbf00]/80 ">
         {neuigkeiten.title}
        </h5>
        <p className="mb-4 text-base text-slate-200">
          {neuigkeiten.description}
        </p>
        <p className="text-xs text-slate-200 ">
          <span className="text-[#ffbf00]/80">Letzte Aktualisierung :</span>{" "}
           {neuigkeiten.releaseDate}
        </p>
      </div>
    </motion.div>
     ))}
    </div>
    </div>

    </div>
  )
}

export default News;