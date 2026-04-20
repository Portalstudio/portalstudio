import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";

export default function WebsiteGrid({
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] max-w-3xs w-full h-[148px] overflow-hidden border border-foreground/10 rounded-md",
        className,
      )}
    >
      <WebsiteGridHeader />
      <WebsiteGridContent />
    </div>
  );
}

function WebsiteGridHeader() {
  return (
    <div className="flex gap-3 p-2">
      <DotButton />
      <DotButton />
      <DotButton />
    </div>
  );
}

function WebsiteGridContent() {
  const [big, setBig] = useState<"left" | "right">("left");
  useEffect(() => {
    const animBox = setInterval(() => {
      setBig((prev) => (prev === "left" ? "right" : "left"));
    }, 5000);
    return () => clearInterval(animBox);
  }, []);
  return (
    <div className="flex border-t border-foreground/10 bg-background/50 p-4 ">
      <div>
        <Logo className="w-12 not-dark:invert mb-2" />
        <Skeleton className="bg-foreground/30" />
        <Skeleton className="w-1/2" />
        <Skeleton />
        <Skeleton />
        <Skeleton className="w-1/2" />
      </div>
      <div className="flex-1 pl-4">
        <Skeleton className="w-1/6 h-2 bg-foreground/30 ml-auto mb-2" />
        <div className="flex gap-1 mb-1.5">
          <Skeleton className="w-1/12 bg-foreground/30" />
          <Skeleton />
        </div>
        <div className="flex gap-1 w-full">
          <div className="flex flex-col gap-1 flex-1">
            {[...Array(3)].map((_, idx) => (
              <BoxSkeleton
                key={idx}
                className={cn(
                  "transition-all duration-800",
                  big === "left" ? "h-12" : "h-8",
                )}
              />
            ))}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            {[...Array(3)].map((_, idx) => (
              <BoxSkeleton
                key={idx}
                className={cn(
                  "transition-all",
                  big === "right" ? "h-12" : "h-8",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DotButton() {
  return <div className="w-2 h-2 rounded-full border border-foreground/10" />;
}

function Skeleton({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("w-full h-1 bg-foreground/20 rounded-sm mb-1", className)}
    />
  );
}

function BoxSkeleton({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "w-full h-8 border-2 border-foreground/10 rounded-sm mb-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
