import fg from "fast-glob";

export async function collectMarkdownFiles(options?: {
  filterIndex?: boolean;
}) {
  const { filterIndex = true } = options || {};
  const files = (await fg("src/content/**/*.mdx")).filter((file) => {
    if (!filterIndex) return true;

    // filter out root index file
    return !file.includes("src/content/index.mdx");
  });

  const mdxPaths = files.map((file) => {
    return file
      .replace("src/content/", "")
      .replace(".mdx", "")
      .replace("/index", "/")
      .split("/");
  });

  return mdxPaths;
}
