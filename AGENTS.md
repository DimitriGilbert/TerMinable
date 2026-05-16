# AGENTS.md

TerMinable is a shadcn/ui terminal simulator component published via a shadcn registry. The Next.js app is a demo/docs site deployed to GitHub Pages via static export.

## Package Manager

Use **bun**. No npm or yarn.

## Build & Dev Commands

- Dev: `bun run dev`
- Build: `bun run build` (or `bun run clean-build` to wipe `out/` first)
- Lint: `bun run lint`
- Typecheck: `bun run typecheck`
- Quick check (lint + typecheck): `bun run check`
- Format: `bun run format:write`
- Registry build: `bun run registry:build` (runs `shadcn build`, outputs to `public/r/`)
- Full site deploy: `bun run do-the-site`

## Path Aliases

- `~/` → `src/`
- `~registry/` → `registry/`

## Architecture

The core deliverable lives in `registry/components/ui/Terminable.tsx` — this is what gets distributed via the shadcn registry. The demo site under `src/` consumes it.

Registry config: `registry.json` (uses shadcn registry schema).

## Component Work — CRITICAL WORKFLOW

### The Rule
- ALWAYS fix the Terminable component in `registry/components/ui/Terminable.tsx`, then rebuild the registry
- NEVER fix component issues directly in `src/` demo files — those consume the registry output
- Demo-specific errors (e.g. a page only in `src/app/`) are fixed in the demo site directly

### The Workflow (follow this exact order)
1. **Fix** component code in `registry/components/ui/Terminable.tsx`
2. **Rebuild** registry with `bun run registry:build` (outputs to `public/r/`)
3. **Fix** any demo-site-specific errors in `src/`
4. **Verify** with `bun run check` (lint + typecheck must pass)

### Why registry:build matters
The published component is what `shadcn build` produces in `public/r/`. The demo site imports from `registry/` via the `~registry/` alias, but the actual distributable is the built output. Changes to the component must be verified against the registry build.

## Modernization

This project is mid-modernization. See `MODERNIZATION_PLAN.md` for the full plan and current phase. Key decisions already made: React 19 + Next.js 16, Tailwind v4, drop Radix Menubar, drop `react-icons`, make Sonner optional, CSS custom properties for theming, native elements for title bar variants.

## Code Rules

### No `any`
Never use `any`, `as any`, `: any`. Use proper types, `unknown`, or generics.

### No hardcoded colors
Use CSS custom properties (e.g. `var(--terminable-bg)`) for theming. No hardcoded hex values like `bg-[#1a1a1a]` or `text-[#00ff00]`.

### DRY — Components & Types
Always search for existing components before creating new ones. Follow shadcn/ui patterns already in the project.

### Dependencies
Check `package.json` before adding new packages. Prefer what's already available.

### LSP errors must be fixed
Type errors and lint errors prevent the registry from building correctly.

## Conventions

- ESLint uses `@typescript-eslint` with strict type-checked rules. Use `inline-type-imports` for type imports.
- Unused variables prefixed with `_` are allowed.
- Prettier with `prettier-plugin-tailwindcss`.
- Follow the shadcn/ui component patterns already in the project.
- Use `lucide-react` for icons (not `react-icons`).
