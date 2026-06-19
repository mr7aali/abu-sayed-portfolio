import { Card, CardContent } from "@/components/ui/card";
import { Progress, ProgressLabel } from "@/components/ui/progress";
import { skills } from "../_data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="section" aria-label="Design skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Design Skills"
        copy="Core tools I use to move from discovery and structure to polished visual design."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill) => (
          <Card
            className="rounded-lg border-slate-200 bg-white py-0 shadow-sm"
            key={skill.name}
          >
            <CardContent className="p-5">
              <Progress value={skill.value}>
                <ProgressLabel className="text-sm font-bold text-slate-950">
                  {skill.name}
                </ProgressLabel>
                <span className="ml-auto text-sm font-bold text-primary">
                  {skill.value}%
                </span>
              </Progress>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
