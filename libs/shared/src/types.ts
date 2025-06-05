import * as React from 'react';

// Common React component types for micro-frontends
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  'data-testid'?: string;
}

// Module Federation specific types
export interface ModuleFederationConfig {
  name: string;
  filename: string;
  exposes?: Record<string, string>;
  remotes?: Record<string, string>;
  shared?: Record<string, any>;
}

// API response types that might be shared across MFEs
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

// Navigation types for shell app
export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
}