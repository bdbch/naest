import { SidebarConfig } from "@/types";

const config: SidebarConfig = [
  {
    items: [
      {
        title: "Naest",
        path: "/",
      },
      {
        title: "Changelog",
        path: "/changelog",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        title: "Setup a new project",
        path: "/getting-started/setup-a-new-project",
      },
      {
        title: "Creating your first documentation",
        path: "/getting-started/first-documentation",
      },
      {
        title: "Customizing the documentation",
        path: "/getting-started/customizing-the-documentation",
      },
    ],
  },
  {
    title: "Advanced",
    items: [
      {
        title: "Configuring Sidebars",
        path: "/advanced/sidebars",
      },
      {
        title: "Using MDX",
        path: "/advanced/using-mdx",
      },
      {
        title: "Metadata",
        path: "/advanced/metadata",
      },
      {
        title: "Generating a sitemap.xml",
        path: "/advanced/sitemap",
      },
      {
        title: "Generating a robots.txt",
        path: "/advanced/robots",
      },
    ],
  },
];

export default config;
