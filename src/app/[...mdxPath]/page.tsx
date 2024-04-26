import { generateMdxParams } from "@/server/generateMdxParams";
import { loadMdx } from "@/server/loadMdx";

export async function generateStaticParams() {
  return await generateMdxParams();
}

type Props = {
  params: {
    mdxPath: string[];
  };
  searchParams: URLSearchParams;
};

export default async function MdxPage({ params }: Props) {
  const mdx = await loadMdx(params.mdxPath);
  return <div>{mdx.render()}</div>;
}
