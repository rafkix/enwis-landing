import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-[var(--radius-lg)] border bg-white px-4 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-slate-light)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-deep)]/30",
          hasError
            ? "border-red-400 focus-visible:ring-red-400/30"
            : "border-[var(--color-line)] focus:border-[var(--color-deep)]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
