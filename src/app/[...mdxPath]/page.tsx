import { generateMdxParams } from "@/server/generateMdxParams";
import { generateMeta } from "@/server/generateMeta";
import { loadMdx } from "@/server/loadMdx";
import { ResolvingMetadata } from "next";

type Props = {
  params: {
    mdxPath: string[];
  };
  searchParams: URLSearchParams;
};

export async function generateStaticParams() {
  return await generateMdxParams();
}

export async function generateMetadata(
  {
    params,
  }: {
    params: { mdxPath: string[] };
  },
  parent: ResolvingMetadata
) {
  return await generateMeta(params.mdxPath, parent);
}

export default async function MdxPage({ params }: Props) {
  const mdx = await loadMdx(params.mdxPath);
  return <div>{mdx.render()}</div>;
}
