"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const TableOfContent = () => {
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

  return (
    <div>
      {headlines.map((headline) => (
        <div key={headline.id}>
          <a
            className="text-white/50 hover:text-white"
            href={`#${headline.id}`}
          >
            {headline.textContent}
          </a>
        </div>
      ))}
    </div>
  );
};
