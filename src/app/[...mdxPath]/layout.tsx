import { DocsSidebar } from "@/components/DocsSidebar";
import { generateMdxParams } from "@/server/generateMdxParams";
import { getSidebar } from "@/server/getSidebar";

export async function generateStaticParams() {
  return await generateMdxParams();
}

export default async function MdxPageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { mdxPath: string[] };
}>) {
  const sidebarConfig = await getSidebar(params.mdxPath);

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
