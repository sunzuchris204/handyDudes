"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/system-flows", label: "System Flows" },
  { href: "/lead-capture", label: "Lead Capture" },
  { href: "/sales-dispatch", label: "Sales & Dispatch Dashboard" },
  { href: "/jobber-integration", label: "Jobber Integration" },
  { href: "/technician-workflow", label: "Technician Workflow" },
  { href: "/automations-messaging", label: "Automations & Messaging" },
  { href: "/manager-dashboard", label: "Manager Dashboard" },
  { href: "/integrations", label: "Integrations" },
  { href: "/key-decisions", label: "Key Decisions" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-border bg-card/50 pt-16">
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
                      ? "bg-[#ef4444] text-white shadow-lg"
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
