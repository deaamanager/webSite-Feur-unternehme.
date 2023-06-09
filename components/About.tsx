"use client";

import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

type Props = {
  firmaInfo: FirmaInfo[];
}

function About({ firmaInfo }: Props) {
  return (
    <div className='relative max-w-7xl mx-5  my-10 overflow-x-hidden '>
      {firmaInfo.map((firmaInfo) => (
        <div key={firmaInfo._id} className=' px-7'>

          <div className=' flex text-center justify-center items-center my-12'>
            <h1 className='absolute -top-3 inset-x-0  text-center  w-full h-full py-8 text-[10px] font-semibold md:text-sm '>
              <span className='bg-gradient-to-r from-[#ffbf00] via-[#705b1c] to-[#ffbf00]  bg-clip-text  text-transparent'>
                <Typewriter loop={true} delaySpeed={1000} words={[`${firmaInfo.title} `]} />
              </span>
              <Cursor cursorColor='#111' />
            </h1>
          </div>



          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness: 50 }}
            className=' relative flex flex-col items-center justify-center  hover:drop-shadow-xl  transition ease-out duration-200'>
            <Image
              src={urlFor(firmaInfo.descriptionImage).url()}
              alt='Picture of the author'
              fill
              className=' object-cover w-full h-full rounded-full  brightness-50  invert  '
            />

            <div className=' py-24 px-8 z-50  '>

              <h1 className='text-4xl font-bold text-center text-[#ffbf00] py-4'>{firmaInfo?.name}</h1>
              <p className='text-center text-lg  text-[#837037] font-bold'>{firmaInfo?.description} </p>

            </div>
          </motion.div>
        </div>
      ))}
      {firmaInfo.map((firmaInfo) => (
        <div key={firmaInfo._id} className='flex items-center justify-center py-12 pt-24 flex-col gap-y-5'>
          <img className='h-32 w-32 drop-shadow-lg ' src={urlFor(firmaInfo.zertifikatImage).url()} alt='zertifikatImage' />
          <img className='w-[70%] drop-shadow-lg' src={urlFor(firmaInfo.trustImage).url()} alt='trustImage' />
          <div className='w-full'>
            <h1 className=' text-center text-[12px] md:text-lg font-bold 
                 bg-gradient-to-r from-[#ffbf00] via-[#705b1c] to-[#ffbf00]  bg-clip-text  text-transparent'>
              <span>
                <Typewriter loop={true} delaySpeed={1000} words={[`${firmaInfo.trustTitle} `]} />
              </span>
              <Cursor cursorColor='#111' />
            </h1>

          </div>
        </div>
      ))}
    </div>
  )
}

export default About;