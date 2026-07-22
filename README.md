# Yousra Sab — Portfolio

Portfolio professionnel de Yousra Sab, Digital Marketing Specialist. Projet Next.js (App Router, TypeScript), prêt pour un déploiement immédiat sur Vercel.

## Structure

- `app/page.tsx` — le portfolio complet (une seule page, ancres de navigation internes)
- `app/layout.tsx` — layout racine + chargement des polices (Bricolage Grotesque, Inter via `next/font`)
- `app/globals.css` — le système de design (couleurs, typographie, composants)
- `public/images/` — toutes les captures et visuels des projets
- `public/Yousra_Sab_CV.pdf` — CV téléchargeable depuis le site

## Développement local

```bash
npm install
npm run dev
```
Ouvrir [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
npm start
```

## Déploiement sur Vercel

**Option 1 — via GitHub (recommandé)**
1. Pousser ce dossier vers un nouveau dépôt GitHub.
2. Aller sur [vercel.com/new](https://vercel.com/new), importer le dépôt.
3. Vercel détecte Next.js automatiquement — aucune configuration nécessaire. Cliquer sur **Deploy**.
4. Une URL publique (`*.vercel.app`) est générée en 1 à 2 minutes.

**Option 2 — via la CLI Vercel**
```bash
npm i -g vercel
vercel login
vercel        # aperçu
vercel --prod # mise en production
```

## Modifier le contenu

Tout le texte et la structure se trouvent dans `app/page.tsx`, organisés par section (Hero, À propos, Parcours, KCC, Shopify, WordPress, UX/UI, Contact, Footer). Les images se remplacent simplement en changeant le fichier dans `public/images/` (garder le même nom, ou mettre à jour le chemin dans `page.tsx`).

## Remplacer le CV

Remplacer `public/Yousra_Sab_CV.pdf` par un nouveau fichier portant exactement le même nom — aucune autre modification nécessaire.
