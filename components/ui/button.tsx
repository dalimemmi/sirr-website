import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  asChild?: boolean;
};

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  outline: "border border-border bg-card hover:bg-muted text-foreground",
  ghost: "hover:bg-muted text-foreground",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-8 text-base",
  sm: "h-9 px-3 text-sm",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function buttonClassName(variant: ButtonProps["variant"] = "default", size: ButtonProps["size"] = "default") {
  return cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
    variants[variant ?? "default"],
    sizes[size ?? "default"],
  );
}
