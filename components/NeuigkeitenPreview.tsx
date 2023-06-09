"use client";
import { usePreview } from "../lib/sanity.preview";
import Banner from "./Banner";
import News from "./News";

type Props = {
 query: string;
  query2: string;
};
function NeuigkeitenPreview({ query,query2 }: Props) {
      const posts = usePreview(null, query);
      const posts2 = usePreview(null, query2);
  return (
    <> 
    <Banner firmaInfo={posts2} />
    <News neuigkeiten={posts} />
    </>
  )
}

export default NeuigkeitenPreview