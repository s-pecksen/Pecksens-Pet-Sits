// Photo frames for the gallery. Real photos will be dropped in here later.
// Aspect ratio guide (each frame renders at 1:1 — square):
//   - Large feature tile (index 0): square, upload at 1600×1600
//   - Wide tile (index 3):          2:1 landscape, upload at 2000×1000
//   - All other tiles:              square, upload at 1200×1200
// Any oversize photo will be object-cover cropped to fit.

const photos: { alt: string; span: string; ratio: string }[] = [
  { alt: "Feature photo — square (1:1)", span: "md:col-span-2 md:row-span-2", ratio: "1:1" },
  { alt: "Square photo (1:1)", span: "", ratio: "1:1" },
  { alt: "Square photo (1:1)", span: "", ratio: "1:1" },
  { alt: "Wide photo (2:1)", span: "md:col-span-2", ratio: "2:1" },
  { alt: "Square photo (1:1)", span: "", ratio: "1:1" },
  { alt: "Square photo (1:1)", span: "", ratio: "1:1" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
      {photos.map((p, i) => (
        <figure
          key={i}
          className={`relative overflow-hidden rounded-2xl ring-1 ring-border bg-muted flex items-center justify-center ${p.span}`}
          aria-label={p.alt}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Photo · {p.ratio}
          </span>
        </figure>
      ))}
    </div>
  );
}
