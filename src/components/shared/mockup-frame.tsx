import { cn } from "@/lib/utils";

interface MockupFrameProps {
  children: React.ReactNode;
  className?: string;
  path?: string;
}

/**
 * Browser-chrome frame used to make dashboard previews read as a real,
 * running product rather than a floating illustration.
 */
export function MockupFrame({ children, className, path = "app.enwis.uz" }: MockupFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft-lg)]",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-mist)] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] text-[var(--color-slate)] font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-volt)]" />
          {path}
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
