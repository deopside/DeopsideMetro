"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, Search } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { StationPicker } from "@/components/station-picker";
import { RouteVisualization } from "@/components/route-visualization";
import { runtimeMetroGraph, runtimeMetroStations } from "@/src/data/metroRuntime";
import { findShortestPathAsync } from "@/src/utils/pathFinder";
import { validateTransferNodes } from "@/src/utils/graphValidator";

export default function Home() {
  const [startStation, setStartStation] = useState<string | undefined>("planernaya");
  const [endStation, setEndStation] = useState<string | undefined>();
  const [isPlanning, setIsPlanning] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [route, setRoute] = useState<
    {
      id: string;
      name: string;
      color: string;
      lineName: string;
      connections: string[];
    }[]
  >([]);

  const stationOptions = useMemo(() => runtimeMetroStations, []);
  const graph = useMemo(() => runtimeMetroGraph, []);

  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (!app) return;

    app.ready();
    app.expand();

    const isDark = app.colorScheme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const app = window.Telegram?.WebApp;
    if (!app?.MainButton) return;

    app.MainButton.setText("Построить путь");
    if (route.length > 0) {
      app.MainButton.show();
    } else {
      app.MainButton.hide();
    }
  }, [route.length]);

  useEffect(() => {
    const issues = validateTransferNodes(graph);
    if (issues.length > 0) {
      console.warn("Transfer validation issues:", issues.slice(0, 10));
    }
  }, [graph]);

  const handlePlanRoute = async () => {
    if (!startStation || !endStation) return;

    setIsPlanning(true);
    setHasSearched(true);
    const result = await findShortestPathAsync(startStation, endStation, graph);
    setRoute(result);
    setIsPlanning(false);
  };

  const handleSwap = () => {
    const temp = startStation;
    setStartStation(endStation);
    setEndStation(temp);
    setRoute([]);
    setHasSearched(false);
  };

  const canPlan = Boolean(startStation && endStation);

  return (
    <div className="flex flex-col h-svh max-w-md mx-auto bg-background">
      {/* Header */}
      <AppHeader />

      {/* Main content */}
      <main className="flex flex-col flex-1 gap-4 px-4 pt-5 pb-2 overflow-hidden">

        {/* Station selector card */}
        <section
          className="rounded-2xl bg-card border border-border shadow-sm px-4 py-4 flex flex-col gap-3"
          aria-label="Station selection"
        >
          <StationPicker
            label="From"
            placeholder="Search start station"
            value={startStation}
            stations={stationOptions}
            dotColor="bg-primary"
            onChange={(value) => {
              setStartStation(value || undefined);
              setRoute([]);
              setHasSearched(false);
            }}
          />

          {/* Swap button */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-border" aria-hidden="true" />
            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap start and end stations"
              className="flex items-center justify-center w-8 h-8 rounded-full border border-border bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all active:scale-90"
            >
              <ArrowDownUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
            <div className="flex-1 h-px bg-border" aria-hidden="true" />
          </div>

          <StationPicker
            label="To"
            placeholder="Search end station"
            value={endStation}
            stations={stationOptions}
            autoFocus
            dotColor="bg-destructive"
            onChange={(value) => {
              setEndStation(value || undefined);
              setRoute([]);
              setHasSearched(false);
            }}
          />
        </section>

        {/* Plan Route button */}
        <button
          type="button"
          onClick={handlePlanRoute}
          disabled={!canPlan || isPlanning}
          aria-label="Plan route"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-base transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
        >
          {isPlanning ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" aria-hidden="true" />
              Planning route…
            </>
          ) : (
            <>
              <Search className="w-4.5 h-4.5" aria-hidden="true" />
              Plan Route
            </>
          )}
        </button>

        {/* Route visualization — fills remaining space */}
        <RouteVisualization route={route} isPlanning={isPlanning} showNotFound={hasSearched && route.length === 0 && !isPlanning} />
      </main>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
