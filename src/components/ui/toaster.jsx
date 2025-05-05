
import React from 'react';
import { useToast } from "../../hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 z-[100] flex flex-col gap-2 p-4 max-h-screen w-full">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <div
            key={id}
            className="bg-white border rounded-md shadow-lg p-4 flex items-start gap-2"
            {...props}
          >
            <div className="flex-1">
              {title && <div className="font-semibold">{title}</div>}
              {description && <div className="text-sm">{description}</div>}
            </div>
            {action}
          </div>
        );
      })}
    </div>
  );
}

export { useToast } from "../../hooks/use-toast";
