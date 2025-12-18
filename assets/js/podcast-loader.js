// OneDrive Podcast Loader
// Lädt die neueste Podcast-Folge aus der Jekyll-Konfiguration

(function () {
  'use strict';

  function loadPodcastPlayer() {
    const container = document.getElementById('mediaplayer-container');
    if (!container) return;

    // Hole die Podcast-Konfiguration aus dem HTML (wird von Jekyll eingefügt)
    const podcastData = window.podcastConfig || {};
    const embedUrl = podcastData.latest_embed_url || 'https://1drv.ms/u/c/ea8111db562a4084/IQS9L2RsaLVzS5EyGE8TUQhrAT2_98MNbEs9Hr0D4e06rpI';
    const folderLink = podcastData.folder_link || 'https://1drv.ms/f/c/ea8111db562a4084/IgB7gKfM4i67Q74C4PkWphMSAcYuyxn0zQR5CimJQRXAJVY?e=d7aUtg';

    // Erstelle den iframe
    const iframe = document.createElement('iframe');
    iframe.id = 'podcast-iframe';
    iframe.src = embedUrl;
    iframe.width = '100%';
    iframe.height = '120';
    iframe.frameBorder = '0';
    iframe.scrolling = 'no';
    iframe.style.minHeight = '400px';

    // Erstelle Hinweis-Text
    const hint = document.createElement('p');
    hint.style.marginTop = '1rem';
    hint.style.fontSize = '0.9rem';
    hint.style.color = '#666';
    hint.style.padding = '0.5rem';
    hint.style.backgroundColor = 'rgba(74, 158, 255, 0.1)';
    hint.style.borderRadius = '4px';
    hint.innerHTML = '<strong>💡 Aktualisierung:</strong> Um die neueste Podcast-Folge anzuzeigen, öffne den <a href="' + folderLink + '" target="_blank">OneDrive-Ordner</a>, wähle die neueste Datei, klicke auf "Teilen" → "Einbetten" und aktualisiere die <code>podcast.latest_embed_url</code> in <code>_config.yml</code>.';

    // Leere den Container und füge Elemente hinzu
    container.innerHTML = '';
    container.appendChild(iframe);
    container.appendChild(hint);
  }

  // Lade beim Seitenaufruf
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPodcastPlayer);
  } else {
    loadPodcastPlayer();
  }
})();

