import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Chocolate lab relaxing on a cream rug", span: "md:col-span-2 md:row-span-2" },
  { src: g2, alt: "Fluffy goldendoodle on an autumn walk", span: "" },
  { src: g3, alt: "Dachshund napping on a knit blanket", span: "" },
  { src: g4, alt: "Border collie chasing a tennis ball", span: "md:col-span-2" },
  { src: g5, alt: "Australian shepherd portrait", span: "" },
  { src: g6, alt: "Beagle in a sunny kitchen", span: "" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
      {photos.map((p, i) => (
        <figure
          key={i}
          className={`group relative overflow-hidden rounded-2xl ring-1 ring-border bg-muted ${p.span}`}
        >
          <img
            src={p.src}
            alt={p.alt}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}
