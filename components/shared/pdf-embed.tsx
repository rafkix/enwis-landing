interface PdfEmbedProps {
  src: string;
  title?: string;
}

export function PdfEmbed({ src, title }: PdfEmbedProps) {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-5xl px-5">
        <embed
          src={src}
          type="application/pdf"
          title={title}
          className="h-[calc(100vh-10rem)] w-full rounded-[var(--radius-xl)] border border-[var(--color-line)] shadow-[var(--shadow-soft-sm)]"
        />
      </div>
    </section>
  );
}
