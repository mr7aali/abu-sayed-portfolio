import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section className="section pb-20" id="contact">
      <SectionHeading
        eyebrow="Start a project"
        title="Contact me"
        copy="Tell me what you are building and I will help shape the right interface."
      />

      <Card className="glass-panel mx-auto mt-10 max-w-3xl rounded-lg py-0">
        <CardContent className="p-5 sm:p-7">
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <span className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
              <Mail aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-950">
                mdsayed.abu@gmail.com
              </p>
              <p className="text-xs text-muted-foreground">
                Available for freelance and product work
              </p>
            </div>
          </div>
          <form className="grid gap-4 sm:grid-cols-2">
            <Input
              aria-label="Name"
              className="h-11 rounded-lg border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
              placeholder="Name"
            />
            <Input
              aria-label="Email"
              className="h-11 rounded-lg border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
              placeholder="Email"
              type="email"
            />
            <Input
              aria-label="Phone Number"
              className="h-11 rounded-lg border-slate-200 bg-white text-slate-950 placeholder:text-slate-400"
              placeholder="Phone Number"
            />
            <Select defaultValue="">
              <SelectTrigger
                aria-label="Service of Interest"
                className="h-11 w-full rounded-lg border-slate-200 bg-white text-slate-950"
              >
                <SelectValue placeholder="Service Of Interest" />
              </SelectTrigger>
              <SelectContent className="border-slate-200 bg-white text-slate-950">
                <SelectItem value="app-design">App Design</SelectItem>
                <SelectItem value="web-design">Web Design</SelectItem>
                <SelectItem value="ux-research">UX Research</SelectItem>
                <SelectItem value="prototype">Prototype</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              aria-label="Project Details"
              className="min-h-32 rounded-lg border-slate-200 bg-white text-slate-950 placeholder:text-slate-400 sm:col-span-2"
              placeholder="Project Details"
            />
            <Button
              className="h-11 rounded-lg bg-primary px-6 font-bold text-white shadow-[0_14px_30px_rgba(15,141,232,0.2)] hover:bg-primary/90 sm:col-start-2 sm:justify-self-end"
              type="submit"
            >
              Send
              <Send aria-hidden="true" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
