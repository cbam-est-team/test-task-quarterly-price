"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Upload,
  RefreshCw,
  Calculator,
  Globe,
  Mail,
  Settings,
  MessageSquare,
  Menu,
  LogOut,
} from "lucide-react";
import clsx from "clsx";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "MAIN",
    items: [
      {
        label: "Dashboard & Reports",
        href: "/",
        icon: <LayoutDashboard size={20} />,
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        label: "Suppliers",
        href: "/suppliers",
        icon: <Users size={20} />,
      },
      {
        label: "Data Imports",
        href: "/data-imports",
        icon: <Upload size={20} />,
      },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      {
        label: "Imports & Emissions",
        href: "/imports-emissions",
        icon: <RefreshCw size={20} />,
      },
      {
        label: "Cost Calculator",
        href: "/cost-calculator",
        icon: <Calculator size={20} />,
      },
      {
        label: "Cost Map",
        href: "/cost-map",
        icon: <Globe size={20} />,
        badge: "NEW",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        label: "Contact Us",
        href: "/contact",
        icon: <Mail size={20} />,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: <Settings size={20} />,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "fixed left-0 top-0 h-screen flex flex-col border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      style={{
        backgroundColor: "var(--sidebar-bg)",
        borderColor: "var(--sidebar-border)",
      }}
    >
      {/* Header */}
      <div
        className={clsx(
          "flex items-center border-b h-16 px-4",
          collapsed ? "justify-center" : "justify-between"
        )}
        style={{ borderColor: "var(--sidebar-border)" }}
      >
        {!collapsed && (
          <span className="text-lg font-bold text-gray-900">CBAM ESTIMATOR</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navigation.map((section, sectionIdx) => (
          <div key={section.title} className={clsx(sectionIdx > 0 && "mt-6")}>
            {!collapsed && (
              <h3
                className="text-xs font-medium tracking-wider mb-2 px-4"
                style={{ color: "var(--sidebar-section)" }}
              >
                {section.title}
              </h3>
            )}
            <ul className="space-y-1 px-2">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors",
                        collapsed && "justify-center",
                        isActive
                          ? "text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      style={
                        isActive
                          ? { backgroundColor: "var(--sidebar-active)" }
                          : undefined
                      }
                      title={collapsed ? item.label : undefined}
                    >
                      <span
                        className={clsx(
                          isActive ? "text-white" : "text-gray-500"
                        )}
                      >
                        {item.icon}
                      </span>
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.label}</span>
                          {item.badge && (
                            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-500 text-white">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom items */}
      <div
        className="border-t py-4 px-2"
        style={{ borderColor: "var(--sidebar-border)" }}
      >
        <Link
          href="/feedback"
          className={clsx(
            "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors",
            collapsed && "justify-center",
            pathname === "/feedback" && "bg-gray-900 text-white"
          )}
          title={collapsed ? "Feedback" : undefined}
        >
          <MessageSquare
            size={20}
            className={pathname === "/feedback" ? "text-white" : "text-gray-500"}
          />
          {!collapsed && <span>Feedback</span>}
        </Link>
        <button
          className={clsx(
            "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors w-full mt-1",
            collapsed && "justify-center"
          )}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut size={20} className="text-gray-500" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
