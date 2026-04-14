"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, Search } from "lucide-react";
import { AppHeader } from "@/components/app-header";
import { AppFooter } from "@/components/app-footer";
import { StationPicker } from "@/components/station-picker";
import { RouteVisualization } from "@/components/route-visualization";
import { Slider } from "@/components/ui/slider";
import { runtimeMetroGraph, runtimeMetroStations } from "@/src/data/metroRuntime";
import { findRouteAlternativesAsync } from "@/src/utils/pathFinder";
import { validateTransferNodes } from "@/src/utils/graphValidator";

export default function Home() {
  const [startStation, setStartStation] = useState<string | undefined>("planernaya");
  const [endStation, setEndStation] = useState<string | undefined>();
  const [isPlanning, setIsPlanning] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [routeOptions, setRouteOptions] = useState<
    {
      path: {
        id: string;
        name: string;
        color: string;
        lineName: string;
        line?: string;
        connections: string[];
      }[];
      stations: number;
      transfers: number;
      cost: number;
      estimatedTime: number;
    }[]
  >([]);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState(0);
  const [transferPenalty, setTransferPenalty] = useState(10);
  const [mcdPenalty, setMcdPenalty] = useState(15);

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
    if (routeOptions.length > 0) {
      app.MainButton.show();
    } else {
      app.MainButton.hide();
    }
  }, [routeOptions.length]);

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
    const alternatives = await findRouteAlternativesAsync(startStation, endStation, graph, {
      transferPenalty,
      mcdPenalty,
      maxAlternatives: 3,
    });
    setRouteOptions(alternatives);
    setSelectedRouteIndex(0);
    setIsPlanning(false);
  };

  const handleSwap = () => {
    const temp = startStation;
    setStartStation(endStation);
    setEndStation(temp);
    setRouteOptions([]);
    setSelectedRouteIndex(0);
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
              setRouteOptions([]);
              setSelectedRouteIndex(0);
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
              setRouteOptions([]);
              setSelectedRouteIndex(0);
              setHasSearched(false);
            }}
          />
        </section>

        <section className="rounded-2xl bg-card border border-border shadow-sm p-3 flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Приоритеты маршрута
          </p>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Штраф за пересадку</span>
              <span className="text-xs font-semibold text-foreground">{transferPenalty}</span>
            </div>
            <Slider
              value={[transferPenalty]}
              min={0}
              max={20}
              step={1}
              onValueChange={(value) => setTransferPenalty(value[0] ?? 10)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Штраф за МЦД</span>
              <span className="text-xs font-semibold text-foreground">{mcdPenalty}</span>
            </div>
            <Slider
              value={[mcdPenalty]}
              min={0}
              max={30}
              step={1}
              onValueChange={(value) => setMcdPenalty(value[0] ?? 15)}
            />
          </div>
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

        {routeOptions.length > 0 && (
          <section className="rounded-2xl bg-card border border-border shadow-sm p-3 flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Варианты маршрута
            </p>
            <div className="flex flex-col gap-2 max-h-36 overflow-y-auto">
              {routeOptions.map((option, index) => (
                <button
                  key={`route-option-${index}`}
                  type="button"
                  onClick={() => setSelectedRouteIndex(index)}
                  className={`rounded-xl border px-3 py-2 text-left transition-colors ${
                    index === selectedRouteIndex
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background hover:bg-secondary"
                  }`}
                >
                  <div className="text-sm font-semibold text-foreground">Маршрут {index + 1}</div>
                  <div className="text-xs text-muted-foreground">
                    Станций: {option.stations} | Пересадок: {option.transfers} | Стоимость:{" "}
                    {option.cost.toFixed(1)}
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Route visualization — fills remaining space */}
        <RouteVisualization
          route={routeOptions[selectedRouteIndex]?.path || []}
          routeCost={routeOptions[selectedRouteIndex]?.cost}
          isPlanning={isPlanning}
          showNotFound={hasSearched && routeOptions.length === 0 && !isPlanning}
        />
      </main>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
