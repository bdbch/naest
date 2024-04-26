"use client";

import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ToCItem = ({
  id,
  title,
  active,
}: {
  id: string;
  title: string;
  active: boolean;
}) => {
  const linkClassName = cn(
    "text-sm block p-2 border-l border-l-neutral-800 transition-colors",
    active
      ? "text-white border-l-white"
      : "text-white/50 hover:text-white hover:border-l-white"
  );

  return (
    <a className={linkClassName} href={`#${id}`}>
      {title}
    </a>
  );
};

export const TableOfContent = () => {
  const [activeHeadlines, setActiveHeadlines] = useState<Array<string>>([]);
  const [headlines, setHeadlines] = useState<Array<HTMLHeadingElement>>([]);
  const pathname = usePathname();

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll(
        "h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"
      )
    ) as Array<HTMLHeadingElement>;
    setHeadlines(headings);
  }, [pathname]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const activeHeadlines: string[] = [];

      headlines.forEach((headline) => {
        const offsetTop = headline.offsetTop;

        if (scrollTop > offsetTop - window.innerHeight / 2) {
          activeHeadlines.push(headline.id);
        }
      });

      setActiveHeadlines(activeHeadlines);
    };

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [headlines]);

  return (
    <div className="grid">
      {headlines.map((headline) => (
        <div key={headline.id}>
          <ToCItem
            id={headline.id}
            title={headline.textContent ?? ""}
            active={activeHeadlines.includes(headline.id)}
          />
        </div>
      ))}
    </div>
  );
};
