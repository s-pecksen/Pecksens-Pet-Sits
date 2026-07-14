import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Heart, Home, ShieldCheck, PawPrint, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Gallery } from "@/components/Gallery";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqSection } from "@/components/FaqSection";
import heroImg from "@/assets/hero-dogs.jpg";
import pawPattern from "@/assets/paw-pattern.png.asset.json";

const EMAIL = "modernproblemsolvers@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Hello Modern Sit!")}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modern Sit Dog Care — Trusted Dog & House Sitting" },
      {
        name: "description",
        content:
          "Modern Sit Dog Care offers thoughtful, professional dog sitting and house sitting. Calm care, daily updates, and a home that feels lived in.",
      },
      { property: "og:title", content: "Modern Sit Dog Care" },
      { property: "og:description", content: "Trusted dog & house sitting with warmth and care." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://modernsitdog.care" },
    ],
    links: [{ rel: "canonical", href: "https://modernsitdog.care" }],
  }),
  component: Index,
});

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-medium text-foreground">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors position="top-center" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Modern Sit <span className="text-primary">Dog Care</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#gallery" className="hover:text-foreground transition-colors">Gallery</a>
            <a href="#reviews" className="hover:text-foreground transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <a
            href={MAILTO}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-4 w-4" /> Contact Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `url(${pawPattern.url})`,
            backgroundSize: "180px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-20 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              <PawPrint className="h-3.5 w-3.5" /> Trusted local dog &amp; house sitters
            </span>
            <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight">
              Your dog at home.
              <br />
              <span className="text-primary italic">Your house in care.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
              We're a husband-and-wife team who treat your pup like ours — and your home
              like our own. Calm routines, daily updates, and a doorstep that feels
              exactly the way you left it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
              >
                Request a Consultation
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-semibold text-foreground ring-1 ring-border hover:bg-secondary transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact Us
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="120+" label="Happy dogs" />
              <Stat n="6yrs" label="Sitting together" />
              <Stat n="5★" label="Avg. review" />
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-accent/40 blur-2xl" aria-hidden />
            <img
              src={heroImg}
              alt="A golden retriever and a small terrier resting together in a sunlit home"
              width={1600}
              height={1200}
              className="relative rounded-[2rem] shadow-2xl shadow-clay/20 ring-1 ring-border object-cover aspect-[4/3]"
              fetchPriority="high"
            />
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-card px-5 py-4 shadow-xl ring-1 ring-border flex items-center gap-3">
              <Logo className="h-12 w-12" />
              <div>
                <p className="text-sm font-semibold">Modern Sit</p>
                <p className="text-xs text-muted-foreground">Insured · Background-checked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="What we do"
        title="Care that fits into your life"
        intro="Two specialties, one standard: attentive, thoughtful, and quietly professional."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Home className="h-6 w-6" />}
            title="In-Home Dog Sitting"
            body="We stay overnight in your home so your dog keeps their bed, their schedule, and their routine — no kennel anxiety."
          />
          <ServiceCard
            icon={<Heart className="h-6 w-6" />}
            title="Daily Visits & Walks"
            body="Drop-in care, meals, medication, playtime and unhurried neighborhood walks while you're at work or away."
          />
          <ServiceCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="House Sitting"
            body="Plants watered, mail collected, lights rotated, packages brought inside. Your home, lived in and looked after."
          />
        </div>
      </Section>

      {/* Gallery */}
      <Section
        id="gallery"
        eyebrow="Our charges"
        title="A few of our favorite faces"
        intro="Every dog gets the spotlight. Here are some recent friends we've cared for."
        className="bg-secondary/40"
      >
        <Gallery />
      </Section>

      {/* Reviews */}
      <Section
        id="reviews"
        eyebrow="Kind words"
        title="What clients say"
        intro="We're grateful for every family — human and canine — who trusts us with the keys."
      >
        <ReviewsCarousel />
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="Good to know"
        title="Frequently asked questions"
        className="bg-secondary/40"
      >
        <div className="max-w-3xl mx-auto">
          <FaqSection />
        </div>
      </Section>

      {/* Consultation */}
      <section id="consultation" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-[0_30px_80px_-40px_rgba(120,60,30,0.3)] overflow-hidden grid md:grid-cols-5">
            <div className="md:col-span-2 bg-primary text-primary-foreground p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: `url(${pawPattern.url})`, backgroundSize: "140px" }}
                aria-hidden
              />
              <h3 className="font-display text-3xl md:text-4xl">Let's plan your trip.</h3>
              <p className="mt-4 text-primary-foreground/85 leading-relaxed">
                Tell us a little about your dog and your dates. We'll reply within one
                business day to set up a free meet-and-greet.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4 opacity-80" />{EMAIL}</li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4 opacity-80" />Locally based · serving nearby neighborhoods</li>
              </ul>
            </div>
            <div className="md:col-span-3 p-8 md:p-10">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-background">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <span className="font-display font-semibold">Modern Sit Dog Care</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Modern Sit Dog Care · modernsitdog.care
          </p>
          <a href={MAILTO} className="text-sm font-medium text-primary hover:underline">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-foreground">{n}</dt>
      <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{label}</dd>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <article className="group rounded-3xl bg-card p-7 ring-1 ring-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </article>
  );
}
