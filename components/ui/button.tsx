import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
  asChild?: boolean;
};

const variants = {
  default:
    "bg-gradient-to-r from-[#1555A8] to-[#2B78D0] text-primary-foreground shadow-[0_10px_24px_hsl(var(--shadow-soft)/0.28)] hover:from-[#124A92] hover:to-[#276DBD] hover:-translate-y-[1px] hover:shadow-[0_14px_28px_hsl(var(--shadow-soft)/0.32)]",
  outline: "border border-border bg-card/95 hover:bg-muted text-foreground",
  ghost: "hover:bg-muted/90 text-foreground",
};

const sizes = {
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 px-8 text-base",
  sm: "h-9 px-3.5 text-sm",
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
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
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
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200",
    variants[variant ?? "default"],
    sizes[size ?? "default"],
  );
}
