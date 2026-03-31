"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Users,
  Upload,
  TrendingUp,
  Calculator,
  Map,
  Mail,
  Settings,
  MessageSquare,
  Menu,
} from "lucide-react";
import clsx from "clsx";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
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
        icon: <LayoutDashboard size={18} />,
      },
      {
        label: "Certificate Management",
        href: "/certificates",
        icon: <FileText size={18} />,
      },
    ],
  },
  {
    title: "DATA MANAGEMENT",
    items: [
      {
        label: "Suppliers",
        href: "/suppliers",
        icon: <Users size={18} />,
      },
      {
        label: "Data Imports",
        href: "/data-imports",
        icon: <Upload size={18} />,
      },
    ],
  },
  {
    title: "INSIGHTS",
    items: [
      {
        label: "Imports & Emissions",
        href: "/imports-emissions",
        icon: <TrendingUp size={18} />,
      },
      {
        label: "Cost Calculator",
        href: "/cost-calculator",
        icon: <Calculator size={18} />,
      },
      {
        label: "Cost Map",
        href: "/cost-map",
        icon: <Map size={18} />,
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        label: "Contact Us",
        href: "/contact",
        icon: <Mail size={18} />,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: <Settings size={18} />,
      },
      {
        label: "Feedback",
        href: "/feedback",
        icon: <MessageSquare size={18} />,
      },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col" style={{ backgroundColor: "var(--sidebar-bg)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700">
        <span className="text-sm text-slate-400">Navbar - 2</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        <div className="rounded-lg border p-3" style={{ borderColor: "var(--sidebar-border)" }}>
          {/* Menu icon */}
          <div className="flex justify-end mb-2">
            <button className="p-1 hover:bg-slate-700 rounded">
              <Menu size={18} className="text-slate-400" />
            </button>
          </div>

          {navigation.map((section, sectionIdx) => (
            <div key={section.title} className={clsx(sectionIdx > 0 && "mt-4")}>
              <h3
                className="text-xs font-medium tracking-wider mb-2 px-2"
                style={{ color: "var(--sidebar-section)" }}
              >
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                          isActive
                            ? "text-white"
                            : "text-slate-300 hover:bg-slate-700"
                        )}
                        style={isActive ? { backgroundColor: "var(--sidebar-active)" } : undefined}
                      >
                        <span className={clsx(isActive ? "text-white" : "text-slate-400")}>
                          {item.icon}
                        </span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
