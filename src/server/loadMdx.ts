import path from "path";
import fs from "fs";

export const loadMdx = async (mdxPath: string[]) => {
  const mdxPathString = mdxPath.join("/");
  const rootPath = path.resolve(process.cwd(), "src/content");
  const indexPath = path.resolve(rootPath, mdxPathString, "index.mdx");
  const directPath = path.resolve(rootPath, mdxPathString + ".mdx");

  const isIndex = fs.existsSync(indexPath);
  const isDirect = fs.existsSync(directPath);

  if (!isIndex && !isDirect) {
    throw new Error(`No MDX file found for path: ${mdxPathString}`);
  }

  const mdxIndexPathString = isIndex ? mdxPathString + "/index" : mdxPathString;

  const mdx = (await import(`@/content/${mdxIndexPathString}.mdx`)) as {
    default: () => JSX.Element;
    frontmatter: Record<string, any>;
  };

  return {
    render: mdx.default,
    frontmatter: mdx.frontmatter,
  };
};
