"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Proposal Overview" },
  { href: "/system-flows", label: "System Flows" },
  { href: "/sales-dashboard", label: "Sales Dashboard" },
  { href: "/jobber-integration", label: "Jobber Integration" },
  { href: "/technician-workflow", label: "Technician Workflow" },
  { href: "/integrations", label: "Node Quote Engine" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const pathname = usePathname();

  const sidebarClasses = cn(
    "fixed inset-y-0 left-0 z-40 w-64 border-r border-white/10 bg-slate-900/70 pt-16 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60 transform transition-transform duration-200 md:relative md:translate-x-0",
    isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
  );

  return (
    <>
      <aside className={sidebarClasses}>
        <nav className="p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-[hsl(var(--accent-purple))] text-white shadow-lg"
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/60 transition-opacity duration-200 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
}
