import { DocsSidebar } from "@/components/DocsSidebar";
import { getSidebar } from "@/server/getSidebar";

export default async function RootPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarConfig = await getSidebar();

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-2">
        {sidebarConfig ? <DocsSidebar config={sidebarConfig} /> : null}
      </div>
      <div className="lg:col-span-8">{children}</div>
      <div className="lg:col-span-2">
        {sidebarConfig ? <DocsSidebar config={sidebarConfig} /> : null}
      </div>
    </div>
  );
}
