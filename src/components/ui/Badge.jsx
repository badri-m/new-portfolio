import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils"; // Adjust path if needed

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-nowrap transition-all duration-200 ease-in-out transform shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 hover:bg-slate-900/90 hover:scale-105 hover:shadow-md dark:bg-slate-50 dark:text-slate-900",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-100/80 hover:scale-105 hover:shadow-md dark:bg-slate-800 dark:text-slate-50",
        outline:
          "border border-slate-200 bg-transparent text-slate-500 hover:bg-slate-100/70 hover:scale-105 hover:shadow-md dark:border-slate-800 dark:text-slate-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };