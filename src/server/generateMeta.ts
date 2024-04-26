import { getMetaTitle } from "@/utils/getMetaTitle";
import { loadMdx } from "./loadMdx";
import { getMetaDescription } from "@/utils/getMetaDescription";
import { ResolvingMetadata } from "next";

export async function generateMeta(
  mdxPath: string[],
  parentMeta: ResolvingMetadata
) {
  const mdx = await loadMdx(mdxPath);

  const title = getMetaTitle(
    mdx.frontmatter?.title,
    (await parentMeta)?.title?.absolute
  );
  const description = getMetaDescription(
    mdx.frontmatter?.description,
    (await parentMeta)?.description ?? undefined
  );

  return {
    title,
    description,
  };
}
