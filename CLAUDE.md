# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site ("kmy blog") built with Astro 5, deployed to GitHub Pages at https://yuji0276.github.io. The site language is Japanese.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (output to `dist/`)
- `npm run preview` — Preview production build locally

No test or lint commands are configured.

## Architecture

- **Framework**: Astro 5 with MDX and Sitemap integrations
- **Content**: Blog posts live in `src/content/blog/` as Markdown/MDX files
- **Content schema** (`src/content.config.ts`): Posts require `title`, `description`, `pubDate`, and `tags` (string array); `updatedDate` is optional
- **Path alias**: `@/*` maps to `src/*` (configured in tsconfig.json)
- **Site constants**: `src/consts.ts` holds `SITE_TITLE` and `SITE_DESCRIPTION`
- **Layouts**: `src/layouts/BlogPost.astro` wraps individual blog posts
- **Pages**: `src/pages/` — index, about, projects, blog listing, blog detail (`[...slug].astro`), tag filtering (`blog/tag/[tag].astro`), RSS feed
- **Deployment**: Pushes to `main` trigger GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to GitHub Pages
