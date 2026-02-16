"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Sidebar } from "@/components/sidebar";

interface LayoutShellProps {
  children: React.ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      <Navigation onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

