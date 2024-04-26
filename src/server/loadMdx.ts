import { MDXContent } from "mdx/types";

export const loadMdx = async (mdxPath: string[]) => {
  const mdxPathString = mdxPath.join("/");
  const mdx = (await import(`@/content/${mdxPathString}.mdx`)) as {
    default: () => JSX.Element;
    frontmatter: Record<string, any>;
  };

  return {
    render: mdx.default,
    frontmatter: mdx.frontmatter,
  };
};
