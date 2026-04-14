"use client";

import { MapPinned, ArrowRight } from "lucide-react";
import { useMemo } from "react";

interface RouteVisualizationProps {
  route?: {
    id: string;
    name: string;
    color: string;
    lineName: string;
  }[];
  routeCost?: number;
  isPlanning?: boolean;
  showNotFound?: boolean;
}

// Decorative metro line blobs
const METRO_LINES = [
  { color: "#E42313", label: "Sokolnicheskaya", x: "12%", y: "28%", width: "55%", angle: 12 },
  { color: "#003088", label: "Zamoskvoretskaya", x: "22%", y: "45%", width: "50%", angle: -8 },
  { color: "#009A49", label: "Arbatsko-Pokrovskaya", x: "8%", y: "60%", width: "60%", angle: 6 },
  { color: "#0078BE", label: "Filevskaya", x: "30%", y: "72%", width: "45%", angle: -12 },
  { color: "#8D3A86", label: "Koltsevaya", x: "18%", y: "38%", width: "65%", angle: 0 },
];

export function RouteVisualization({
  route = [],
  routeCost,
  isPlanning = false,
  showNotFound = false,
}: RouteVisualizationProps) {
  const hasRoute = route.length > 0;
  const transfersCount = useMemo(() => {
    let count = 0;
    for (let i = 0; i < route.length - 1; i += 1) {
      if (route[i].color !== route[i + 1].color) count += 1;
    }
    return count;
  }, [route]);
  const estimatedTime = useMemo(() => {
    return route.length * 2.5 + transfersCount * 5;
  }, [route.length, transfersCount]);

  return (
    <div
      className="relative flex-1 rounded-2xl border-2 border-dashed border-border bg-secondary overflow-hidden"
      role="region"
      aria-label="Route visualization area"
    >
      {isPlanning ? (
        <div className="h-full p-4 space-y-3 animate-pulse">
          <div className="h-16 rounded-xl bg-muted/70" />
          <div className="h-12 rounded-xl bg-muted/70" />
          <div className="h-12 rounded-xl bg-muted/70" />
          <div className="h-12 rounded-xl bg-muted/70" />
        </div>
      ) : !hasRoute ? (
        <>
          {/* Decorative faded metro lines */}
          <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
            {METRO_LINES.map((line) => (
              <div
                key={line.label}
                className="absolute h-1 rounded-full opacity-10"
                style={{
                  backgroundColor: line.color,
                  left: line.x,
                  top: line.y,
                  width: line.width,
                  transform: `rotate(${line.angle}deg)`,
                  transformOrigin: "left center",
                }}
              />
            ))}

            {/* Decorative station dots */}
            <div className="absolute top-[26%] left-[12%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute top-[26%] left-[44%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute top-[58%] left-[8%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute top-[43%] left-[22%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute top-[70%] left-[55%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
            <div className="absolute top-[37%] left-[63%] w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
          </div>

          {/* Empty state message */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-border/60">
              <MapPinned className="w-7 h-7 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-foreground/70 leading-relaxed text-balance">
                Enter stations and tap &ldquo;Plan Route&rdquo;
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed text-balance">
                {showNotFound
                  ? "Маршрут не найден. Проверьте правильность названий"
                  : "to generate your path here"}
              </p>
            </div>
            {/* Decorative breadcrumb hint */}
            <div className="flex items-center gap-1.5 mt-1 opacity-40" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <div className="w-10 h-px bg-muted-foreground/40" />
              <ArrowRight className="w-3 h-3 text-muted-foreground" />
              <div className="w-10 h-px bg-muted-foreground/40" />
              <span className="w-2 h-2 rounded-full bg-muted-foreground/50" />
            </div>
          </div>
        </>
      ) : (
        <div className="h-full overflow-y-auto p-4">
          <div className="rounded-xl border border-border bg-card p-3 mb-3">
            <p className="text-sm font-semibold text-foreground mb-1">Итого</p>
            <p className="text-xs text-muted-foreground">Станций в пути: {route.length}</p>
            <p className="text-xs text-muted-foreground">Пересадок: {transfersCount}</p>
            <p className="text-xs text-muted-foreground">
              Примерное время: {estimatedTime.toFixed(1)} мин
            </p>
            {typeof routeCost === "number" && (
              <p className="text-xs text-muted-foreground">
                Общая стоимость: {routeCost.toFixed(1)}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2.5">
            {route.map((station, index) => {
              const nextStation = route[index + 1];
              const hasTransfer = nextStation && nextStation.color !== station.color;

              return (
                <div key={`${station.id}-${index}`} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-card/70 px-3 py-2.5">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: station.color }}
                      aria-hidden="true"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">{station.name}</span>
                      <span className="text-xs text-muted-foreground">{station.lineName}</span>
                    </div>
                  </div>

                  {hasTransfer && (
                    <div className="ml-6 text-xs font-medium text-amber-500">
                      Пересадка на {nextStation.lineName}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
