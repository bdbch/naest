import { SidebarConfig } from "@/types";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContent } from "./TableOfContent";
import Link from "next/link";

export const Layout = ({
  children,
  sidebarConfig,
}: {
  children: React.ReactNode;
  sidebarConfig: SidebarConfig | null;
}) => {
  return (
    <div>
      <header className="sticky top-0 border-b border-neutral-800 bg-black bg-opacity-80 backdrop-blur-lg">
        <div className="container h-16 flex gap-8 items-center justify-between">
          <Link href="/" className="text-sm font-bold">
            naest.dev
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
      <div className="grid gap-6 lg:grid-cols-12 py-12 container">
        <div className="lg:col-span-3">
          <div className="sticky top-24 max-h-[50vh] h-full overflow-y-auto">
            {sidebarConfig ? <DocsSidebar config={sidebarConfig} /> : null}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="max-w-[80ch]">{children}</div>
        </div>
        <div className="lg:col-span-2 relative">
          <div className="sticky top-24 max-h-[50vh] h-full overflow-y-auto">
            <TableOfContent />
          </div>
        </div>
      </div>
    </div>
  );
};
