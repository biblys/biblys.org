# biblys.org

Site vitrine de [Biblys](https://biblys.org), le logiciel libre pour créer des boutiques de livres en ligne.

## Stack technique

- **[Astro 5](https://astro.build/)** — framework de site statique
- **[Tailwind CSS](https://tailwindcss.com/)** — styles utilitaires
- Basé sur le template [AstroWind](https://github.com/onwidget/astrowind)

## Développement

```bash
npm install       # Installer les dépendances
npm run dev       # Serveur de développement (localhost:4321)
```

## Commandes disponibles

| Commande          | Action                                         |
| :---------------- | :--------------------------------------------- |
| `npm run dev`     | Démarre le serveur de développement            |
| `npm run build`   | Build de production vers `./dist/`             |
| `npm run preview` | Prévisualise le site buildé localement         |
| `npm run check`   | Vérification : astro check + ESLint + Prettier |
| `npm run fix`     | Correction automatique ESLint + Prettier       |

## Structure

```
src/
├── pages/          # Routes du site (.astro, .md)
├── components/
│   ├── widgets/    # Sections de page (Hero, Features, Pricing…)
│   ├── ui/         # Éléments UI primitifs
│   └── common/     # Utilitaires partagés (Meta, Analytics…)
├── layouts/        # Templates de mise en page
├── config.yaml     # Configuration centrale du site
└── navigation.ts   # Liens du header, footer et réseaux sociaux
```

## Déploiement

Le site est déployé automatiquement via GitHub Actions.

## Liens

- Site : [biblys.org](https://biblys.org)
- Code source de Biblys : [github.com/biblys/biblys](https://github.com/biblys/biblys)
- Documentation : [docs.biblys.org](https://docs.biblys.org)
