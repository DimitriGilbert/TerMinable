# TerMinable Modernization Plan

## Overview

TerMinable is a shadcn/ui terminal simulator component. The primary deliverable is the component itself; the T3-based Next.js app is a demo/docs site hosted on GitHub Pages.

## Decisions Made

| Decision | Choice |
|---|---|
| Tailwind | Upgrade to v4 (CSS-native animations, drop tailwindcss-animate) |
| React / Next.js | React 19 + Next.js 16 |
| Menubar dependency | Drop Radix Menubar, use native elements |
| shadcn pattern | Follow latest base-ui conventions |
| Sonner | Make optional (callback props instead of hard dependency) |
| Theming | CSS custom properties via registry cssVars |
| Animation controls | Cleanup only (AbortController, no playback controls) |
| ESLint | Migrate to v9 flat config |
| T3 boilerplate | Keep @t3-oss/env-nextjs setup |
| Accessibility | Full a11y pass |
| Testing | No tests |
| Title bar | Multiple OS theme variants (macOS, Windows, Linux, minimal, none) |
| Package manager | Bun |

---

## Phase 1: Foundation Upgrades (Demo Site)

| Task | Details |
|---|---|
| **Upgrade to Next.js 16 + React 19** | Latest Next.js with App Router, React 19 with native ref support (no more `forwardRef`) |
| **Upgrade to Tailwind v4** | CSS-native config (`@theme` in CSS), drop `tailwindcss-animate`, drop `postcss.config.js` (TW4 uses Lightning CSS), update `globals.css` to v4 syntax |
| **Migrate ESLint to v9 flat config** | Replace `.eslintrc.cjs` with `eslint.config.mjs` |
| **Remove `shadcn-ui@0.9.4`** | Only keep `shadcn` (the current CLI). Remove the deprecated package. |
| **Remove `react-icons`** | Only used for `FaCopy` in one place. Replace with `lucide-react` already in the project. |
| **Update `components.json`** | Align with latest shadcn schema (Tailwind v4 conventions) |
| **Update README** | Replace T3 boilerplate with actual TerMinable documentation |

## Phase 2: Component Rewrite (The Core Deliverable)

| Task | Details |
|---|---|
| **Replace Radix Menubar with native elements** | The 3 traffic-light dots become plain `<div>`/`<button>` elements. No more `menubar` registry dependency. |
| **Add title bar variants** | New `titleBarVariant` prop: `"macos"` (dots), `"windows"` (min/max/close), `"linux"` (GNOME-style), `"minimal"` (just title), `"none"` (no title bar). Each rendered with pure HTML/CSS. |
| **CSS custom properties for theming** | Define `--terminable-bg`, `--terminable-prompt`, `--terminable-output`, `--terminable-titlebar-bg`, etc. via the registry's `cssVars` mechanism with light/dark variants. Remove all hardcoded hex colors (`bg-[#1a1a1a]`, `text-[#00ff00]`, etc.). |
| **Make sonner optional** | Remove hard `sonner` import. Add `onError`, `onCopySuccess`, `onCopyError` callback props. If consumer passes no callbacks, silently succeed. Document that consumers can wire these to any toast library. |
| **Fix `useMemo` misuse** | Replace `useMemo` wrapping `calculateTypingDelay` with a plain function or `useCallback`. The current memoization is pointless since the function uses `Math.random()`. |
| **Fix race conditions** | Use `useRef` for mounted state tracking. Guard all `setDisplay` calls with a mount check. Properly clean up on unmount via the effect cleanup. |
| **Add AbortController** | Abort async processing on unmount or when `start` changes to `false`. Prevents state updates on unmounted components. |
| **Fix clipboard handling** | Add feature detection for `navigator.clipboard`. Provide fallback using `document.execCommand('copy')` for non-HTTPS contexts. |
| **Fix import path in registry** | The published component hardcodes `~/components/ui/menubar` - update to use the standard `@/components/ui/` alias pattern or remove entirely (since we're dropping menubar). |
| **Drop `forwardRef`** | Use React 19's native ref prop pattern. |
| **Define `animate-blink`** | Currently referenced but never defined. Add as a CSS keyframe animation in the component's CSS or via Tailwind v4's `@keyframes` / `@theme`. |
| **Props cleanup** | Remove `greenMenu`, `yellowMenu`, `redMenu` props (replaced by `titleBarVariant`). Add `titleBarVariant`, `onError`, `onCopySuccess`, `onCopyError` callbacks. |

## Phase 3: Accessibility

| Task | Details |
|---|---|
| **`prefers-reduced-motion`** | Wrap typing animation in a media query check. If user prefers reduced motion, skip typing animation entirely (show full text immediately). |
| **Screen reader support** | Add `aria-label` to clickable commands ("Click to copy: {command}"), announce new output via `aria-live` regions properly. |
| **Keyboard accessibility** | Make copy-able commands focusable (`tabIndex={0}`), handle Enter/Space for copy. Add visual focus indicators. |
| **Semantic structure** | Use `<section>` with proper `role` and `aria-roledescription="terminal"` |

## Phase 4: Registry & Distribution

| Task | Details |
|---|---|
| **Update `registry.json`** | Use latest schema format with `cssVars` for light/dark theme tokens. Remove `menubar` from `registryDependencies`. Remove `sonner` from `dependencies` (now optional). |
| **Update `public/r/terminable.json`** | Rebuild after component rewrite to match new structure. |
| **Verify `shadcn build`** | Ensure the registry builds correctly with the updated `registry.json`. |

## Phase 5: Demo Site Polish

| Task | Details |
|---|---|
| **Update demo examples** | Showcase all new `titleBarVariant` options, CSS var theming, callback props instead of sonner toasts. |
| **Update docs page** | Add docs for new props, title bar variants, CSS var customization, and callback pattern. |
| **Fix `PkgMngCmdCopy`** | Replace `react-icons/fa` FaCopy with `lucide-react` Copy icon. |
| **Ensure GitHub Pages deploy still works** | Verify `output: "export"` + `gh-pages` pipeline still works with Next.js 16. |
