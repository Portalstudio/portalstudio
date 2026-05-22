import { cn } from "@/lib/utils";
import Fork from "@/assets/fork.svg";
export default function WebsiteGrid({
  className,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("items-center flex h-[178px]", className)}>
      <img src={Fork.src} className="mx-auto" />
    </div>
  );
}
