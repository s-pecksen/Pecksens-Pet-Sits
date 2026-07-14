import logo from "@/assets/paw-logo.png.asset.json";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Pecksen's Pet-Sits logo"
      className={`${className} rounded-full object-cover shadow-sm ring-1 ring-border`}
      width={80}
      height={80}
    />
  );
}
