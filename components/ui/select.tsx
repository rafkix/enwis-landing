import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, hasError, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "h-12 w-full appearance-none rounded-[var(--radius-lg)] border bg-white px-4 pr-10 text-sm text-[var(--color-ink)] transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-deep)]/30",
            hasError
              ? "border-red-400 focus-visible:ring-red-400/30"
              : "border-[var(--color-line)] focus:border-[var(--color-deep)]",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-slate)]" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
