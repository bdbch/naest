import { SidebarConfig } from "@/types";

const config: SidebarConfig = [
  {
    items: [
      {
        title: "Naest",
        path: "/",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        title: "Installation",
        path: "/getting-started/installation",
      },
      {
        title: "Creating your first documentation",
        path: "/getting-started/first-documentation",
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
    ],
  },
];

export default config;
