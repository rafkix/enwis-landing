import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-[var(--radius-lg)] border bg-white px-4 py-3 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-slate-light)]",
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
Textarea.displayName = "Textarea";

export { Textarea };
