"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, APP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Pages whose hero section sits on a dark background — the navbar needs
// light text/logo here until the user scrolls past it onto a white bg.
// const DARK_HERO_PATHS = ["/b2b"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // const isDarkHero = DARK_HERO_PATHS.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-editorial)]",
        scrolled
          ? "border-b border-[var(--color-line)] bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-editorial flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Enwis — bosh sahifa"
        >
          <Image
            src="/header.png"
            alt="Enwis"
            width={128}
            height={32}
            priority
            className={cn(
              "h-12 w-auto transition-all duration-300",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[0.925rem] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-deep)]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="sm"
            asChild
          >
            <Link href="/contact#demo">Demo ko&apos;rish</Link>
          </Button>
          <Button variant="primary" size="sm" asChild>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer">
              Boshlash
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menyuni ochish"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
          )}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--color-line)] bg-white lg:hidden"
          >
            <div className="container-editorial flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-mist)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 px-3">
                <Button variant="outline" size="md" asChild>
                  <Link href="/contact#demo">Demo ko&apos;rish</Link>
                </Button>
                <Button variant="primary" size="md" asChild>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    Boshlash
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
