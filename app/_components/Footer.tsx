import { navItems, socials } from "../_data/portfolio";
import { Separator } from "@/components/ui/separator";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="site-container py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground"
            aria-label="Footer navigation"
          >
            {navItems.map((item) => (
              <a
                className="transition hover:text-primary"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <Separator className="my-6 bg-slate-200" />
        <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Md. Abu Sayed. All rights reserved.</p>
          <div className="flex gap-2" aria-label="Social profiles">
            {socials.map((social) => (
              <a
                className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold transition hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                href="#contact"
                key={social}
              >
                {social}
              </a>
            ))}
          </div>
          <strong className="font-medium">Designed by mdsayed.abu@gmail.com</strong>
        </div>
      </div>
    </footer>
  );
}
