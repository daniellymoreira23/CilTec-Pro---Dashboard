// Application constants
export const APP_NAME = 'CilTec Pro Dashboard';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_ENDPOINTS = {
  USERS: '/api/users',
  DASHBOARD: '/api/dashboard',
  ANALYTICS: '/api/analytics',
  REPORTS: '/api/reports',
} as const;

// Roles
export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
} as const;

// Status colors
export const STATUS_COLORS = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-100 text-blue-800',
  pending: 'bg-gray-100 text-gray-800',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Date formats
export const DATE_FORMATS = {
  SHORT: 'dd/MM/yyyy',
  LONG: 'dd/MM/yyyy HH:mm:ss',
  ISO: 'yyyy-MM-dd',
} as const;
