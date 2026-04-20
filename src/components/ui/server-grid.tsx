import { cn } from "@/lib/utils";

export default function ServerGrid({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn(" h-[148px] flex flex-col gap-1", className)}>
      <Node />
      <Node />
    </div>
  );
}

function Node() {
  return (
    <div className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(255,255,255,0.1)] w-[128px] max-w-4xs border-2 h-1/2 rounded-2xl backdrop-blur-xs flex justify-end items-center p-3">
      <div className="w-3 h-3 bg-foreground/20 rounded-full" />
    </div>
  );
}
