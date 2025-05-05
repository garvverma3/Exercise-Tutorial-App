
import * as React from "react";
import { cn } from "../../lib/utils";

const TooltipProvider = ({ children }) => {
  return <>{children}</>;
};

const Tooltip = ({ children, content, className, side = "top", ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const triggerRef = React.useRef(null);
  const tooltipRef = React.useRef(null);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  
  React.useEffect(() => {
    if (isVisible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      
      let top = 0;
      let left = 0;
      
      switch (side) {
        case "top":
          top = triggerRect.top - tooltipRect.height - 5;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + 5;
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
          break;
        case "left":
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.left - tooltipRect.width - 5;
          break;
        case "right":
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
          left = triggerRect.right + 5;
          break;
      }
      
      setPosition({ top, left });
    }
  }, [isVisible, side]);
  
  return (
    <div className="relative inline-block">
      <div 
        ref={triggerRef} 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div 
          ref={tooltipRef}
          style={{ top: position.top, left: position.left }}
          className={cn(
            "fixed z-50 rounded bg-black text-white px-2 py-1 text-xs animate-in fade-in",
            className
          )}
          {...props}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export { Tooltip, TooltipProvider };
