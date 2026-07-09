import { cn } from "@/lib/utils";
import { TRUSTED_ORGS } from "@/lib/constants";

interface LogoCloudProps {
  tone?: "light" | "dark";
}

export function LogoCloud({ tone = "light" }: LogoCloudProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-70">
      {TRUSTED_ORGS.map((org) => (
        <span
          key={org}
          className={cn(
            "font-display text-sm font-medium tracking-tight",
            tone === "dark" ? "text-white/70" : "text-[var(--color-slate)]"
          )}
        >
          {org}
        </span>
      ))}
    </div>
  );
}
