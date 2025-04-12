"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SideBarOptions } from "@/services/Constants";

export function AppSidebar() {
  const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center mt-5">
        <Image
          className="w-[150px]"
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={100}
        />
        <Button className="w-full mt-5">
          <Plus className="mr-2" /> Create new interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => {
                const isActive = path === option.path;
                return (
                  <SidebarMenuItem className="p-1" key={index}>
                    <SidebarMenuButton
                      className={`p-5 ${isActive && "bg-blue-50"}`}
                      asChild
                    >
                      <Link href={option.path}>
                        <option.icon
                          className={`${isActive && "text-primary"}`}
                        />
                        <span
                          className={`text-[16px] font-medium ${
                            isActive && "text-primary"
                          }`}
                        >
                          {option.name}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
