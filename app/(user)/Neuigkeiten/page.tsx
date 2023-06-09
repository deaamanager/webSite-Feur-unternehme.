import Banner from "@/components/Banner";
import News from "@/components/News";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import PreviewSuspense from "@/components/PreviewSuspense";
import { previewData } from "next/headers";
import NeuigkeitenPreview from "@/components/NeuigkeitenPreview";


const query1 = groq` 
*[_type == "firmaInfo"] {
  ...,
} | order(_createdAt desc)
`;
const query2 = groq` 
*[_type == "neuigkeiten"] {
  ...,
} | order(_createdAt desc)
`;

export const revalidate = 30; 

async function Neuigkeiten() {
  if(previewData()){
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#ffbf00] ">
              Loading Preview Data ...
            </p>
          </div>
        }
      >
        <NeuigkeitenPreview query2={query1} query={query2} />
      </PreviewSuspense>
    );
  }
    const firmaInfo = await client.fetch(query1);
    const neuigkeiten = await client.fetch(query2);
  return <>
    
    <Banner firmaInfo={firmaInfo} />
    <News neuigkeiten={neuigkeiten} />
    
    </>
  
}

export default Neuigkeiten;