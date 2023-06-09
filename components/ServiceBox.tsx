"use client";
import {motion} from 'framer-motion'
import Image from 'next/image';
type Props = {
    service: Services;
    };

function ServiceBox({service}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 50, scale: 0 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.3, type: 'spring', stiffness:50  }}
    className='py-5 pb-8 relative  '>
      <img 
      src="https://cdn.sanity.io/images/gwed400e/production/5522af3ee5118dabc58db64fc08e40d350a78ae4-720x482.jpg"
      alt="test"
   
      className=" absolute  top-0 left-0 h-full w-full"
      />
      <h1 className='filter    py-24 px-5 md:px-20 text-lg font-medium capitalize  bg-gradient-to-t from-black/90 via-white  rounded-2xl text-white'>{service?.shortTitle}</h1>
       
    </motion.div>
  )
}

export default ServiceBox