"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface StationPickerProps {
  label: string;
  placeholder: string;
  value?: string; // station id
  stations: {
    id: string;
    name: string;
    color: string;
    lineName: string;
  }[];
  autoFocus?: boolean;
  dotColor?: string;
  onChange?: (value: string) => void;
}

// Helper to highlight matching text
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query.trim()) {
    return <span>{text}</span>;
  }

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const matchIndex = lowerText.indexOf(lowerQuery);

  if (matchIndex === -1) {
    return <span>{text}</span>;
  }

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <span>
      {before}
      <span className="text-primary font-semibold">{match}</span>
      {after}
    </span>
  );
}

export function StationPicker({
  label,
  placeholder,
  value = "",
  stations,
  autoFocus = false,
  dotColor = "bg-primary",
  onChange,
}: StationPickerProps) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stationMap = useMemo(() => {
    return stations.reduce<Record<string, (typeof stations)[number]>>((acc, station) => {
      acc[station.id] = station;
      return acc;
    }, {});
  }, [stations]);

  // Sync external value changes
  useEffect(() => {
    setInputValue(value ? stationMap[value]?.name ?? "" : "");
  }, [value, stationMap]);

  const filteredStations = useMemo(() => {
    if (!inputValue.trim()) {
      return [];
    }

    const query = inputValue.toLowerCase();
    return stations.filter((station) =>
      station.name.toLowerCase().includes(query)
    );
  }, [inputValue, stations]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(newValue.trim().length > 0);
    onChange?.("");
  };

  const handleSelectStation = (station: (typeof stations)[number]) => {
    setInputValue(station.name);
    setIsOpen(false);
    onChange?.(station.id);
    inputRef.current?.blur();
  };

  const handleClear = () => {
    setInputValue("");
    setIsOpen(false);
    onChange?.("");
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    if (inputValue.trim().length > 0 && filteredStations.length > 0) {
      setIsOpen(true);
    }
  };

  const showDropdown = isOpen && filteredStations.length > 0;

  return (
    <div className="flex flex-col gap-1 relative" ref={containerRef}>
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider pl-1">
        {label}
      </label>

      {/* Input container */}
      <div className="relative">
        <div
          className={`flex items-center gap-3 w-full px-4 py-3.5 rounded-xl bg-secondary border transition-all ${
            isOpen
              ? "border-primary ring-2 ring-primary/20"
              : "border-border hover:border-primary/40"
          }`}
        >
          {/* Colored line dot */}
          <span
            className={`flex-shrink-0 w-3 h-3 rounded-full ${dotColor} shadow-sm`}
            aria-hidden="true"
          />

          {/* Search input */}
          <input
            ref={inputRef}
            type="text"
            autoFocus={autoFocus}
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-base font-medium leading-none text-foreground placeholder:text-muted-foreground outline-none"
            aria-label={label}
            autoComplete="off"
          />

          {/* Clear button */}
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="flex-shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Clear input"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Map pin icon */}
          <MapPin
            className="flex-shrink-0 w-4.5 h-4.5 text-muted-foreground"
            aria-hidden="true"
          />
        </div>

        {/* Dropdown suggestions */}
        <AnimatePresence>
          {showDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-2 z-50 overflow-hidden rounded-xl border border-border bg-popover/95 backdrop-blur-xl shadow-lg shadow-black/10"
            >
              <ul className="max-h-48 overflow-y-auto py-1.5" role="listbox">
                {filteredStations.map((station) => (
                  <li key={station.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectStation(station)}
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-left hover:bg-primary/10 active:bg-primary/20 transition-colors"
                      role="option"
                      aria-selected={station.id === value}
                    >
                      <span
                        className="flex-shrink-0 w-2.5 h-2.5 rounded-full opacity-80"
                        style={{ backgroundColor: station.color }}
                        aria-hidden="true"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          <HighlightedText text={station.name} query={inputValue} />
                        </span>
                        <span className="text-xs text-muted-foreground">{station.lineName}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
