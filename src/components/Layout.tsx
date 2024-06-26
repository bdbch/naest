import { SidebarConfig } from "@/types";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContent } from "./TableOfContent";
import Link from "next/link";
import { default as Logo } from "@/assets/logo.svg";

export const Layout = ({
  children,
  sidebarConfig,
}: {
  children: React.ReactNode;
  sidebarConfig: SidebarConfig | null;
}) => {
  return (
    <div>
      <header className="sticky top-0 border-b border-neutral-800 bg-black bg-opacity-80 backdrop-blur-lg z-10">
        <div className="container h-16 flex gap-8 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 leading-none font-bold"
          >
            <Logo className="w-6 h-6" />
            naest
          </Link>
          <div className="flex items-center gap-4">
            <Link
              className="text-sm text-white/50 hover:text-white"
              href="https://github.com/bdbch/naest"
              target="_blank"
              rel="nofollow noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-12 py-20 container">
        <div className="lg:col-span-3 order-0">
          <div className="sticky top-24 max-h-[50vh] h-full overflow-y-auto">
            {sidebarConfig ? <DocsSidebar config={sidebarConfig} /> : null}
          </div>
        </div>
        <div className="lg:col-span-7 order-2">
          <div className="max-w-[80ch]">{children}</div>
        </div>
        <div className="lg:col-span-2 relative order-1 lg:order-3">
          <div className="sticky top-24 max-h-[50vh] h-full overflow-y-auto">
            <TableOfContent />
          </div>
        </div>
      </div>
    </div>
  );
};
