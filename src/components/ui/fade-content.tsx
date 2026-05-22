import { useEffect, useRef, type ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  blur?: boolean;
}

export function FadeContent({
  children,
  className = "",
  duration = 800,
  delay = 0,
  blur = true,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    if (blur) el.style.filter = "blur(6px)";
    el.style.transition = [
      `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
      blur ? `filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)` : "",
    ]
      .filter(Boolean)
      .join(", ");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            if (blur) el.style.filter = "blur(0px)";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, blur, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
