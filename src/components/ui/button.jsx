
import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    
    const getVariantClasses = () => {
      switch (variant) {
        case "primary":
          return "bg-[#9b87f5] text-white hover:bg-[#7e69ab]";
        case "secondary":
          return "bg-gray-200 text-gray-800 hover:bg-gray-300";
        case "outline":
          return "border border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10";
        case "ghost":
          return "text-gray-600 hover:bg-gray-100";
        case "link":
          return "text-[#9b87f5] underline-offset-4 hover:underline";
        default:
          return "bg-[#9b87f5] text-white hover:bg-[#7e69ab]";
      }
    };
    
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "px-3 py-1.5 text-sm";
        case "lg":
          return "px-8 py-3 text-lg";
        default:
          return "px-4 py-2";
      }
    };
    
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          getVariantClasses(),
          getSizeClasses(),
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
