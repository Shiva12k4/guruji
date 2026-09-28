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
        className="h-auto w-full max-w-none"
        role="img"
        aria-label="India map, click a highlighted state to filter"
      >
        <defs>
          <filter id="state-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {INDIA_MAP_PATHS.map((p) => {
          const isActive = ACTIVE_IDS.has(p.id);
          const code = p.id as StateCode;
          const isSelected = selectedState === code;
          const isHovered = hovered === code;

          if (!isActive) {
            return (
              <path
                key={p.id}
                d={p.d}
                fill="#5a3a1c"
                fillOpacity={0.85}
                stroke="#c99a4e"
                strokeOpacity={0.5}
                strokeWidth={0.7}
              />
            );
          }

          return (
            <path
              key={p.id}
              d={p.d}
              onClick={() => onSelect(isSelected ? "All" : code)}
              onMouseEnter={() => setHovered(code)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer transition-colors duration-200"
              fill={isSelected || isHovered ? "#ff8c3d" : "#ea560c"}
              fillOpacity={isSelected ? 1 : isHovered ? 0.95 : 0.85}
              stroke="#f3da8c"
              strokeOpacity={isSelected || isHovered ? 0.8 : 0.4}
              strokeWidth={0.9}
              filter={isSelected || isHovered ? "url(#state-glow)" : undefined}
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
