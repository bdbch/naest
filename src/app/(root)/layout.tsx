import { DocsSidebar } from "@/components/DocsSidebar";
import { Layout } from "@/components/Layout";
import { getSidebar } from "@/server/getSidebar";

export default async function RootPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarConfig = await getSidebar();

  return <Layout sidebarConfig={sidebarConfig}>{children}</Layout>;
}
