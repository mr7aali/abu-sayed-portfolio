import { Layers3, MonitorSmartphone, MousePointer2, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "../_data/portfolio";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = [MonitorSmartphone, Layers3, Search, MousePointer2];

export function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services">
      <SectionHeading
        id="services"
        title="Services"
        eyebrow="What I do"
        copy="UI/UX designer crafting simple, smart, and impactful digital experiences for web and mobile."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = serviceIcons[index] ?? Layers3;

          return (
            <Card
              className="rounded-lg border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-xl"
              key={service.number}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold text-primary/80">
                    {service.number}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-950">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.copy}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
