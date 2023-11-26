import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};



export default async function PostPage({ params }: Props) {




  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* <Header project={project} views={views} /> */}
      {/* <ReportView slug={project.slug} /> */}

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        {/* <Mdx code={project.body.code} /> */}
      </article>
    </div>
  );
}
