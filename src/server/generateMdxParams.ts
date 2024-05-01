import { collectMarkdownFiles } from "@/utils/collectMarkdownFiles";
import fg from "fast-glob";

export async function generateMdxParams() {
  const paths = await collectMarkdownFiles();

  return paths.map((path) => {
    return {
      mdxPath: path,
    };
  });
}
