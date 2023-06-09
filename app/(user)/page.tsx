import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList ";
import Banner from "@/components/Banner";
import About from "@/components/About";



const query = groq`
*[_type == "services"] {
  ...,
  sliderImages[]->,
} | order(_createdAt desc)
`;

const query1 = groq` 
*[_type == "firmaInfo"] {
  ...,
} | order(_createdAt desc)
`;

export const revalidate = 30; 

export default async function Homepage() {
  if (previewData()) {
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

        <PreviewBlogList query2={query1} query={query} />

      </PreviewSuspense>
    );
  } const posts1 = await client.fetch(query1);


  const posts = await client.fetch(query);
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <Banner firmaInfo={posts1} />
        <section id="blog_list">
          <BlogList services={posts} />
        </section>
        <section id="ueber_uns">
          <About firmaInfo={posts1} />
        </section>
      </div>
    </>);

}
