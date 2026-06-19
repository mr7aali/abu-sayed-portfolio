import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { filters, portfolioItems } from "../_data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  return (
    <section className="section" id="portfolio">
      <SectionHeading
        eyebrow="Selected work"
        title="Portfolio"
        copy="A quick look at product screens, dashboards, websites, and app flows."
      />

      <div
        className="mt-8 flex flex-wrap justify-center gap-2"
        aria-label="Portfolio filters"
      >
        {filters.map((filter, index) => (
          <Button
            className={
              index === 0
                ? "h-9 rounded-lg bg-primary px-4 text-primary-foreground hover:bg-primary/90"
                : "h-9 rounded-lg border-slate-200 bg-white px-4 text-slate-600 shadow-sm hover:bg-slate-50 hover:text-slate-950"
            }
            key={filter}
            type="button"
            variant={index === 0 ? "default" : "outline"}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card
            className="group rounded-lg border-slate-200 bg-white py-0 shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
            key={item.title}
          >
            <div className={`project-thumb ${item.slice}`} aria-hidden="true" />
            <CardContent className="flex items-center justify-between gap-3 p-4">
              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <Badge className="mt-2 rounded-md bg-primary/10 text-primary">
                  UI/UX
                </Badge>
              </div>
              <span className="grid size-10 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary">
                <ArrowUpRight aria-hidden="true" />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
