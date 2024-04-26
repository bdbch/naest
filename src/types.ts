export type SidebarItem = {
  title: string;
  path: string;
  children?: Array<SidebarItem>;
};

export type SidebarSection = {
  title?: string;
  items: Array<SidebarItem>;
};

export type SidebarConfig = Array<SidebarSection>;
