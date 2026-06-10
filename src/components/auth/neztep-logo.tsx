import Image from "next/image";
import { cn } from "@/lib/utils";

export interface NeztepLogoProps {
  className?: string;
  markClassName?: string;
}

/**
 * Renders the Neztep wordmark used across authentication screens.
 */
export function NeztepLogo({ className, markClassName }: NeztepLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative h-10 w-[124px] shrink-0", markClassName)}>
        <Image
          src="/logopurple.png"
          alt="Neztep"
          fill
          sizes="124px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
