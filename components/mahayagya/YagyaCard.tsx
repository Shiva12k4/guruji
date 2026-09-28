import FlameIcon from "./FlameIcon";
import type { MahaYagyaEntry } from "@/constants/mahaYagyaData";

export default function YagyaCard({ entry }: { entry: MahaYagyaEntry }) {
  return (
    <div className="group flex flex-col items-start gap-2 rounded-xl border border-gold-700/40 bg-[#3d2410]/70 p-4 shadow-sm transition-all duration-300 md:hover:-translate-y-1 md:hover:scale-[1.03] md:hover:border-saffron-400 md:hover:shadow-[0_0_18px_rgba(234,86,12,0.35)] active:scale-[0.98] active:border-saffron-400">
      <FlameIcon className="h-6 w-6 shrink-0" />
      <span className="font-heading text-lg font-semibold text-gold-100">
        {entry.year}
      </span>
      <span className="font-body text-xs leading-snug text-saffron-100/70">
        {entry.location}
      </span>
    </div>
  );
}
