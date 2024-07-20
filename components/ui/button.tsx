import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-bold ring-offset-white transition-colors rounded-full",
  {
    variants: {
      variant: {
        default: "bg-cyan-400 text-primary hover:bg-accent-hover rounded-3xl",
        primary: "bg-primary text-white rounded-3xl",
        outline: "border-accent-default border radius-3xl  bg-transparent text-accent-default hover:bg-accent-default hover:text-primary"
      },
      size: {
        default: "h-9 px-4 py-2",
        md: "h-3rem px-6 ",
        lg: "h-3.5rem px-8 text-sm uppercase tracking-[2px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
