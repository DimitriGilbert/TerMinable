import Link from "next/link";
import { motion } from "motion/react";
import { type ReactNode } from "react";
import { cn } from "~/lib/utils";

interface GlowLinkProps {
  href: string;
  target?: string;
  rel?: string;
  color?: string;
  size?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
  glowClassName?: string;
  scale?: number;
}

export function GlowLink({
  href,
  target = "_self",
  rel,
  color = "rgba(168, 85, 247, 0.8)",
  size = 12,
  duration = 0.5,
  className = "",
  glowClassName = "",
  scale = 1.1,
  children,
}: GlowLinkProps) {
  const sizeValue = `${size}px`;

  return (
    <motion.span
      whileHover={{
        textShadow: `0 0 ${sizeValue} ${color}, 0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}`,
        scale: scale,
        transition: { 
          duration, 
          ease: "easeInOut",
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 10
          }
        },
      }}
      className={cn("inline-block", glowClassName)}
    >
      <Link href={href} target={target} rel={rel} className={cn("inline-block", className)}>
        {children}
      </Link>
    </motion.span>
  );
} 