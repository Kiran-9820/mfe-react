import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const RemoteHeader = React.lazy(() => import('headerMfe/Header'));

interface RemoteHeaderWrapperProps {
  title?: string;
}

const RemoteHeaderWrapper: React.FC<RemoteHeaderWrapperProps> = ({ title }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading Header...</div>}>
        <RemoteHeader title={title} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteHeaderWrapper;