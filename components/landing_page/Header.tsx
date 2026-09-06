"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { House, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Areas We Serve", href: "#areas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <House className="h-7 w-7 shrink-0 text-green-950 sm:h-8 sm:w-8" />
          <span className="text-lg font-bold tracking-tighter uppercase sm:text-xl">
            Fambrood
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <ul className="flex gap-6 text-base font-semibold lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="capitalize transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#quote" className={buttonVariants({ size: "lg" })}>
            Get a Free Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-green-950 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t transition-[grid-template-rows] duration-200 ease-in-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0"
        )}
      >
        <div className="min-h-0">
          <ul className="flex flex-col gap-1 px-4 py-3 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 capitalize transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
