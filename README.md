# Micro Frontend Architecture with TypeScript & Module Federation

This project demonstrates a modern Micro Frontend architecture using React, TypeScript, Webpack 5 Module Federation, and integrated bundle analyzers.

## Architecture Overview

- **Shell Application** (Port 3000): Main host application that orchestrates micro frontends
- **Header MFE** (Port 3001): Provides navigation header component
- **Products MFE** (Port 3002): Manages product listing and display

## Features

✅ **TypeScript Integration**: Full TypeScript support across all micro frontends
✅ **Module Federation**: Webpack 5 Module Federation for runtime integration
✅ **Bundle Analyzers**: Built-in bundle analysis for performance optimization
✅ **Error Boundaries**: Graceful error handling for micro frontend failures
✅ **Lazy Loading**: Dynamic imports with React.lazy for optimal performance
✅ **Shared Dependencies**: Optimized dependency sharing between micro frontends

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation & Setup
```bash
# Install all dependencies
npm run install:all

# Start all micro frontends simultaneously
npm start
```

### Individual Application Management
```bash
# Start individual applications
npm run start:header    # Header MFE on http://localhost:3001
npm run start:products  # Products MFE on http://localhost:3002
npm run start:shell     # Shell App on http://localhost:3000
```

### Bundle Analysis
```bash
# Analyze all bundles
npm run analyze

# Analyze individual bundles
npm run analyze:header
npm run analyze:products
npm run analyze:shell
```

### Build for Production
```bash
# Build all applications
npm run build

# Build individual applications
npm run build:header
npm run build:products
npm run build:shell
```

## Application Details

### Shell Application (Host)
- **Port**: 3000
- **Role**: Main orchestrator
- **Consumes**: Header and Products micro frontends
- **Features**: Error boundaries, lazy loading, type-safe remote imports

### Header MFE (Remote)
- **Port**: 3001
- **Exposes**: `./Header` component
- **Features**: Navigation, responsive design, TypeScript interfaces

### Products MFE (Remote)
- **Port**: 3002
- **Exposes**: `./Products` component
- **Features**: Product listing, mock API integration, loading states

## Technology Stack

- **Frontend**: React 19.1.0, TypeScript 4.9.5
- **Bundling**: Webpack 5 with Module Federation
- **Styling**: CSS Modules, responsive design
- **Development**: Hot module replacement, concurrent development
- **Analysis**: Webpack Bundle Analyzer
- **Testing**: Jest, React Testing Library

## Development Workflow

1. **Development**: Run `npm start` to start all applications concurrently
2. **Testing**: Each micro frontend can be developed and tested independently
3. **Integration**: The shell application automatically integrates all micro frontends
4. **Analysis**: Use `npm run analyze` to optimize bundle sizes
5. **Production**: Build optimized bundles with `npm run build`

## Module Federation Configuration

### Shared Dependencies
- React & React-DOM are singleton shared dependencies
- Ensures consistent React versions across all micro frontends
- Optimized loading and reduced bundle duplication

### Error Handling
- Custom error boundaries for graceful micro frontend failure handling
- Fallback UI when remote micro frontends are unavailable
- Development-friendly error messages

## Performance Optimization

- **Code Splitting**: Automatic code splitting via Module Federation
- **Lazy Loading**: React.lazy for dynamic imports
- **Bundle Analysis**: Integrated webpack-bundle-analyzer
- **Shared Dependencies**: Optimized dependency sharing
- **Tree Shaking**: Dead code elimination

## TypeScript Support

- Full TypeScript integration across all micro frontends
- Type declarations for Module Federation remotes
- Strict type checking and IntelliSense support
- Consistent tsconfig.json configurations

## Deployment Considerations

- Each micro frontend can be deployed independently
- Shell application dynamically loads remote micro frontends
- Configure CORS headers for cross-origin requests
- Use proper caching strategies for remote entries

## Troubleshooting

### Common Issues
1. **Port Conflicts**: Ensure ports 3000, 3001, 3002 are available
2. **CORS Errors**: Check Access-Control-Allow-Origin headers
3. **Module Not Found**: Verify remote applications are running
4. **Type Errors**: Check Module Federation type declarations

### Debug Mode
```bash
# Run with verbose logging
npm start -- --verbose
```

## Contributing

1. Each micro frontend should be independently testable
2. Maintain consistent TypeScript configurations
3. Update type declarations when exposing new components
4. Run bundle analysis before submitting changes