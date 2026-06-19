"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import { navItems } from "../_data/portfolio";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header-animate sticky top-4 z-40 mx-auto mt-5 w-[min(var(--page-width),calc(100%_-_48px))]">
      <div className="glass-panel flex min-h-18 items-center justify-between gap-4 rounded-lg px-4 py-3 md:px-5">
        <Logo />
        <nav
          className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              className="transition hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button
          className="hidden h-11 rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(15,141,232,0.22)] hover:bg-primary/90 md:inline-flex"
          nativeButton={false}
          render={<a href="#contact" />}
        >
          Hire Me
          <ArrowUpRight aria-hidden="true" />
        </Button>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                className="ml-auto border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 lg:hidden"
                size="icon-lg"
                variant="outline"
                aria-label="Open navigation"
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="border-slate-200 bg-white text-slate-950">
            <SheetHeader>
              <SheetTitle className="text-slate-950">Navigation</SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Jump to a portfolio section.
              </SheetDescription>
            </SheetHeader>
            <nav className="grid gap-2 px-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-primary"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-4">
              <Button
                className="h-11 w-full rounded-lg bg-primary text-white hover:bg-primary/90"
                nativeButton={false}
                render={<a href="#contact" />}
              >
                Hire Me
                <ArrowUpRight aria-hidden="true" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
