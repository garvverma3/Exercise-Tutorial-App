
import * as React from "react";

const Toaster = () => {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    const handleToast = (event) => {
      const { toast, type, id } = event.detail;
      
      if (type === 'add') {
        setToasts((prev) => [...prev, toast]);
      } else if (type === 'dismiss') {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }
    };

    document.addEventListener('toast', handleToast);
    return () => document.removeEventListener('toast', handleToast);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white rounded-lg shadow-md p-4 min-w-[300px] animate-in fade-in slide-in-from-right"
        >
          <div className="flex justify-between items-center">
            <div className="font-medium">{toast.message}</div>
            <button
              onClick={() => {
                document.dispatchEvent(
                  new CustomEvent('toast', {
                    detail: { id: toast.id, type: 'dismiss' }
                  })
                );
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export { Toaster };
