import Image from "next/image";
import { ArrowDownToLine, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutCards } from "../_data/portfolio";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="glass-panel grid items-center gap-8 overflow-hidden rounded-lg p-6 md:grid-cols-[minmax(0,1fr)_minmax(280px,390px)] md:p-10">
        <div className="pb-2">
          <Badge className="h-7 rounded-lg border-primary/15 bg-white px-3 text-primary shadow-sm">
            UI/UX Designer
          </Badge>
          <h2 className="mt-4 text-4xl font-black tracking-normal text-slate-950 sm:text-5xl">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            I design clean digital products that feel simple, useful, and
            visually sharp from the first screen to the final handoff.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {aboutCards.map((card) => (
              <Card
                className="rounded-lg border-slate-200 bg-white py-0 shadow-sm"
                key={card.title}
              >
                <CardContent className="p-4">
                  <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {card.copy}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="hidden overflow-hidden rounded-lg border border-slate-200 bg-slate-950 shadow-[0_24px_60px_rgba(31,74,105,0.16)] md:block">
          <Image
            src="/portfolio/about-portrait.png"
            alt="Md. Abu Sayed in a black suit"
            width={1024}
            height={1792}
            priority
            className="about-image justify-self-center"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-center">
        <h2 className="text-3xl font-black text-slate-950">Introduction</h2>
        <p className="mt-3 text-base font-medium text-primary">
          Fresh ideas, balanced systems, and attention to every screen.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-600">
          I am a passionate UI/UX designer with years of experience creating
          meaningful digital experiences. I enjoy solving problems through
          user-centered design and turning complex ideas into simple,
          intuitive interfaces. My design process is driven by research,
          empathy, and iteration, helping me create polished products that look
          professional and work beautifully.
        </p>
        <Button
          className="mt-7 h-11 rounded-lg border-slate-200 bg-white px-5 text-slate-800 shadow-sm hover:bg-slate-50"
          nativeButton={false}
          render={<a href="#contact" />}
          variant="outline"
        >
          <ArrowDownToLine aria-hidden="true" />
          Download CV
        </Button>
      </div>
    </section>
  );
}
