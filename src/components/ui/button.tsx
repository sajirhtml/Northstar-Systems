import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border text-sm font-semibold transition-[background-color,color,transform] duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        primary: "border-foreground bg-foreground px-5 text-background hover:bg-primary hover:text-primary-foreground",
        sky: "border-primary bg-primary px-5 text-primary-foreground hover:bg-foreground hover:text-background",
        outline: "border-border bg-background px-5 text-foreground hover:border-foreground hover:bg-secondary",
        icon: "size-11 border-border bg-background text-foreground hover:border-foreground hover:bg-secondary",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

function Button({ asChild, className, variant, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export { Button, buttonVariants };