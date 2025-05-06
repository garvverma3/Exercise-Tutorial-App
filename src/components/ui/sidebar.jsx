import * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const SidebarContext = createContext({})

const Sidebar = React.forwardRef(({ className, open, defaultOpen, onOpenChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false)
  
  const handleOpenChange = (open) => {
    setIsOpen(open)
    onOpenChange?.(open)
  }

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  return (
    <SidebarContext.Provider value={{ isOpen }}>
      <div
        ref={ref}
        className={cn(
          "border-border/50 group flex h-full flex-col overflow-hidden border-r bg-background transition-[width] data-[expanded=true]:w-80 data-[expanded=false]:w-[50px] sm:data-[expanded=false]:w-[70px] print:hidden",
          isOpen && "data-expanded=true",
          !isOpen && "data-expanded=false",
          className
        )}
        {...props}
      />
    </SidebarContext.Provider>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef(({ className, ...props }, ref) => {
  const { isOpen } = useContext(SidebarContext)

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn(
        "absolute right-[-40px] top-4 z-10 h-8 w-8 rounded-full bg-background p-0 shadow md:right-[-50px]",
        className
      )}
      {...props}
    >
      <ChevronRight
        className={cn(
          "transition-transform",
          isOpen && "rotate-180"
        )}
      />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarHeader = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("px-2 pt-4", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <ScrollArea
      ref={ref}
      className={cn("px-2 py-4", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-auto border-t px-2 py-4", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("pb-4", className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { isOpen } = useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn(
        "mb-1 flex h-[30px] w-full items-center px-2 py-1 text-xs font-medium uppercase opacity-0 transition-all group-[[data-expanded=true]]:opacity-100",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("space-y-1", className)}
      {...props}
    />
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn("grid gap-1", className)}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex cursor-pointer", className)}
      {...props}
    />
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuButton = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen } = useContext(SidebarContext)

  return (
    <div
      ref={ref}
      className={cn(
        "group/menu-item flex h-8 w-full cursor-pointer items-center overflow-hidden rounded-md border border-transparent px-2 py-0 text-sm font-medium",
        "bg-transparent hover:bg-muted hover:text-foreground",
        "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground",
        "group-[[data-expanded=true]]:justify-start group-[[data-expanded=false]]:justify-center",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: cn("items-center gap-2", isOpen ? "flex" : "flex-col gap-1")
        })
      })}
    </div>
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarProvider = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex min-h-screen w-full">
        <Sidebar
          {...props}
          open={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          {props.renderHeader && <SidebarHeader>{props.renderHeader({ isOpen })}</SidebarHeader>}
          <SidebarContent>
            {props.renderContent && props.renderContent({ isOpen })}
          </SidebarContent>
          {props.renderFooter && (
            <SidebarFooter>{props.renderFooter({ isOpen })}</SidebarFooter>
          )}
          <div className="absolute right-0 top-6 -mr-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full bg-muted p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronLeft
                className={cn("h-3 w-3 transition-transform", !isOpen && "rotate-180")}
                strokeWidth={3}
              />
              <span className="sr-only">Toggle Sidebar</span>
            </Button>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      </div>
    </SidebarContext.Provider>
  )
}

export {
  Sidebar,
  SidebarTrigger,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
}