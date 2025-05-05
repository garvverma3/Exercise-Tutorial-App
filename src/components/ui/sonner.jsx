
// A simplified version of the Sonner component
import React from 'react';

const Toaster = ({ ...props }) => {
  return (
    <div 
      className="fixed top-4 right-4 z-50 w-full max-w-xs"
      {...props} 
    />
  );
};

const toast = {
  success: (message) => console.log('SUCCESS:', message),
  error: (message) => console.error('ERROR:', message),
  info: (message) => console.info('INFO:', message),
  warning: (message) => console.warn('WARNING:', message),
};

export { Toaster, toast };
