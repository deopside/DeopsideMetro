"use client";

import { Train } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-background border-b border-border">
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
          <Train className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
        </div>
        <h1 className="text-base font-semibold tracking-tight text-foreground">
          Moscow Metro Navigator
        </h1>
      </div>
      <ThemeToggle />
    </header>
  );
}
