import { SidebarConfig } from "@/types";
import path from "path";
import fs from "fs";

export async function loadSidebar(
  incPath: string = "/"
): Promise<SidebarConfig | null> {
  const sidebarPath = path.join(
    process.cwd(),
    "src/content",
    ...incPath.split("/"),
    "sidebar.ts"
  );

  if (!fs.existsSync(sidebarPath)) {
    return null;
  }

  const cleanedUpPath = sidebarPath.replace(
    `${process.cwd()}/src/content/`,
    ""
  );

  const sidebarConfig = (await import(`@/content/${cleanedUpPath}`))
    .default as SidebarConfig;

  return sidebarConfig;
}

export async function getSidebar(
  mdxPath?: string[]
): Promise<SidebarConfig | null> {
  let config = await loadSidebar();

  if (!mdxPath) {
    return config;
  }

  const steppedPath: string[] = [];

  await Promise.all(
    mdxPath.map((path) => {
      return new Promise(async (resolve) => {
        steppedPath.push(path);
        const newConfig = await loadSidebar(steppedPath.join("/"));

        if (newConfig) {
          config = newConfig;
        }

        resolve(null);
      });
    })
  );

  return config;
}
