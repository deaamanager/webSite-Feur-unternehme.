"use client";

import Image from "next/image";
   
function SanityLogo(props:any) {
const {renderDefault,title} = props;
    return (
    <div className="flex items-center md:animate-pulse  ">
        <Image
        className="rounded-full object-cover   "
        width={80}
        height={80}
        alt="SYR-Logo"
        src='https://cdn.sanity.io/images/7n5v8za3/production/721962569cb4f11f33fcc6843b6c349803f5c48d-500x334.png'
        />
    <>{renderDefault(props)}</>
    </div>
  )
}

export default SanityLogo;