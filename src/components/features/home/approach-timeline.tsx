import { MapPin, Lightbulb, Wrench } from "lucide-react";

const steps = [
  {
    eyebrow: "1. Passage sur place",
    title: "Je viens voir comment vous tournez.",
    description:
      "Je passe dans votre établissement, si possible pendant un service. Je regarde ce qui vous prend du temps et ce qui freine vos clients.",
    icon: <MapPin size={18} />,
  },
  {
    eyebrow: "2. Proposition",
    title: "Je vous propose un outil précis, avec son prix.",
    description:
      "Pas de catalogue : une proposition pour votre lieu, que vous pouvez voir avant de décider.",
    icon: <Lightbulb size={18} />,
  },
  {
    eyebrow: "3. Mise en place et suivi",
    title: "Je l'installe, je forme l'équipe, je reste là.",
    description:
      "L'outil est testé en conditions réelles, ajusté, puis suivi dans la durée.",
    icon: <Wrench size={18} />,
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-2 sm:px-6 py-10 md:py-16">
      <div className="relative ml-3">
        <div className="absolute top-4 bottom-0 left-0 border-l-2" />

        {steps.map(({ description, title, eyebrow, icon }, index) => (
          <div className="relative pb-10 pl-8 last:pb-0" key={index}>
            <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  {icon}
                </div>
                <span className="font-medium text-sm sm:text-base">{eyebrow}</span>
              </div>
              <h3 className="font-medium text-lg sm:text-xl tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-pretty text-muted-foreground text-sm sm:text-base">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
