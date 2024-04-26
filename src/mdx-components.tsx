import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "./utils/cn";
import slugify from "slugify";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    h2: (props) => (
      <h2
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    h3: (props) => (
      <h3
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    h4: (props) => (
      <h4
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    h5: (props) => (
      <h5
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    h6: (props) => (
      <h6
        {...props}
        id={slugify(props.children?.toString() || "", { lower: true })}
        className="text-4xl font-bold mt-12 mb-6 first:mt-0 last:mb-0"
      />
    ),
    p: (props) => (
      <p {...props} className="my-4 leading-relaxed first:mt-0 last:mb-0" />
    ),
    ul: (props) => <ul {...props} className="list-disc pl-6 my-4" />,
    ol: (props) => <ol {...props} className="list-decimal pl-6 my-4" />,
    li: (props) => (
      <li {...props} className="my-2 leading-relaxed first:mt-0 last:mb-0" />
    ),
    a: (props) => {
      const isExternal = props.href?.startsWith("http");
      const linkClass = cn("text-purple-500 hover:text-purple-300");

      if (isExternal) {
        return <a {...props} target="_blank" className={linkClass} />;
      }

      return (
        /** @ts-ignore */
        <Link {...props} className={linkClass} />
      );
    },
    pre: (props) => (
      <pre
        {...props}
        className="p-4 bg-neutral-900/50 rounded shadow w-full border border-neutral-800/70 overflow-auto text-sm my-8 first:mt-0 last:mb-0"
      />
    ),
    code: (props) => <code {...props} className="font-mono" />,
    img: (props) => (
      <img
        {...props}
        className="w-full h-auto rounded shadow my-8 first:mt-0 last:mb-0"
      />
    ),
  };
}
