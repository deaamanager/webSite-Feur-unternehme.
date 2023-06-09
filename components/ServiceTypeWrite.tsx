"use client";


import { Cursor,useTypewriter } from 'react-simple-typewriter';



type Props = {
  services: Services;
}


function ServiceTypeWrite({services}: Props) {
  const [write, conut] = useTypewriter({
    words: [` ${services?.title}:`,
],
    loop: true,
    delaySpeed: 2000,
  });

  return  <>
     <span className='text-sm  md:text-2xl   lg:font-extrabold font-bold     bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600  bg-clip-text  text-transparent my-3'>
    {write}
  <Cursor cursorColor='#4b5563' />
  </span>
  </>
  

}

export default ServiceTypeWrite