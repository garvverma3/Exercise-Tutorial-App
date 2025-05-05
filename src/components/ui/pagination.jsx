
import * as React from "react";

const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={`mx-auto flex w-full justify-center ${className || ''}`}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={`flex flex-row items-center gap-1 ${className || ''}`}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={className} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive 
      ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground" 
      : "bg-transparent hover:bg-muted hover:text-muted-foreground"} 
      h-10 px-4 py-2 ${className || ''}`}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={`gap-1 pl-2.5 ${className || ''}`}
    {...props}
  >
    <span>←</span>
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={`gap-1 pr-2.5 ${className || ''}`}
    {...props}
  >
    <span>Next</span>
    <span>→</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={`flex h-9 w-9 items-center justify-center ${className || ''}`}
    {...props}
  >
    ...
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
