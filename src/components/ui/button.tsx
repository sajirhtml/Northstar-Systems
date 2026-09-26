import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 border text-sm font-semibold transition-[background-color,color,transform] duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:translate-y-px",
  {
    variants: {
      variant: {
        default: "border-foreground bg-foreground text-background hover:bg-primary hover:text-primary-foreground",
        primary: "border-foreground bg-foreground px-5 text-background hover:bg-primary hover:text-primary-foreground",
        sky: "border-primary bg-primary px-5 text-primary-foreground hover:bg-foreground hover:text-background",
        outline: "border-border bg-background px-5 text-foreground hover:border-foreground hover:bg-secondary",
        icon: "size-11 border-border bg-background text-foreground hover:border-foreground hover:bg-secondary",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-secondary",
        link: "min-h-0 border-transparent bg-transparent p-0 text-foreground underline-offset-4 hover:underline",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:opacity-90",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, className, variant, size, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };