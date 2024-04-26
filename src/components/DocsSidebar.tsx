"use client";

import { SidebarConfig } from "@/types";
import { SidebarGroup, SidebarItem } from "./Sidebar";
import { usePathname } from "next/navigation";

export const DocsSidebar = ({ config }: { config: SidebarConfig }) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="grid gap-8">
        {config.map((group, key) => (
          <li key={key}>
            <SidebarGroup title={group.title}>
              <ul className="grid gap-1">
                {group.items.map((item, key) => (
                  <li key={key}>
                    <SidebarItem
                      title={item.title}
                      href={item.path}
                      key={item.path}
                      active={pathname === item.path}
                    />
                  </li>
                ))}
              </ul>
            </SidebarGroup>
          </li>
        ))}
      </ul>
    </nav>
  );
};
