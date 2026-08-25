import logo from "@/assets/Transparent Paw Print Logo.png";

export function Logo({
  className = "h-10 w-10",
  rounded = false,
}: {
  className?: string;
  rounded?: boolean;
}) {
  const shapeClass = rounded ? "rounded-full" : "rounded-none";
  return (
    <img
      src={logo}
      alt="Pecksen's Pet-Sits logo"
      className={`${className} ${shapeClass} object-cover`}
      width={80}
      height={80}
    />
  );
}
