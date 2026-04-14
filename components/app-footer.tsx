"use client";

import { Wifi } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="flex items-center justify-between px-4 py-3 border-t border-border">
      <p className="text-xs text-muted-foreground">
        Powered by{" "}
        <span className="text-primary font-medium">Deopside Navigator</span>
      </p>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Wifi className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
        <span>Online</span>
      </div>
    </footer>
  );
}
