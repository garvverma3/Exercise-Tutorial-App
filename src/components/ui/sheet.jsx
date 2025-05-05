
import * as React from "react";
import { cn } from "../../lib/utils";

const Sheet = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn(
      "fixed inset-0 z-50 bg-black/50",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const SheetContent = ({
  children,
  position = "right",
  className,
  ...props
}) => {
  const positionClasses = {
    top: "inset-x-0 top-0",
    right: "inset-y-0 right-0 h-full",
    bottom: "inset-x-0 bottom-0",
    left: "inset-y-0 left-0 h-full",
  };
  
  const transitionClasses = {
    top: "animate-in slide-in-from-top",
    right: "animate-in slide-in-from-right",
    bottom: "animate-in slide-in-from-bottom",
    left: "animate-in slide-in-from-left",
  };
  
  return (
    <div
      className={cn(
        "fixed z-50 bg-white shadow-lg",
        positionClasses[position],
        transitionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SheetHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col space-y-2 p-6",
      className
    )}
    {...props}
  />
);

const SheetFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6",
      className
    )}
    {...props}
  />
);

const SheetTitle = ({
  className,
  ...props
}) => (
  <h3
    className={cn(
      "text-lg font-semibold text-gray-900",
      className
    )}
    {...props}
  />
);

const SheetDescription = ({
  className,
  ...props
}) => (
  <p
    className={cn(
      "text-sm text-gray-500",
      className
    )}
    {...props}
  />
);

export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
