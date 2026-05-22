import type { ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedShinyText({ children, className = "" }: AnimatedShinyTextProps) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-[length:250%_100%] bg-[linear-gradient(110deg,var(--foreground)_0%,var(--foreground)_30%,rgba(255,255,255,0.6)_45%,var(--foreground)_60%,var(--foreground)_100%)] animate-[shimmer_4s_ease-in-out_infinite] ${className}`}
    >
      {children}
    </span>
  );
}
