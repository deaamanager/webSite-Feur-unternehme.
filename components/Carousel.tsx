"use client";

import React , {  useEffect, useState,useRef } from "react";
import useEmblaCarousel ,{ EmblaOptionsType } from 'embla-carousel-react';
import { PropsWithChildren } from 'react';
import Dots from './Dots';

type Props = PropsWithChildren & EmblaOptionsType;


const  Carousel = ({ children, ...options} : Props) => {
    const [emblaRef,emblaApi] = useEmblaCarousel( options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const autoslideInterval = 3000;
    const timerRef = useRef<NodeJS.Timer | undefined >();
    const length = React.Children.count(children); 

    useEffect(() => {
        function selectHandler() {
        const index = emblaApi?.selectedScrollSnap();
          setSelectedIndex(index || 0);
        }
        emblaApi?.on("select", selectHandler);
        return () => {
          emblaApi?.off("select", selectHandler);
        };
      }, [emblaApi]);
      
      useEffect(() => {
        function autoplay() {
          if (!emblaApi) return;
          const canScroll = emblaApi.canScrollNext();
          if (!canScroll) {
            emblaApi.scrollTo(0);
          } else {
            emblaApi.scrollNext();
          }
        };
        timerRef.current  = setInterval(autoplay, autoslideInterval);
        return () => clearInterval(timerRef.current);
      }, [emblaApi,autoslideInterval]);

  return (
    <>
    <div  ref={emblaRef} className=' overflow-hidden filter w-full rounded-xl drop-shadow-2xl my-5  '>  
     <div className='flex'>
        {children}
     </div>
     <div className="relative">
     <Dots itemsLength={length} selectedIndex={selectedIndex} />
     </div>      
    </div> 
    </>
  )
}

export default Carousel;
