import RestaurantSvg from "@/assets/restaurant.svg";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function RestaurantIcon({ className }: ComponentProps<"div">) {
  return (
    <div className={cn("w-max", className)}>
      <img src={RestaurantSvg.src} alt="Icone d'un restaurant" />
    </div>
  );
}
