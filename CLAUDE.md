# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commandes courantes

```bash
npm run dev          # Serveur de développement (localhost:4321)
npm run build        # Build de production vers ./dist/
npm run preview      # Prévisualiser le site buildé localement
npm run check        # Vérification complète : astro check + ESLint + Prettier
npm run fix          # Correction automatique ESLint + Prettier
```

Il n'y a pas de tests unitaires dans ce projet.

## Architecture

C'est un site statique **Astro 5** utilisant le template **AstroWind**, personnalisé pour [Biblys](https://biblys.org) (logiciel open-source de vente de livres).

### Configuration centrale

- `src/config.yaml` — configuration principale du site (nom, URL, langue `fr`, blog désactivé, analytics)
- `src/navigation.ts` — liens du header, footer, et réseaux sociaux
- `vendor/integration/` — intégration Astro personnalisée qui charge `config.yaml` et expose un module virtuel `astrowind:config` importable depuis n'importe quel composant

### Structure des sources

- `src/pages/` — routes du site (fichiers `.astro` et `.md`)
- `src/layouts/` — templates de mise en page (`Layout.astro`, `PageLayout.astro`, `LandingLayout.astro`)
- `src/components/widgets/` — composants de sections de page (Hero, Features, Pricing, Footer, Header…)
- `src/components/ui/` — éléments UI primitifs (Button, Background, Image…)
- `src/components/common/` — utilitaires partagés (Analytics, Meta, Schema…)
- `src/types.d.ts` — types TypeScript pour tous les composants (Widget, Hero, Features, Pricing, etc.)

### Alias de chemin

`~` pointe vers `./src` (configurable dans `tsconfig.json` et `vite`).

### Styles

Tailwind CSS sans styles de base. Les couleurs du thème sont définies via des variables CSS : `--aw-color-primary`, `--aw-color-secondary`, `--aw-color-accent`. Dark mode basé sur la classe CSS.

### Déploiement

Le site est déployé via un workflow GitHub Actions (`.github/workflows/`). `netlify.toml` et `vercel.json` sont présents pour les deux plateformes.
