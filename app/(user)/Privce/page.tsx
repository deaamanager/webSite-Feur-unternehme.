import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Banner from "@/components/Banner";
import PrivsyPage from "@/components/PrivsyPage";

const query1 = groq` 
*[_type == "firmaInfo"] {
  ...,
} | order(_createdAt desc)
`;


async function page() {
  const posts1 = await client.fetch(query1);
  return (
    <>
    <Banner  firmaInfo={posts1} />
    <PrivsyPage />
    </>
  )
}

export default page