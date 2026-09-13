export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-beige-dark/60 bg-linear-to-b from-beige to-cream">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-3xl leading-tight md:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-xl text-ink/70">{description}</p>
        )}
      </div>
    </div>
  );
}
