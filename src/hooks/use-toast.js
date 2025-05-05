
// A basic toast implementation
const toastTimeouts = {};
let toastId = 0;

const createToast = (message, options = {}) => {
  const id = String(toastId++);
  const toast = { id, message, ...options };
  
  document.dispatchEvent(
    new CustomEvent('toast', {
      detail: { toast, type: 'add' }
    })
  );
  
  if (options.duration !== Infinity) {
    toastTimeouts[id] = setTimeout(() => {
      dismissToast(id);
    }, options.duration || 5000);
  }
  
  return id;
};

const dismissToast = (id) => {
  document.dispatchEvent(
    new CustomEvent('toast', {
      detail: { id, type: 'dismiss' }
    })
  );
  
  if (toastTimeouts[id]) {
    clearTimeout(toastTimeouts[id]);
    delete toastTimeouts[id];
  }
};

export const toast = {
  success: (message, options = {}) => createToast(message, { ...options, variant: 'success' }),
  error: (message, options = {}) => createToast(message, { ...options, variant: 'error' }),
  warning: (message, options = {}) => createToast(message, { ...options, variant: 'warning' }),
  info: (message, options = {}) => createToast(message, { ...options, variant: 'info' }),
  default: (message, options = {}) => createToast(message, { ...options }),
  dismiss: dismissToast
};

export const useToast = () => {
  return { toast };
};
