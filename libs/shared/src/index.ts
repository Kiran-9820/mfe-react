// Module Federation types
export interface MFEComponentProps {
  [key: string]: any;
}

export interface RemoteComponentConfig {
  scope: string;
  module: string;
  url?: string;
}

// Error boundary types
export interface ErrorInfo {
  componentStack: string;
}

// Webpack Module Federation types
declare global {
  const __webpack_share_scopes__: any;
  interface Window {
    [key: string]: any;
  }
}

// Common utilities for micro-frontends
export const loadRemoteComponent = async (config: RemoteComponentConfig) => {
  try {
    // @ts-ignore
    const container = window[config.scope];
    if (!container) {
      throw new Error(`Remote container ${config.scope} not found`);
    }
    
    if (typeof __webpack_share_scopes__ !== 'undefined') {
      await container.init(__webpack_share_scopes__.default);
    }
    const factory = await container.get(config.module);
    return factory();
  } catch (error) {
    console.error(`Failed to load remote component: ${config.scope}/${config.module}`, error);
    throw error;
  }
};

// Environment utilities
export const getEnvironment = () => {
  return process.env.NODE_ENV || 'development';
};

export const isDevelopment = () => getEnvironment() === 'development';
export const isProduction = () => getEnvironment() === 'production';

// URL utilities for different environments
export const getMFEUrl = (mfeName: string, port?: number) => {
  if (isDevelopment()) {
    const defaultPorts: Record<string, number> = {
      'header-mfe': 3001,
      'products-mfe': 3002,
      'shell': 3000
    };
    const mfePort = port || defaultPorts[mfeName] || 3000;
    return `http://localhost:${mfePort}`;
  }
  // In production, these would come from environment variables or config
  return process.env[`${mfeName.toUpperCase().replace('-', '_')}_URL`] || '';
};

export * from './types';