import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone number required").max(40),
  dates: z.string().trim().min(1, "Please share your requested dates").max(200),
  dog: z.string().trim().min(1, "Tell us about your dog").max(2000),
});

const RECIPIENT = "modernproblemsolvers@gmail.com";

export function ConsultationForm() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      dates: fd.get("dates"),
      dog: fd.get("dog"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    const d = parsed.data;
    const subject = `Consultation Request — ${d.name}`;
    const body =
      `Hi Modern Sit,\n\nI'd like to request a consultation.\n\n` +
      `Name: ${d.name}\n` +
      `Email: ${d.email}\n` +
      `Phone: ${d.phone}\n` +
      `Requested Dates: ${d.dates}\n\n` +
      `About my dog:\n${d.dog}\n\nThank you!`;
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => {
      toast.success("Opening your email app to send the request…");
      setSubmitting(false);
    }, 300);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Name" name="name" placeholder="Jane Doe" required />
        <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" required />
        <Field label="Requested Dates" name="dates" placeholder="e.g. Aug 12–18, 2026" required />
      </div>
      <label className="grid gap-1.5">
        <span className="text-sm font-medium text-foreground">Tell us about your dog</span>
        <textarea
          name="dog"
          required
          rows={5}
          maxLength={2000}
          placeholder="Breed, age, temperament, routine, medications, anything we should know…"
          className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring resize-y"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request Consultation"}
      </button>
      <p className="text-xs text-muted-foreground">
        Submitting opens your email client with the message ready to send to{" "}
        <span className="font-medium">{RECIPIENT}</span>.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        className="rounded-xl border border-input bg-card px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
