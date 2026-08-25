import logo from "@/assets/paw-logo.png.asset.json";

export function Logo({
  className = "h-10 w-10",
  rounded = true,
}: {
  className?: string;
  rounded?: boolean;
}) {
  const shapeClass = rounded ? "rounded-full" : "rounded-none";
  return (
    <img
      src={logo.url}
      alt="Pecksen's Pet-Sits logo"
      className={`${className} ${shapeClass} object-cover shadow-sm ring-1 ring-border`}
      width={80}
      height={80}
    />
  );
}
