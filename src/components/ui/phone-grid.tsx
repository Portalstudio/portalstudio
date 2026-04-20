import { cn } from "@/lib/utils";

export default function PhoneGrid({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] max-w-[86px] w-full h-[148px] overflow-hidden border-foreground/20 border rounded-2xl p-2 bg-background/50",
        className,
      )}
    >
      <PhoneCamera />
    </div>
  );
}

function PhoneCamera() {
  return (
    <div className="w-2 h-2 border border-foreground/20 bg-foreground/10 mx-auto rounded-full" />
  );
}
