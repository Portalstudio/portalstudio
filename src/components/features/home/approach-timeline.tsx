import { ArrowRight, Brain, Focus } from "lucide-react";

const methods = [
  {
    eyebrow: "Compréhension",
    title: "Nous plongeons dans votre univers pour en saisir chaque détail.",
    description:
      "Positionnement, clientèle, expérience en salle : nous analysons ce qui rend votre établissement pour le retranscrire de la meilleure façon possible.",
    icon: <Brain />,
  },
  {
    eyebrow: "Mise en scène",
    title: "Nous traduisons votre identité en une expérience digitale.",
    description:
      "Chaque élément : visuel, rythme, navigation est pensé pour refléter votre niveau d’exigence et prolonger l’expérience vécue en salle.",
    icon: <Focus />,
  },
  {
    eyebrow: "Conversion",
    title:
      "Nous concevons un parcours qui mène naturellement à la réservation.",
    description:
      "Une expérience fluide, optimisée pour le mobile, qui transforme l’intérêt en passage à l’action sans friction.",
    icon: <ArrowRight />,
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute top-4 bottom-0 left-0 border-l-2" />

        {methods.map(({ description, title, eyebrow, icon }, index) => (
          <div className="relative pb-12 pl-8 last:pb-0" key={index}>
            {/* Timeline dot */}
            <div className="absolute top-3 left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                  {icon}
                </div>
                <span className="font-medium text-base">{eyebrow}</span>
              </div>
              <h3 className="font-medium text-xl tracking-[-0.01em]">
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
