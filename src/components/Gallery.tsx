import { ImageIcon } from "lucide-react";

const photos: { alt: string; span: string; ratio: string }[] = [
  { alt: "Photo coming soon", span: "md:col-span-2 md:row-span-2", ratio: "1:1 square (approx. 880×880)" },
  { alt: "Photo coming soon", span: "", ratio: "1:1 square (approx. 440×440)" },
  { alt: "Photo coming soon", span: "", ratio: "1:1 square (approx. 440×440)" },
  { alt: "Photo coming soon", span: "md:col-span-2", ratio: "2:1 landscape (approx. 880×440)" },
  { alt: "Photo coming soon", span: "", ratio: "1:1 square (approx. 440×440)" },
  { alt: "Photo coming soon", span: "", ratio: "1:1 square (approx. 440×440)" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
      {photos.map((p, i) => (
        <figure
          key={i}
          className={`relative overflow-hidden rounded-2xl ring-1 ring-dashed ring-border bg-muted flex flex-col items-center justify-center text-center px-3 ${p.span}`}
          aria-label={p.alt}
        >
          <ImageIcon className="h-6 w-6 text-muted-foreground/60" aria-hidden />
          <figcaption className="mt-2 text-xs font-medium text-muted-foreground/80">
            {p.ratio}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
