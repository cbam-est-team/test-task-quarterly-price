"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Calculator,
  Globe,
  Mail,
  Settings,
  MessageSquare,
  LogOut,
  Menu,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  {
    title: "Dashboard & Reports",
    url: "/",
    icon: LayoutDashboard,
  },
];

const managementItems = [
  {
    title: "Suppliers",
    url: "/suppliers",
    icon: Users,
  },
  {
    title: "Data Imports",
    url: "/data-imports",
    icon: FileText,
  },
];

const insightItems = [
  {
    title: "Imports & Emissions",
    url: "/imports-emissions",
    icon: BarChart3,
  },
  {
    title: "Cost Calculator",
    url: "/cost-calculator",
    icon: Calculator,
  },
  {
    title: "Cost Map",
    url: "/cost-map",
    icon: Globe,
    badge: "NEW",
  },
];

const supportItems = [
  {
    title: "Contact Us",
    url: "/contact",
    icon: Mail,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="h-12 px-3 flex items-center justify-center border-b border-sidebar-border">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-white/10 rounded-md transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-white/70" />
        </button>
      </SidebarHeader>

      <SidebarContent className="px-2 pt-2">
        <SidebarGroup className="p-0 pb-2">
          <SidebarGroupLabel className="px-3 py-2 text-[11px] font-semibold tracking-wider text-teal-400 uppercase">
            MAIN
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white data-[active=true]:bg-teal-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0 pb-2">
          <SidebarGroupLabel className="px-3 py-2 text-[11px] font-semibold tracking-wider text-teal-400 uppercase">
            MANAGEMENT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white data-[active=true]:bg-teal-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0 pb-2">
          <SidebarGroupLabel className="px-3 py-2 text-[11px] font-semibold tracking-wider text-teal-400 uppercase">
            INSIGHTS
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {insightItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white data-[active=true]:bg-teal-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.badge && (
                    <SidebarMenuBadge className="bg-teal-500 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                      {item.badge}
                    </SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="p-0 pb-2">
          <SidebarGroupLabel className="px-3 py-2 text-[11px] font-semibold tracking-wider text-teal-400 uppercase">
            SUPPORT
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white data-[active=true]:bg-teal-500 data-[active=true]:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto px-2 pb-4">
        <SidebarSeparator className="bg-sidebar-border mb-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Feedback"
              className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white"
            >
              <Link href="/feedback">
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">Feedback</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator className="bg-sidebar-border my-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="h-10 px-3 rounded-md text-white/90 hover:bg-teal-500 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              <span className="text-sm">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
