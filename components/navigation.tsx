"use client";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto flex h-16 items-center px-6">
        <h1 className="text-lg font-bold text-foreground">
          Handy Dudes Lead-to-Job Automation Platform
        </h1>
        <div className="ml-auto text-sm font-medium text-muted-foreground">
          Architecture Documentation
        </div>
      </div>
    </nav>
  );
}
