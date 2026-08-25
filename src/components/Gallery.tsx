import belleMary from "@/assets/Belle + Mary.jpeg";
import belleSteven from "@/assets/Belle + Steven.jpeg";
import mauiHeadshot from "@/assets/Maui Headshot.jpeg";
import rogerRingoLookingUp from "@/assets/Roger + Ringo Looking Up.jpeg";
import rogerByTheBench from "@/assets/Roger by the Bench.jpeg";
import willowBackyard from "@/assets/Willow Backyard.jpeg";
import willowInGrass from "@/assets/Willow in Grass.jpeg";

const photos = [
  { src: belleMary, alt: "Belle + Mary.jpeg", span: "md:col-span-2 md:row-span-2" },
  { src: belleSteven, alt: "Belle + Steven.jpeg", span: "" },
  { src: mauiHeadshot, alt: "Maui Headshot.jpeg", span: "" },
  { src: rogerRingoLookingUp, alt: "Roger + Ringo Looking Up.jpeg", span: "" },
  { src: rogerByTheBench, alt: "Roger by the Bench.jpeg", span: "" },
  { src: willowBackyard, alt: "Willow Backyard.jpeg", span: "" },
  { src: willowInGrass, alt: "Willow in Grass.jpeg", span: "md:col-span-2" },
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
      {photos.map((photo) => (
        <figure
          key={photo.alt}
          className={`relative overflow-hidden rounded-2xl ring-1 ring-border bg-muted ${photo.span}`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </figure>
      ))}
    </div>
  );
}
