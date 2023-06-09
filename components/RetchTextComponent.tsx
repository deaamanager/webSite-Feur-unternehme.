import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";


export const RitchTextComponent = {

    /// block i dont used
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 m-10  max-auto bg-red-500 '>
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()}
                        alt='Blog service'
                        fill
                    />
                </div>
            );
        },
     
    },
    lists: {
        bullet: ({ children }: any) => {
            <ul className="ml-10 py-5 list-disc space-y-5 text-xl">{children}</ul>
        },
        number: ({ children }: any) => {
            <ol className="mt-14  list-decimal ">{children}</ol>
        },


    },
    sytles: {
        h1: ({ children }:any) => <h1 className="text-4xl py-10 font-bold">{children}</h1>,
          
    
        h2: ({ children }: any) => {
            <h2 className='text-5xl py-10 font-bold bg-red-500'>{children}</h2>
        },
        
        h3: ({ children }: any) => {
            <h3 className="text-5xl py-10 font-bold">{children}</h3>
        },
        h4: ({ children }: any) => {
            <h4 className="text-xl py-10 font-bold">{children}</h4>
        },
        blockquote: ({ children }: any) => {
            <blockquote className="border-l-[#ffbf00] border-l-4 pl-5 py-5 my-5 ">{children}</blockquote>
        },
        normal: ({ children }: any) => {

            <p className="text-xl py-5">{children}</p>
        },
     
 
 
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="decoration-[#ffbf00] underline hover:decoration-black"
                >
                    {children}
                </Link>
            );
        },
    },

};



