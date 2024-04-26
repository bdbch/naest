import { generateMeta } from "@/server/generateMeta";
import { loadMdx } from "@/server/loadMdx";
import { ResolvingMetadata } from "next";

export async function generateMetadata({}: {}, parent: ResolvingMetadata) {
  return await generateMeta(["index"], parent);
}

export default async function Home() {
  const mdx = await loadMdx(["index"]);

  return <div>{mdx.render()}</div>;
}
