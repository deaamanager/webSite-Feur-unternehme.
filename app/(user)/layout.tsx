import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "../../styles/globals.css"
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";


const query1 = groq` 
*[_type == "social"] {
  ...,
} | order(_createdAt desc)
`;

const query2 = groq` 
*[_type == "firmaInfo"] {
  ...,
} | order(_createdAt desc)
`;

export  const  metadata = {
  title: 'SYR Services ',
  description: 'Generated Deaa Aldin Alawad',
 
}

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 const socialMedia = await client.fetch(query1);
 const firmaInfo = await client.fetch(query2);
  return (
    <html lang="en">
      <head>
      <meta content="width=device-width,inital-scale=1" name="viewport" />
      <link rel="icon" href="/logo.ico" />
      </head>
      <body className="max-w-7xl mx-auto overflow-x-hidden ">
        <Navbar firmaInfo={firmaInfo} />
        {children}
        <Footer firmaInfo={firmaInfo} socialMedia={socialMedia} />
      </body>
    </html>
  )
}
