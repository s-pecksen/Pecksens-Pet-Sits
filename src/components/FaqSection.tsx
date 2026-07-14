import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you sit for cats or other pets?",
    a: "We're dog-only. My wife is allergic to cats, so to keep everyone happy and healthy we don't sit for cats. We're also unable to look after other small pets at this time.",
  },
  {
    q: "Do you take puppies?",
    a: "We care for dogs aged one year and older. Young puppies need a level of training, supervision and frequency of attention that's best handled by their owners or a specialist puppy service.",
  },
  {
    q: "Do you offer dog-walking or drop-in visits?",
    a: "No — we're not a dog-walking service and we don't do drop-in visits. Walks are included as part of the house-sit: while we're staying at your home, we'll walk your dog on their normal routine.",
  },
  {
    q: "What does a typical house-sit include?",
    a: "Overnight stays in your home, walks for your dog, feeding to your schedule, medication administration, bringing in mail, watering plants, rotating lights, and leaving the house exactly as we found it (often tidier).",
  },
  {
    q: "How do you handle emergencies?",
    a: "We always confirm your preferred vet and an emergency clinic before your trip. We carry pet first-aid supplies, are fully reachable by phone, and provide same-day updates if anything seems off.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based locally and serve the surrounding neighborhoods. Reach out with your address and dates and we'll confirm fit on the consultation call.",
  },
  {
    q: "How do bookings and payment work?",
    a: "Start with the consultation form below. After a quick meet-and-greet we'll send a written quote and booking confirmation. A deposit secures the dates; the balance is due at the end of the stay.",
  },
];

export function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-border rounded-2xl bg-card ring-1 ring-border">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="px-6 border-b-0">
          <AccordionTrigger className="text-left text-lg font-display text-foreground hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-base text-muted-foreground leading-relaxed">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
