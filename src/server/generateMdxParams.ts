import fg from "fast-glob";

export async function generateMdxParams() {
  const files = (await fg("src/content/**/*.mdx")).filter((file) => {
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

  return mdxPaths.map((path) => {
    return {
      mdxPath: path,
    };
  });
}
