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
        title: "Setup a new project",
        path: "/getting-started/setup-a-new-project",
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
