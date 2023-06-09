"use client";
import { SocialIcon } from 'react-social-icons';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useContactForm from "../hooks/useContactForm";
import { useState } from "react";
import sendEmail from '../lib/sendEmail'
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
type Props = {
  socialMedia: Social[];
  firmaInfo: FirmaInfo[];
};
function Footer({ socialMedia, firmaInfo }: Props) {
  const [write, conut] = useTypewriter({
    words: [`Kontaktiern Sie uns  . . . `,
      "Ihr zuverlässiger Ansprechpartner für alle Belange",],
    loop: true,
    delaySpeed: 2000,
  });
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState(
    { isSuccessful: false, message: '' });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.name, values.email, values.betreff, values.message, values.checkbox);
      if (req.status === 250) {
        setResponseMessage(
          { isSuccessful: true, message: 'Vielen Dank für Ihre Nachricht,Wir Kontaktieren Sie bald.' });
      }
    }
    catch (e) {
      setResponseMessage({
        isSuccessful: false,
        message: "Oops,da ist was schiefgegangen.Bitte versuch's nochmal!",
      });
    };
  };


  return (
    <div className="relative bottom-0 self-end bg-black/90 pt-10  rounded-3xl  shadow-xl overflow-x-hidden ">
      <div className="flex items-center justify-center gap-x-3 md:gap-x-4">
        {socialMedia?.map((socialMedia) => (
          <SocialIcon
            key={socialMedia._id}
            bgColor="transparent"
            fgColor={socialMedia.color}
            url={socialMedia.url} />
        ))}
      </div>
      <footer className="relative h-full rounded-lg shadow bg-black bg-opacity-30 m-4 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex  items-center mb-4 sm:mb-0 ">
              {firmaInfo.map((firmaInfo) => (
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration:1.5, delay:0.8, type:'spring', stiffness:50}}
                  key={firmaInfo._id}
                  className='pl-5 animate-pulse'>
                  <Image src={urlFor(firmaInfo.logo).url()} alt="SYR-Services Logo " className='rounded-full object-cover ' width={100} height={100} />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-300 ">{firmaInfo?.name} </span>
                </motion.div>
              ))}
            </div>
            {firmaInfo.map((firmaInfo) => (
              <div key={firmaInfo._id} className="text-gray-300  flex flex-col items-center pl-4 md:pl-10 w-[100%] gap-y-3">
                <div className='flex flex-row md:w-full w-[50%] gap-x-2 items-center justify-center '>
                  <PhoneIcon className="h-5 w-5  md:h-6 md:w-6" />
                  <h1>{firmaInfo.phone} </h1>
                </div>
                <div className='flex flex-row md:w-full w-[70%] gap-x-2 items-center justify-center '>
                  <EnvelopeIcon className="h-5 w-5  md:h-6 md:w-6" />
                  <h1>{firmaInfo.email} </h1>
                </div>
                <div className='flex flex-row md:w-full w-[50%] gap-x-2 items-center justify-center '>
                  <MapPinIcon className="h-5 w-5  md:h-6 md:w-6" />
                  <h1>{firmaInfo.address} </h1>
                </div>
              </div>
            ))}
            <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap flex-col w-full items-center justify-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-400 gap-y-4" >
              <h1>
                <span>{write} </span>
                <Cursor />
              </h1>
              <motion.input
                initial={{ opacity: 0, x: 100,  }}
                whileInView={{ opacity: 1, x: 0,  }}
                transition={{ duration:1.5, delay:0.8, type:'spring', stiffness:50}}
                className="text-white bg-gray-800 opacity-30   border-b py-2 focus:border-[#ffbf00] outline-none w-[70%] rounded-md "
                required
                id='name'
                value={values.name}
                onChange={handleChange}

                type="text" placeholder="Name..." />
              {/*Email faild */}
              <motion.input
                initial={{ opacity: 0, x: 100, }}
                whileInView={{ opacity: 1, x: 0,}}
                transition={{ duration:1.5, delay:1, type:'spring', stiffness:50 }}
                className="'text-white bg-gray-800 opacity-30   border-b py-3 focus:border-[#ffbf00] outline-none w-[70%] rounded-md"
                required
                id='email'
                value={values.email}
                onChange={handleChange}
                type="email" placeholder="Email-Adresse..."
              />
              {/*betreff faild */}
              <motion.input
                initial={{ opacity: 0, x: 100, }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ duration:1.5, delay:1.3, type:'spring', stiffness:50 }}
                className="'text-white bg-gray-800 opacity-30  border-b py-3 focus:border-[#ffbf00] outline-none w-[70%] rounded-md"
                required
                id='betreff'
                value={values.betreff}
                onChange={handleChange}
                type="text" placeholder="Betreff..." />
              {/*message faild */}
              <motion.textarea
                initial={{ opacity: 0, x: 100, }}
                whileInView={{ opacity: 1, x: 0, }}
                transition={{ duration:1.5, delay:1.5, type:'spring', stiffness:50 }}
                className="text-white bg-gray-800 opacity-30   border-b py-3 focus:border-[#ffbf00] outline-none w-[70%] rounded-md"
                required
                value={values.message}
                onChange={handleChange}
                id='message'
                rows={8}
                placeholder="Nachricht hier eingeben..." />
              {/*checkbox faild */}
              <label className=" flex flex-row space-x-3 py-5 px-10 md:pl-18  text-white text-sm font-semibold">
                <input
                  type="checkbox"
                  required
                  checked={values.checkbox}
                  onChange={handleChange}
                  id='checkbox'
                />
                <span className='text-[10px] font-[600] md:text-sm '>Hiermit stimme ich<Link href='/Privce'><span className="text-[#ffbf00]/40 font-[700] cursor-pointer underline hover:text-[#ffbf00]">den Datenschutzhinweisen</span> </Link> sowie der Erfassung personenbezogener Daten zur Bearbeitung meiner Anfrage zu.
                </span>
              </label>
              {/*submit button */}
              <button type='submit' value='submit' className="bg-[#ffbf00] h-8 w-[80%] rounded-xl text-black ">Submit</button>
              {responseMessage && <span className={`mx-3 pb-4 text-[11px] ${responseMessage.isSuccessful ? 'text-green-500' : 'text-red-500'} `}>{responseMessage.message} </span>}
            </form>
          </div>
          <hr className="my-6  sm:mx-aut border-gray-500 lg:my-8" />
          <span className="block text-[11px] md:text-sm  pb-3 text-gray-200  text-center">Copyright © 2023 - All right reserved by Deaa Aldin Alawad</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer;