import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Placeholder reviews — swap the `quote`, `name`, and `pet` fields with your
// real client testimonials when you take this over to your code editor.
const reviews = [
  {
    quote: "Client testimonial goes here. Replace this quote with a real review.",
    name: "Client Name",
    pet: "Dog Name, Breed",
  },
  {
    quote: "Client testimonial goes here. Replace this quote with a real review.",
    name: "Client Name",
    pet: "Dog Name, Breed",
  },
  {
    quote: "Client testimonial goes here. Replace this quote with a real review.",
    name: "Client Name",
    pet: "Dog Name, Breed",
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
