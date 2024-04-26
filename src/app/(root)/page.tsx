import { loadMdx } from "@/server/loadMdx";

export default async function Home() {
  const mdx = await loadMdx(["index"]);

  return <div>{mdx.render()}</div>;
}
