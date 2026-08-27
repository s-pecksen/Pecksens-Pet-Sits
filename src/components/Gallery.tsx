import belleMary from "@/assets/Belle + Mary.jpeg";
import belleSteven from "@/assets/Belle + Steven.jpeg";
import mauiHeadshot from "@/assets/Maui Headshot.jpeg";
import mauiRainsuit from "@/assets/Maui Rainsuit.jpeg";
import rogerRingoLookingUp from "@/assets/Roger + Ringo Chewing.jpg";
import rogerRingoLookingUpPhoto from "@/assets/Roger + Ringo Looking Up.jpeg";
import rogerByTheBench from "@/assets/Roger by the Bench.jpeg";
import wafflesBoop from "@/assets/Waffles Boop.jpeg";
import wafflesCouch from "@/assets/Waffles Couch.jpeg";
import wafflesHeadshot from "@/assets/Waffles Headshot.jpeg";
import willowBackyard from "@/assets/Willow Backyard.jpeg";
import willowInGrass from "@/assets/Willow in Grass.jpeg";
import willowWaffles from "@/assets/Willow + Waffles.jpeg";
import ringoheadshot from "@/assets/Ringo Headshot.jpeg";
import ringosleeping from "@/assets/Ringo Sleeping.jpeg";
import rogerpleading from "@/assets/Roger Pleading.jpeg";
import rogerringoheadshot from "@/assets/Roger + Ringo Headshot.jpeg";
import willowtoys from "@/assets/Willow Toys.jpeg";

const photos = [
  {
    src: belleMary,
    alt: "Belle + Mary.jpeg",
  },
  { src: belleSteven, alt: "Belle + Steven.jpeg" },
  { src: mauiHeadshot, alt: "Maui Headshot.jpeg" },
  { src: mauiRainsuit, alt: "Maui Rainsuit.jpeg" },
  {
    src: rogerRingoLookingUp,
    alt: "Roger + Ringo Chewing.jpg",
  },
  { src: rogerRingoLookingUpPhoto, alt: "Roger + Ringo Looking Up.jpeg" },
  { src: rogerByTheBench, alt: "Roger by the Bench.jpeg" },
  { src: wafflesBoop, alt: "Waffles Boop.jpeg" },
  { src: wafflesCouch, alt: "Waffles Couch.jpeg" },
  { src: wafflesHeadshot, alt: "Waffles Headshot.jpeg" },
  { src: willowInGrass, alt: "Willow in Grass.jpeg" },
  {
    src: willowBackyard,
    alt: "Willow Backyard.jpeg",
  },
  { src: willowWaffles, alt: "Willow + Waffles.jpeg" },
  { src: ringoheadshot, alt: "Ringo Headshot.jpeg" },
  { src: ringosleeping, alt: "Ringo Sleeping.jpeg" },
  { src: rogerpleading, alt: "Roger Pleading.jpeg" },
  { src: willowtoys, alt: "Willow Toys.jpeg" },
  { src: rogerringoheadshot, alt: "Roger + Ringo Headshot.jpeg" },
];

export function Gallery() {
  return (
    <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <figure
          key={photo.alt}
          className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-muted ring-1 ring-border"
        >
          <img src={photo.src} alt={photo.alt} loading="lazy" className="block h-auto w-full" />
        </figure>
      ))}
    </div>
  );
}
