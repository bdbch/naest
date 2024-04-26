"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";

export const SidebarGroup = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      {title ? (
        <div className="text-xxs uppercase text-white/70 font-semibold tracking-wider mb-2">
          {title}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export const SidebarItem = ({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active?: boolean;
}) => {
  const linkClassName = cn(
    "text-sm",
    !active ? "text-white/50 hover:text-white" : "text-white"
  );

  return (
    <Link className={linkClassName} href={href}>
      {title}
    </Link>
  );
};
