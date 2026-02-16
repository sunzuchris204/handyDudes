"use client";

import { Menu } from "lucide-react";

interface NavigationProps {
  onMenuClick?: () => void;
}

export function Navigation({ onMenuClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <button
          type="button"
          className="mr-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground hover:bg-muted md:hidden"
          aria-label="Open navigation"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <h1 className="truncate text-base font-bold text-foreground sm:text-lg">
            Handy Dudes Lead-to-Job Automation Platform
          </h1>
          <div className="hidden text-xs font-medium text-muted-foreground sm:block">
            Architecture Documentation
          </div>
        </div>

        <div className="ml-3 text-xs font-medium text-muted-foreground sm:ml-auto sm:text-sm sm:hidden">
          Docs
        </div>
      </div>
    </nav>
  );
}
