import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export interface SocialButtonProps {
  children: ReactNode;
  icon: ReactNode;
}

/**
 * Renders a provider sign-in button as UI only, without auth behavior.
 */
export function SocialButton({ children, icon }: SocialButtonProps) {
  return (
    <Button className="w-full justify-start px-4" type="button" variant="secondary">
      <span className="grid h-5 w-5 place-items-center">{icon}</span>
      <span className="flex-1 text-center">{children}</span>
    </Button>
  );
}
