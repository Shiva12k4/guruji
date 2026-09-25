"use client";

import { useState } from "react";
import { INDIA_MAP_PATHS, INDIA_MAP_VIEWBOX } from "./indiaMapPaths";
import { STATE_NAMES, type StateCode } from "@/constants/mahaYagyaData";

const ACTIVE_IDS = new Set(Object.keys(STATE_NAMES));

export default function IndiaMap({
  selectedState,
  onSelect,
  counts,
}: {
  selectedState: StateCode | "All";
  onSelect: (state: StateCode | "All") => void;
  counts: Record<StateCode, number>;
}) {
  const [hovered, setHovered] = useState<StateCode | null>(null);

  const displayed = hovered ?? (selectedState !== "All" ? selectedState : null);
  const displayName = displayed ? STATE_NAMES[displayed] : "Poora Bharat";
  const displayCount = displayed ? counts[displayed] ?? 0 : null;

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox={INDIA_MAP_VIEWBOX}
        className="h-auto w-full max-w-xs"
        role="img"
        aria-label="India map, click a highlighted state to filter"
      >
        {INDIA_MAP_PATHS.map((p) => {
          const isActive = ACTIVE_IDS.has(p.id);
          const code = p.id as StateCode;
          const isSelected = selectedState === code;
          const isHovered = hovered === code;

          if (!isActive) {
            return <path key={p.id} d={p.d} fill="#f3da8c" fillOpacity={0.12} stroke="#f3da8c" strokeOpacity={0.25} strokeWidth={0.6} />;
          }

          return (
            <path
              key={p.id}
              d={p.d}
              onClick={() => onSelect(isSelected ? "All" : code)}
              onMouseEnter={() => setHovered(code)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer transition-colors duration-200"
              fill={isSelected || isHovered ? "#ea560c" : "#f97316"}
              fillOpacity={isSelected ? 1 : isHovered ? 0.9 : 0.8}
              stroke="#1a0a04"
              strokeWidth={0.8}
            />
          );
        })}
      </svg>

      <div className="mt-4 text-center">
        <p className="font-heading text-lg font-semibold text-gold-100">
          {displayName}
        </p>
        {displayCount !== null && (
          <p className="font-body text-sm text-saffron-300">
            {displayCount} Yagya
          </p>
        )}
        {selectedState !== "All" && (
          <button
            type="button"
            onClick={() => onSelect("All")}
            className="mt-1 font-body text-xs font-medium text-gold-300 underline hover:text-gold-100"
          >
            Sabhi Rajya dikhayein
          </button>
        )}
      </div>
    </div>
  );
}
