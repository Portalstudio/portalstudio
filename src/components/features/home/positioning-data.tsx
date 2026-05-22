import { FadeContent } from "@/components/ui/fade-content";
import { Card } from "@/components/ui/card";
import { CircleCheck, CircleX } from "lucide-react";

const positioningFits: string[] = [
  "Établissements reconnus par les Guyanais",
  "Restauration, hôtellerie et cafés à forte notoriété locale",
  "Lieux qui considèrent leur image numérique comme un levier stratégique",
];

const positioningMisfits: string[] = [
  "Établissements hors restauration et hôtellerie",
  "Projets low-cost",
  "Demandes urgentes sans vision",
];

export function PositioningData() {
  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-12">
      <FadeContent client:visible delay={100}>
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
            <CircleCheck className="text-emerald-500" size={16} />
            Nous accompagnons
          </p>
          <div className="grid gap-4" style={{ gridAutoRows: "1fr" }}>
            {positioningFits.map((item, idx) => (
              <Card
                key={idx}
                className="border-foreground/10 bg-card/50 px-5 py-4 shadow-none flex-row items-center gap-0"
              >
                <p className="text-foreground text-base font-medium leading-snug sm:text-lg">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </FadeContent>

      <FadeContent client:visible delay={200}>
        <div className="space-y-6">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/40">
            <CircleX className="text-red-900/60" size={16} />
            Nous ne travaillons pas avec
          </p>
          <div className="grid gap-4" style={{ gridAutoRows: "1fr" }}>
            {positioningMisfits.map((item, idx) => (
              <Card
                key={idx}
                className="border-foreground/5 bg-card/20 px-5 py-4 shadow-none flex-row items-center gap-0"
              >
                <p className="text-foreground/35 text-base font-medium leading-snug sm:text-lg line-through">
                  {item}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
}
