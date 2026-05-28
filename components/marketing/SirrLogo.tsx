import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

type SirrLogoProps = {
  showTagline?: boolean;
  className?: string;
  href?: string | null;
};

export function SirrLogo({ showTagline = false, className, href = "/" }: SirrLogoProps) {
  const inner = (
    <div className={cn("min-w-0", className)}>
      <Image
        src="/brand/sirr-logo-main.png"
        alt="Sirr"
        width={1720}
        height={470}
        className="h-10 w-auto max-w-full object-contain object-left sm:h-11"
        priority
      />
      {showTagline && (
        <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.13em] text-muted-foreground sm:text-[11px]">
          AI Career Intelligence
        </p>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex transition-opacity hover:opacity-90" aria-label="Sirr">
        {inner}
      </Link>
    );
  }

  return inner;
}
