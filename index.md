---
layout: default
title: Home
---

# Willkommen in Talis

Willkommen auf der Talis-Website! Hier findest du Informationen zu unserer PF2E-Welt.

## Infos

<ul class="page-links">
    <li><a href="{{ '/charaktere' | relative_url }}">Charaktere</a></li>
    <li><a href="{{ '/reisesystem' | relative_url }}">Reisesystem</a></li>
    <li><a href="{{ '/orfnir-lore' | relative_url }}">Orfnir Lore</a></li>
</ul>

## Wichtige Links

<ul class="page-links">
    <li><a href="https://trello.com/b/MWqTss2X/the-lands-of-sandbox-kingdom" target="_blank">📋 Trello Board</a></li>
    <li><a href="https://talis.as.forge-vtt.com/join" target="_blank">🎲 Foundry VTT (The Forge)</a></li>
</ul>

## Podcast

<p>Hier findest du alle Podcast-Folgen in unserem OneDrive-Ordner:</p>
<a href="https://1drv.ms/f/c/ea8111db562a4084/IgB7gKfM4i67Q74C4PkWphMSAcYuyxn0zQR5CimJQRXAJVY?e=d7aUtg" target="_blank" id="onedrive-link">
    📁 Zu den Podcast-Folgen (OneDrive)
</a>

<div class="mediaplayer-container" id="mediaplayer-container">
    <p><em>Lade Podcast-Player...</em></p>
</div>
<script>
    // Podcast-Konfiguration von Jekyll
    window.podcastConfig = {
        latest_embed_url: "{{ site.podcast.latest_embed_url }}",
        folder_link: "{{ site.podcast.folder_link }}"
    };
</script>
<script src="{{ '/assets/js/podcast-loader.js' | relative_url }}"></script>
