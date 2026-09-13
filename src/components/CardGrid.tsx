export default function CardGrid({
  items,
}: {
  items: { title: string; desc: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-beige-dark/60 bg-cream p-6"
        >
          <h3 className="text-lg">{item.title}</h3>
          <p className="mt-2 text-sm text-ink/60">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
