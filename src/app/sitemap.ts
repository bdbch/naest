import { collectMarkdownFiles } from "@/utils/collectMarkdownFiles";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths = await collectMarkdownFiles({ filterIndex: false });
  const pages: MetadataRoute.Sitemap = await Promise.all(
    paths.map(async (path) => {
      const joinedPath = path.join("/");
      const file = await import(`@/content/${joinedPath}.mdx`);

      return {
        url: `${process.env.NEXT_DOMAIN}/${
          joinedPath === "index" ? "" : joinedPath
        }`,
        lastModified: new Date(),
        changeFrequency: file.frontmatter?.changeFrequency ?? "monthly",
        priority: file.frontmatter?.priority ?? 0.5,
      };
    })
  );

  return pages;
}
