import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Micro Frontend Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div style={{ 
            padding: '2rem', 
            textAlign: 'center', 
            border: '1px solid #ff6b6b',
            borderRadius: '4px',
            backgroundColor: '#ffe0e0',
            color: '#d63031',
            margin: '1rem 0'
          }}>
            <h3>⚠️ Micro Frontend Error</h3>
            <p>Failed to load micro frontend component.</p>
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Error Details</summary>
              <pre style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                {this.state.error?.message || 'Unknown error'}
              </pre>
            </details>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;