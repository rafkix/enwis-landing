"use client";

import { useEffect, useRef } from "react";

type AdNetwork = "adsense" | "yandex";

interface AdSlotProps {
  network: AdNetwork;
  /** AdSense: data-ad-slot id. Yandex: blockId (RTB or Direct). */
  slotId: string;
  className?: string;
  /** Optional label shown above the ad, e.g. "Reklama" — improves trust/compliance. */
  label?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
    yaContextCb?: Array<() => void>;
    Ya?: {
      Context: {
        AdvManager: {
          render: (opts: { blockId: string; renderTo: string }) => void;
        };
      };
    };
  }
}

/**
 * Single ad container that renders either a Google AdSense unit
 * or a Yandex.Direct (RTB) unit depending on `network`.
 * Both scripts are loaded once globally in <head> (see layout.tsx),
 * this component only mounts the ad unit itself.
 */
export function AdSlot({
  network,
  slotId,
  className,
  label = "Reklama",
}: AdSlotProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    renderedRef.current = true;

    if (network === "adsense") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense script not yet loaded or blocked — fail silently
      }
    }

    if (network === "yandex") {
      const el = containerRef.current;
      if (!el) return;
      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        window.Ya?.Context.AdvManager.render({
          blockId: slotId,
          renderTo: el.id,
        });
      });
    }
  }, [network, slotId]);

  return (
    <div className={className}>
      <p className="mb-1.5 text-center text-[10px] uppercase tracking-wide text-[var(--color-slate-light)]">
        {label}
      </p>
      {network === "adsense" && (
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
      {network === "yandex" && (
        <div id={`yandex_rtb_${slotId}`} ref={containerRef} />
      )}
    </div>
  );
}
