# Workshop Codebase Guidelines

## Build & Development Commands
- `pnpm run dev` - Start development server
- `pnpm run build` - Build production version
- `pnpm run preview` - Preview production build
- `pnpm run check` - TypeScript checks
- `pnpm run format` - Format code with Prettier
- `pnpm run lint` - Check code with ESLint & Prettier
- `pnpm run test:e2e` - Run end-to-end tests with Playwright
- `pnpm run test:e2e -- --project=chromium` - Test in Chrome only
- `pnpm run test:e2e -- e2e/demo.test.ts` - Run specific test file

## Code Style Guidelines
- **TypeScript**: Strict mode enabled; prefer explicit types for function params and returns
- **Svelte Files**: Use `<script lang="ts">` with typed props
- **Formatting**: 4-space indent, double quotes, trailing commas, 128 char line limit
- **Imports**: Group by type (svelte, lib, components) with spacing between groups
- **Components**: Use PascalCase for filenames, camelCase for variables
- **Models**: Define interfaces in separate files under `src/lib/model`
- **Error Handling**: Use type-checked error handling where possible
- **CSS**: TailwindCSS with typography and forms plugins

## Project Structure
- `/src/lib` - Shared components, models, and utilities
- `/src/routes` - SvelteKit routes with +page.svelte files
- `/src/lib/wizard` - Wizard flow components and steps