
import * as React from "react";

// A simplified version of the toast hook
function useToast() {
  return {
    toast: {
      success: (message) => console.log('SUCCESS:', message),
      error: (message) => console.error('ERROR:', message),
      info: (message) => console.info('INFO:', message),
      warning: (message) => console.warn('WARNING:', message),
    },
    dismiss: () => {}
  };
}

const toast = {
  success: (message) => console.log('SUCCESS:', message),
  error: (message) => console.error('ERROR:', message),
  info: (message) => console.info('INFO:', message),
  warning: (message) => console.warn('WARNING:', message),
};

export { useToast, toast };
