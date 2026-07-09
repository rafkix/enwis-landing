import { Navigation } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const { lat, lng } = COMPANY_INFO.coordinates;

// Small bounding box around the office coordinates for a street-level view.
const LAT_DELTA = 0.006;
const LNG_DELTA = 0.012;
const bbox = [lng - LNG_DELTA, lat - LAT_DELTA, lng + LNG_DELTA, lat + LAT_DELTA].join(",");

const EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
const VIEW_LARGER_HREF = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;

/**
 * Real, official map embed via OpenStreetMap — no API key required.
 * To swap for Google Maps later: replace EMBED_SRC with
 * `https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=${lat},${lng}`.
 */
export function MapPlaceholder() {
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-line)] bg-[var(--color-mist)]">
      <iframe
        title="Enwis manzili — xarita"
        src={EMBED_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full grayscale-[15%]"
      />

      {/* Floating address card, Maps-style, sits above the live embed */}
      <a
        href={VIEW_LARGER_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-[var(--radius-lg)] bg-white/95 px-4 py-3 shadow-[var(--shadow-soft-sm)] backdrop-blur-sm transition-colors hover:bg-white"
      >
        <div className="min-w-0">
          <p className="font-display text-sm font-medium leading-tight text-[var(--color-ink)]">
            Tashkent IT Park
          </p>
          <p className="truncate text-xs text-[var(--color-slate)]">{COMPANY_INFO.address}</p>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)]">
          <Navigation className="h-3.5 w-3.5 text-[var(--color-deep)]" />
        </span>
      </a>
    </div>
  );
}
