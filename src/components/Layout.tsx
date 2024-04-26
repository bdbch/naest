import { SidebarConfig } from "@/types";
import { DocsSidebar } from "./DocsSidebar";
import { TableOfContent } from "./TableOfContent";

export const Layout = ({
  children,
  sidebarConfig,
}: {
  children: React.ReactNode;
  sidebarConfig: SidebarConfig | null;
}) => {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-2">
        {sidebarConfig ? <DocsSidebar config={sidebarConfig} /> : null}
      </div>
      <div className="lg:col-span-8">
        <div className="max-w-[80ch]">{children}</div>
      </div>
      <div className="lg:col-span-2">
        <TableOfContent />
      </div>
    </div>
  );
};
