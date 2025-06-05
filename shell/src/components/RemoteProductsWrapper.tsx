import React, { Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

const RemoteProducts = React.lazy(() => import('productsMfe/Products'));

const RemoteProductsWrapper: React.FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading Products...</div>}>
        <RemoteProducts />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteProductsWrapper;