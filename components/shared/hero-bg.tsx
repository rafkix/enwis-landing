/**
 * Reusable ambient background for hero/page-header sections.
 * Two glow blurs + a subtle dot grid — the visual signature of Enwis pages.
 */
export function HeroBg() {
  return (
    <>
      {/* Ambient layered background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[var(--color-volt)]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-[-15%] h-[420px] w-[420px] rounded-full bg-[var(--color-deep)]/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"
      />
    </>
  );
}
