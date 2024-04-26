import { DocsSidebar } from "@/components/DocsSidebar";
import { Layout } from "@/components/Layout";
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

  return <Layout sidebarConfig={sidebarConfig}>{children}</Layout>;
}
