# TailAdmin Turborepo

This project has been converted to use Turborepo for better monorepo management and build performance.

## Project Structure

```
tailadmin-turborepo/
├── apps/
│   └── web/                 # Next.js application
├── packages/
│   ├── ui/                  # Shared UI components
│   └── config/              # Shared configurations
├── turbo.json               # Turborepo configuration
└── package.json             # Root package.json with workspaces
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm 10+

### Installation

```bash
# Install all dependencies
npm install

# Install dependencies for a specific workspace
npm install --workspace=apps/web
```

### Development

```bash
# Start all apps in development mode
npm run dev

# Start only the web app
npm run dev --workspace=apps/web

# Build all apps
npm run build

# Build only the web app
npm run build --workspace=apps/web
```

### Available Scripts

- `npm run dev` - Start all apps in development mode
- `npm run build` - Build all apps
- `npm run lint` - Lint all workspaces
- `npm run type-check` - Type check all workspaces
- `npm run clean` - Clean all build artifacts
- `npm run format` - Format code with Prettier

### Workspace Commands

You can run commands in specific workspaces using:

```bash
# Run command in specific workspace
npm run <script> --workspace=<workspace-name>

# Examples:
npm run dev --workspace=apps/web
npm run build --workspace=packages/ui
```

## Packages

### @tailadmin/ui
Shared UI components and utilities that can be used across all apps.

### @tailadmin/config
Shared configuration files for TypeScript, Tailwind CSS, and other tools.

## Benefits of Turborepo

1. **Faster Builds**: Intelligent caching and parallel execution
2. **Better Dependency Management**: Workspace-aware dependency resolution
3. **Code Sharing**: Easy sharing of components and utilities between apps
4. **Scalability**: Easy to add new apps and packages
5. **Developer Experience**: Unified commands and better tooling

## Adding New Apps

To add a new app:

1. Create a new directory in `apps/`
2. Add a `package.json` with the app configuration
3. Update the root `tsconfig.json` references
4. Update `turbo.json` if needed

## Adding New Packages

To add a new shared package:

1. Create a new directory in `packages/`
2. Add a `package.json` with the package configuration
3. Update the root `tsconfig.json` references
4. Add the package to apps that need it

## Migration Notes

The original TailAdmin Next.js app has been moved to `apps/web/` with all its dependencies and configurations preserved. The project structure has been optimized for monorepo development while maintaining all existing functionality.
