interface DocsSectionProps {
  title: string;
  children: React.ReactNode;
}

export function DocsSection({ title, children }: DocsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-3xl font-semibold text-primary">
        {title}
      </h2>
      <div className="text-foreground/90">
        {children}
      </div>
    </section>
  );
} 