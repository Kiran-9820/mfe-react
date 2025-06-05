# Micro Frontend Development Workflow

## Quick Start

### Start all micro-frontends in development mode:
```bash
npm run start
# or for better logging
npm run start:dev
```

### Start individual micro-frontends:
```bash
npm run start:header    # Header MFE on port 3001
npm run start:products  # Products MFE on port 3002
npm run start:shell     # Shell app on port 3000
```

## Build Commands

### Build all applications:
```bash
npm run build
# or for production optimized builds
npm run build:prod
```

### Build individual applications:
```bash
npm run build:header
npm run build:products
npm run build:shell
```

## Testing

### Run all tests:
```bash
npm run test
```

### Run tests in watch mode:
```bash
npm run test:watch
```

### Run tests with coverage:
```bash
npm run test:coverage
```

## Nx Features

### View dependency graph:
```bash
npm run graph
```

### Run only affected projects:
```bash
npm run affected:build
npm run affected:test
```

### Format code:
```bash
npm run format:write
```

## Project Structure

- `header-mfe/` - Header micro-frontend (port 3001)
- `products-mfe/` - Products micro-frontend (port 3002)  
- `shell/` - Shell application that orchestrates MFEs (port 3000)
- `libs/shared/` - Shared utilities and types
- `nx.json` - Nx workspace configuration
- `tsconfig.base.json` - Base TypeScript configuration

## Nx Benefits Added

1. **Smart rebuilds** - Only rebuilds what changed
2. **Parallel execution** - Runs tasks across projects in parallel
3. **Dependency graph** - Visualize project dependencies
4. **Affected commands** - Only run tasks on changed projects
5. **Caching** - Smart caching of build and test results
6. **Code generation** - Scaffolding new projects and components