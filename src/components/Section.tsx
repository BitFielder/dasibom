import type { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "beige" | "ink";
  id?: string;
}) {
  const toneClass =
    tone === "beige"
      ? "bg-beige/40"
      : tone === "ink"
        ? "bg-ink text-white"
        : "bg-cream";

  return (
    <section id={id} className={`${toneClass} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20">{children}</div>
    </section>
  );
}
