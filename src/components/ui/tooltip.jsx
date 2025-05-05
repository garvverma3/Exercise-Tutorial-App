
import * as React from "react";

const TooltipProvider = ({ children }) => {
  return <>{children}</>; // Simple provider implementation
};

const Tooltip = ({ children }) => {
  return <>{children}</>; // Simple tooltip wrapper
};

const TooltipTrigger = React.forwardRef(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={className} {...props} />
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = React.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md ${className || ''}`}
        style={{ marginTop: sideOffset }}
        {...props}
      />
    );
  }
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
