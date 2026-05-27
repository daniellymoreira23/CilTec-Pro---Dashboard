// Format currency
export const formatCurrency = (
  value: number,
  currency: string = 'BRL'
): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  }).format(value);
};

// Format percentage
export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

// Format number with thousand separators
export const formatNumber = (value: number, decimals: number = 0): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

// Format date
export const formatDate = (
  date: string | Date,
  format: string = 'dd/MM/yyyy'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  const formats: { [key: string]: string } = {
    'dd/MM/yyyy': `${day}/${month}/${year}`,
    'yyyy-MM-dd': `${year}-${month}-${day}`,
    'MM/dd/yyyy': `${month}/${day}/${year}`,
  };

  return formats[format] || formats['dd/MM/yyyy'];
};

// Truncate text
export const truncateText = (text: string, length: number = 50): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

// Generate random color
export const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// Check if email is valid
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
