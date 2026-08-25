import { Toaster } from "@/components/ui/sonner";
import { Home, ShieldCheck, PawPrint, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { Gallery } from "@/components/Gallery";
import { ConsultationForm } from "@/components/ConsultationForm";
import { FaqSection } from "@/components/FaqSection";
import pawPattern from "@/assets/paw-pattern.png.asset.json";

const EMAIL = "modernproblemsolvers@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Hello Pecksen's Pet-Sits!")}`;
const BRAND = "Pecksen's Pet-Sits";

export default Index;

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
              Pecksen's <span className="text-primary">Pet-Sits</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-foreground transition-colors">
              Gallery
            </a>
            <a href="#reviews" className="hover:text-foreground transition-colors">
              Reviews
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
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
      <section id="top" className="relative py-20">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url(${pawPattern.url})`,
            backgroundSize: "220px",
            backgroundRepeat: "repeat",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-card ring-1 ring-border shadow-lg p-12 text-center">
            <div className="mx-auto max-w-md">
              <Logo className="mx-auto h-28 w-28" rounded={false} />
              <h1 className="mt-6 text-5xl font-display font-medium tracking-tight leading-tight">
                Pecksen's
                <br />
                <span className="text-5xl" style={{ color: "var(--clay)" }}>
                  Pet-Sits
                </span>
              </h1>
              <p className="mt-4 text-sm uppercase tracking-wider text-foreground/90 font-semibold">
                SERVING VANCOUVER'S NORTH SHORE
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                We're a husband-and-wife team who treat your pup like ours — calm routines, daily
                updates, and a home that feels lived in.
              </p>
              <div className="mt-8 flex justify-center gap-3">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
                >
                  Request a Consultation
                </a>
                <a
                  href={MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold ring-1 ring-border"
                >
                  <Mail className="h-4 w-4" /> Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        id="services"
        eyebrow="What we do"
        title="In-home sitting, done properly"
        intro="We stay in your home for the length of your trip. Your dog keeps their routine, and your house stays lived-in."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            icon={<Home className="h-6 w-6" />}
            title="In-Home Dog Sitting"
            body="We stay overnight in your home so your dog keeps their bed, their schedule, and their people — no kennel, no unfamiliar house. Feeding, medication and daily walks on their normal routine are all included."
          />
          <ServiceCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="House Sitting"
            body="Plants watered, mail collected, lights rotated, packages brought inside. Your home lived in and looked after while you're away — bundled with dog sitting or on its own."
          />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Please note: we're not a dog-walking or drop-in service. Walks are part of the house-sit
          package while we're staying with your dog.
        </p>
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
                Tell us a little about your dog and your dates. We'll reply within one business day
                to set up a free meet-and-greet.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 opacity-80" />
                  {EMAIL}
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 opacity-80" />
                  Locally based · serving nearby neighborhoods
                </li>
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
            <span className="font-display font-semibold">Pecksen's Pet-Sits</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pecksen's Pet-Sits · modernsitdog.care
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
