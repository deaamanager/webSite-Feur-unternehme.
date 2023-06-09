"use client";

import { usePreview } from "../lib/sanity.preview";
import About from "./About";
import Banner from "./Banner";
import BlogList from "./BlogList ";


type Props = {
  query: string;
  query2: string;
};
export default function PreviewBlogList({ query,query2 }: Props) {
  const posts = usePreview(null, query);
  const posts2 = usePreview(null, query2);
  return (
    <>

      < Banner firmaInfo={posts2} />
      <section id="blog_list">
        <BlogList services={posts} />
      </section>
      <section id="ueber_uns">
        <About firmaInfo={posts2} />
      </section>
    </>
  );
}

