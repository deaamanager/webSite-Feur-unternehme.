"use client";
import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';  
import { motion } from 'framer-motion'; 
   
function SanityNavbar(props:any) {
  return (
    <div>
     <div className=' flex flex-row  justify-between'>
     <motion.div
     initial={{opacity:0 , x:-50 ,scale:0.5}}
     whileInView={{opacity:1, x:0, scale:1}}
     transition={{duration:1.5, delay:0.8, type:'spring', stiffness:50}}
     className='flex justify-center items-center py-5 ml-2  '>
        <Link href="/" 
        className='  text-[#ffbf00] gap-x-2 '
        >
        <ArrowUturnLeftIcon className="h-5 w-5  md:h-6 md:w-6 "  />
          <h1 className='text-sm md:text-base'>Go To Website</h1>
        </Link>
      </motion.div >
    
      <motion.div
       initial={{opacity:0 , x:100 ,scale:0.5}}
       whileInView={{opacity:1, x:0, scale:1}}
       transition={{duration:1.9, delay:1, type:'spring', stiffness:30}}
      className=' text-white flex p-2 rounded-full mr-2  my-4  justify-center items-center border-2 border-[#ffbf00] border-dotted animate-pulse'>
         <Image 
         width={30}
          height={30}
          src='https://cdn.sanity.io/images/7n5v8za3/production/0e364800a83bff494b690520d1fe9543fa7fcd97-2048x2048.png'
          alt='whatsapp'
          className='rounded-full object-cover mx-2 '
          
          />
        <h1 className='text-[10px]'> kontakt mir per Whatsapp</h1>
         <SocialIcon url='https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0' fgColor="green"   bgColor="transparent"
          className='md:ml-2'  style={{width:40,height:40}} />
       </motion.div>
     </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default SanityNavbar;