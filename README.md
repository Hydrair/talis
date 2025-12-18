# Flusswald GitHub Pages Website

Eine Jekyll-Website für GitHub Pages mit Informationen zu Reisesystem, Orfnir Lore und Charakteren.

## Setup

### Lokales Testen

1. Ruby und Bundler installieren
2. Dependencies installieren:
   ```bash
   bundle install
   ```
3. Lokalen Server starten:
   ```bash
   bundle exec jekyll serve
   ```
4. Website öffnen: http://localhost:4000

### GitHub Pages

Die Website wird automatisch auf GitHub Pages veröffentlicht, wenn du die Dateien in den `main` Branch pusht.

## Konfiguration

### Hintergrundbild

1. Füge dein Hintergrundbild in `assets/images/` ein
2. Benenne es `background.jpg` (oder `.png`, `.webp`)
3. Das Bild wird automatisch als Hintergrund verwendet

### OneDrive-Integration

1. Öffne `index.md`
2. Ersetze `DEIN_ONEDRIVE_ORDNER_LINK_HIER` mit deinem OneDrive-Ordner-Link
3. Für eingebettete Mediaplayer: Kopiere den Embed-Code von OneDrive und füge ihn in den `mediaplayer-container` Div ein

## Seiten

- **Home** (`index.md`): Hauptseite mit Navigation und Podcast-Links
- **Reisesystem** (`reisesystem.md`): Informationen zum Reisesystem
- **Orfnir Lore** (`orfnir-lore.md`): Hintergrundgeschichte und Weltwissen
- **Charaktere** (`charaktere.md`): Charakterübersicht und Beschreibungen

## Struktur

```
.
├── _config.yml          # Jekyll-Konfiguration
├── _layouts/
│   └── default.html     # Basis-Layout mit Navigation
├── assets/
│   ├── css/
│   │   └── style.css    # Styling mit Hintergrundbild
│   └── images/          # Hier das Hintergrundbild einfügen
├── index.md             # Hauptseite
├── reisesystem.md       # Reisesystem-Seite
├── orfnir-lore.md       # Orfnir Lore-Seite
└── charaktere.md        # Charaktere-Seite
```