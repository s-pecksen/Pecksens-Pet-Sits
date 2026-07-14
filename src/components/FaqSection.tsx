import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you sit for cats or other pets?",
    a: "We're dog-only. Holly is allergic to cats, so to keep everyone happy and healthy we don't sit for cats. We're also unable to look after other small pets at this time.",
  },
  {
    q: "Do you take puppies?",
    a: "We care for dogs aged one year and older. Younger puppies need a level of training, supervision and frequency of attention that's best handled by their owners or a specialist puppy service.",
  },
  {
    q: "Do you offer drop-in visits or dog walking?",
    a: "No — we're not a dog-walking or drop-in service. Walks are included as part of every house-sit: while we're staying at your home, we'll walk your dog on their normal schedule.",
  },
  {
    q: "What does a typical house-sit include?",
    a: "Overnight stays in your home, walks on your dog's usual schedule, feeding, medication administration, bringing in mail, watering plants, rotating lights, and leaving the house exactly as we found it (often tidier).",
  },
  {
    q: "How do you handle emergencies?",
    a: "We always confirm your preferred vet and an emergency clinic before your trip. We're fully reachable by phone and provide same-day updates if anything seems off.",
  },
  {
    q: "How do bookings work?",
    a: "Start with the consultation form below. After a quick meet-and-greet we'll confirm your dates in writing.",
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
