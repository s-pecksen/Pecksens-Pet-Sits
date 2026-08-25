import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Placeholder reviews — swap the `quote`, `name`, and `pet` fields with your
// real client testimonials when you take this over to your code editor.
const reviews = [
  {
    quote: "We absolutely adore our dog sitters Steven & Mary! They provide exceptional care and attention to our sweet basset hound, ensuring he feels loved and safe while we're away. Their dedication and kindness have given us complete peace of mind, and we couldn't be more grateful for their wonderful service.",
  },
  {
    quote: "Steven and Mary Pecksen are always my first choice for house and dog sitters. No one else is even a close second. Why? They care! They have cared for my quirky French Bulldog many times over the last four years. They lavish her with great walks, lots of cuddles, and only the food/treats she needs. They care about my home, always leaving it as clean (if not cleaner) than it was when I left. They care enough to send regular updates whilst independently problem solving to avoid interrupting valuable family time. My advice... book this dynamic duo early to avoid disappointment.",
  },
  {
    quote: "Steven and Mary are always our first choice to take care of our dog, and they always do an amazing job. Their care and attention make it so much easier to be away, knowing our pup is in great hands. One of the things we appreciate most is how they keep us updated throughout the stay. They always send pictures, which gives us extra peace of mind and is such a thoughtful touch. It's clear they genuinely care about the pets they look after. On top of that, our house is always spotless when we return. It's such a great feeling to come home to a clean space and a happy dog. We highly recommend Steven and Mary to anyone looking for reliable, caring, and professional pet sitters!0",
  },
  {
    quote: "Steven and Mary are exceptional dog sitters! Our sensitive and emotional dog has been looked after by them several times and has always received thoughtful, attentive care. We have always had regular messages and photos, which gives us great peace of mind when far away. They have been quick to react to any dietary issues that our dog has occasionally. Our dog absolutely adores them - he cries with excitement every time they reunite! Steven and his wife, Mary, also care for our home impeccably. We trust them completely and will continue to use their amazing service.",
  },
  {
    quote: "Steven and Mary are seasoned professionals. Our Great Dane adores them, and so do we! Not only do we know that our dog is in good hands thanks to their picture updates, but we always come home to a spotless house, where the laundry is done and fresh linens are on the bed! It's magical. (They've even left us baked goods!) Communicating with Steven and Mary is incredibly easy, and this sets them apart. When we first met, they noted all the details about our dog and house, and this has made for very smooth vacations and efficient arrivals/departures. We are grateful for their diligent and reliable service, and selfishly we wish we could keep them all to ourselves. We have used dozens of dog sitters, and Steven and Mary are simply the best! No one agrees more than our dog, and that speaks volumes.",
  },
  {
    quote: "We've worked with Steven and Mary for several years, and what makes them stand out is the genuine love and care they show for our dog, treating him like part of their own family with attention to detail, communication, and reliability that gave us total confidence from day one. Steven and Mary took the time to understand our dog's needs and routines, going above and beyond with regular updates and a calm, intuitive approach that made all the difference for our sometimes anxious dog. Every time we come home, our dog is happy, relaxed, and clearly well-loved—he literally jumps into their arms whenever he sees them, a true testament to the bond they've built and the gift of knowing he's in good hands when we're away.",
  },
];

export function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((r, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] px-4 md:px-12">
              <figure className="mx-auto max-w-3xl rounded-3xl bg-card p-8 md:p-12 shadow-[0_20px_60px_-30px_rgba(120,60,30,0.25)] ring-1 ring-border">
                <Quote className="h-8 w-8 text-primary/60" aria-hidden />
                <blockquote className="mt-4 font-display text-2xl md:text-3xl leading-snug text-foreground">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{r.name}</span> · {r.pet}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          aria-label="Previous review"
          className="rounded-full bg-card p-2 ring-1 ring-border hover:bg-secondary transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          aria-label="Next review"
          className="rounded-full bg-card p-2 ring-1 ring-border hover:bg-secondary transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
