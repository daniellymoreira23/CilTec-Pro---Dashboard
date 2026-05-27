// User Types
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: 'admin' | 'manager' | 'user';
  created_at: string;
  updated_at: string;
}

// Dashboard Types
export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  unit?: string;
  icon?: string;
}

export interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Notification Types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  timestamp: string;
  read: boolean;
}

// Auth Types
export interface AuthUser {
  id: string;
  email: string;
  user_metadata?: Record<string, any>;
}

export interface AuthSession {
  user: AuthUser | null;
  session: any;
}
