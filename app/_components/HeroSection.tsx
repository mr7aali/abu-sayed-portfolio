import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { socials, stats } from "../_data/portfolio";

export function HeroSection() {
  return (
    <section
      className="site-container grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,500px)] lg:py-16"
      id="home"
    >
      <div className="max-w-3xl">
        <Badge className="h-7 rounded-lg border-primary/15 bg-white px-3 text-primary shadow-sm">
          <Sparkles aria-hidden="true" />
          Available for product design work
        </Badge>
        <p className="mt-7 text-lg font-semibold text-slate-600">
          Hi, I am <span className="text-slate-950">Md. Abu Sayed</span>
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
          UI/UX designer for clean digital products.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          I shape web and mobile experiences with crisp interfaces, thoughtful
          flows, and handoff-ready design systems.
        </p>

        <div
          className="mt-7 flex flex-wrap gap-3"
          aria-label="Social profiles"
        >
          {socials.map((social) => (
            <a
              className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 shadow-sm transition hover:border-primary/30 hover:text-primary hover:shadow-md"
              href="#contact"
              key={social}
              aria-label={`${social} profile`}
            >
              {social}
            </a>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button
            className="h-12 rounded-lg bg-primary px-6 text-base font-bold text-white shadow-[0_18px_40px_rgba(15,141,232,0.25)] hover:bg-primary/90"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Hire Me
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <Button
            className="h-12 rounded-lg border-slate-200 bg-white px-6 text-base font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            nativeButton={false}
            render={<a href="#about" />}
            variant="outline"
          >
            <ArrowDownToLine aria-hidden="true" />
            Download CV
          </Button>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card
              className="rounded-lg border-slate-200 bg-white py-0 shadow-sm"
              key={stat.label}
            >
              <CardContent className="p-5">
                <strong className="block text-3xl font-black text-slate-950">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="glass-panel relative hidden overflow-hidden rounded-lg px-6 pt-16 md:grid md:min-h-[430px] md:items-end md:pt-8">
        <div className="absolute left-6 top-6 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm">
          Product thinking + visual systems
        </div>
        <Image
          src="/banner-images.png"
          alt="Md. Abu Sayed holding a microphone"
          width={2000}
          height={2432}
          priority
          className="hero-banner-image justify-self-center"
        />
      </div>
    </section>
  );
}
