import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "gradient" | "light";
  fullWidth?: boolean;
  container?: boolean;
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { className, variant = "default", fullWidth = false, container = true, id, children, ...props },
    ref
  ) => {
    const variants = {
      default: "bg-white",
      dark: "bg-gray-50 text-gray-900",
      gradient: "bg-gradient-to-r from-blue-50 to-green-50 text-gray-900",
      light: "bg-gray-100 text-gray-900",
    };

    const Container = container ? "div" : React.Fragment;
    const containerProps = container ? { className: "container mx-auto px-4 sm:px-6 lg:px-8" } : {};

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "py-16 md:py-24 lg:py-32",
          variants[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        <Container {...containerProps}>{children}</Container>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };

