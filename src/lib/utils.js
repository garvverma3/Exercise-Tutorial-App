
/**
 * Combines multiple class names into a single string
 * @param {Array<string>} classes - Array of class names
 * @returns {string} Combined class names
 */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a date to a string
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  });
}

/**
 * Format a number to a currency string
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code
 * @returns {string} Formatted currency string
 */
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export { cn, formatDate, formatCurrency };
