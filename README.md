# Itinerary

Turborepo monorepo for the Itinerary project.

## Apps

| App                   | Command                       | URL                   |
| --------------------- | ----------------------------- | --------------------- |
| `@repo/web` (Next.js) | `pnpm --filter @repo/web dev` | http://localhost:3000 |
| `@repo/api` (NestJS)  | `pnpm --filter @repo/api dev` | http://localhost:3001 |

## Packages

- `@repo/ui` — shared React components
- `@repo/eslint-config` — shared ESLint configs
- `@repo/typescript-config` — shared TypeScript configs

## Getting started

```bash
pnpm install
pnpm dev          # run all apps
pnpm build        # build all apps
pnpm lint         # lint all packages
pnpm test         # run all tests
pnpm check-types  # typecheck all packages
```

## Tooling

- **Turborepo** — task orchestration and caching
- **pnpm** — package manager
- **Vitest** — unit and e2e tests (`apps/web`, `apps/api`)
- **Husky + lint-staged** — pre-commit formatting and lint
- **GitHub Actions** — CI on push/PR (see `.github/workflows/ci.yml`)

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for web (Vercel) and API (Railway/ECS/etc.) deployment guidance.
