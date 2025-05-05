
import * as React from "react";
import { cn } from "../../lib/utils";

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);

const PaginationContent = ({
  className,
  ...props
}) => (
  <ul className={cn("flex flex-row items-center gap-1", className)} {...props} />
);

const PaginationItem = ({
  className,
  ...props
}) => (
  <li className={cn("", className)} {...props} />
);

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex h-9 w-9 items-center justify-center rounded-md border text-center text-sm transition-colors",
      isActive
        ? "border-[#9b87f5] bg-[#9b87f5] text-white"
        : "border-gray-200 bg-white hover:bg-gray-100 hover:text-[#9b87f5]",
      className
    )}
    {...props}
  />
);

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <span>{"<"}</span>
    <span className="hidden sm:inline">Previous</span>
  </PaginationLink>
);

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span className="hidden sm:inline">Next</span>
    <span>{">"}</span>
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    &#8230;
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
