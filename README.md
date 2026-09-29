# Slideshows developer.overheid.nl

In dit project vind je presentaties die zijn gegeven vanuit developer.overheid.nl. De presentaties zijn geschreven in Marp: 
Marp: Markdown Presentation Ecosystem.

## Install
```
pnpm install
```
## Prerequisites
- Chromium (for headless generation stuff)

## Export to PDF
Run this inside a slideshow directory: 

```sh
marp --pdf --browser-path chromium ./index.md --allow-local-files --theme ../../themes/don_main.css
```