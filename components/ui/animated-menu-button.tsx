"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AnimatedMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function AnimatedMenuButton({ isOpen, onToggle, className }: AnimatedMenuButtonProps) {
  return (
    <Button
      className={cn("group", className)}
      variant="outline"
      size="icon"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        className="pointer-events-none"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12L20 12"
          className={cn(
            "origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)]",
            isOpen && "translate-x-0 translate-y-0 rotate-[315deg]"
          )}
        />
        <path
          d="M4 12H20"
          className={cn(
            "origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)]",
            isOpen && "rotate-45"
          )}
        />
        <path
          d="M4 12H20"
          className={cn(
            "origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)]",
            isOpen && "translate-y-0 rotate-[135deg]"
          )}
        />
      </svg>
    </Button>
  );
} 