# Lebensberatung Joost – Website-Redesign

**Stand:** 26.09.2026

**Ursprünglich gebaut mit:** Claude (Claude-Code-Sitzung „Redesign Lebensberatung Joost“, August 2026)

## 1. Überblick

Redesign der Website **lebensberatung-joost.de** für Elske Joost – psychologische
Beratung für Menschen in belastenden Lebenssituationen, telefonisch, online
per Video oder persönlich vor Ort in Trier. Kernangebot laut Seite: erste Beratungsstunde
kostenlos, danach 60 Minuten für 60 Euro. Termine Mo–Fr nachmittags nach
Vereinbarung. Ansprache in Sie-Form.

## 2. Technik & Architektur

Bewusst einfach gehalten: **reines statisches HTML + CSS**, kein Framework,
kein Build-Schritt (SEO-/GEO-freundlich und ohne Wartungsaufwand).

## 3. Dateistruktur

| Datei/Ordner | Zweck |
|---|---|
| `index.html` | Startseite mit Angebot, Ablauf und Kontakt |
| `impressum.html`, `datenschutz.html` | Rechtstexte |
| `stil.css` | zentrales Stylesheet |
| `bilder/` | optimierte Fotos (Beratungssituationen, Porträt) sowie Hintergrundvideo + Standbild für die Startseite |
| `robots.txt`, `sitemap.xml` | Suchmaschinen-Steuerung |

## 3a. Hintergrundvideo auf der Startseite

Der Startbereich zeigt ein kurzes Naturvideo (Weizenfeld im Sonnenaufgang,
19 Sekunden, ohne Ton, läuft in Schleife). Damit die Ladezeit und damit die
Google-Bewertung nicht leidet, ist es bewusst zurückhaltend eingebaut:

- Beim Seitenaufruf lädt zuerst nur ein kleines Standbild (ca. 100 KB) –
  die Seite wirkt sofort fertig.
- Das Video (ca. 4,4 MB, von ursprünglich 75 MB verkleinert) lädt erst,
  nachdem die restliche Seite komplett geladen ist, und blendet dann weich ein.
- Auf Handys und kleinen Bildschirmen (unter 900 px Breite) lädt das Video
  gar nicht – dort bleibt das Standbild stehen. Das spart Datenvolumen und
  hält die mobile Seite schnell (Google bewertet mobil zuerst).
- Wer im Betriebssystem „Bewegung reduzieren“ oder den Datensparmodus
  aktiviert hat, bekommt ebenfalls nur das Standbild.

## 4. Betrieb

Änderungen an den HTML-Dateien vornehmen, committen und pushen. Der Weg der
Veröffentlichung auf lebensberatung-joost.de ist im Repository nicht hinterlegt
(siehe Offene Punkte).

## 5. Offene Punkte

- **PLZ-Frage** aus dem Redesign-Gespräch ist noch offen (Einzugsgebiet/lokale
  Auffindbarkeit) – vor dem Livegang klären.
- **Livegang-Status und Hosting-Weg unklar:** Wie und wo wird die Seite
  veröffentlicht (bisheriger Hoster der Domain)? Bitte ergänzen.

## 6. Änderungsprotokoll

| Datum | Änderung |
|---|---|
| 08/2026 | Redesign als statische HTML-Website erstellt (Claude-Code-Sitzung). |
| 25.08.2026 | Projekt auf GitHub übertragen; Dokumentation und KI-Briefing angelegt. |
| 30.08.2026 | Hintergrundvideo (Weizenfeld) im Startbereich ergänzt – SEO-schonend: Standbild zuerst, Video erst nach Seitenaufbau, nicht auf Mobilgeräten. |
| 30.08.2026 | Kundenwunsch: Überschrift im Startbereich und Seitentitel auf „Psychologische Beraterin und Pädagogin in Trier – auch online“ geändert; dritte Beratungsform „Persönliche Beratung in Trier“ (60 Min./60 €) ergänzt und in FAQ, Kontakt, Fußzeile und Suchmaschinen-Daten nachgezogen. |
| 30.08.2026 | Lesbarkeit: erste Textzeile im Startbereich („Psychologische Beraterin…“) als goldfarbenes Schildchen mit dunklem, halbtransparentem Hintergrund – gut lesbar vor dem Video und klar von der weißen Hauptüberschrift unterscheidbar. |
| 30.08.2026 | SEO: H1-Rolle getauscht – die keyword-relevante Zeile „Psychologische Beraterin und Pädagogin in Trier – auch online“ ist jetzt die H1, der Leitspruch bleibt rein optisch die große Schauzeile. Optik unverändert. |
| 30.08.2026 | SEO-Gesamtprüfung: Favicon ergänzt; Startbild wird vorgeladen; Bildmaße gegen Layout-Springen hinterlegt; „Rahmen und wichtiger Hinweis“ auf H2 korrigiert; Beratungsformen mit Preisen und Region in die strukturierten Daten aufgenommen; Brotkrumen-Daten auf der Erfahrungsberichte-Seite; veraltete Navigation auf Impressum/Datenschutz repariert; Sitemap-Datum aktualisiert. |
| 30.08.2026 | Sanfte Einblend-Animationen beim Scrollen (wie auf der alten Wix-Seite): Bild-/Textblöcke gleiten abwechselnd von links und rechts herein, Kartengruppen mit leichtem Versatz. Ohne JavaScript und bei „Bewegung reduzieren“ ist alles sofort sichtbar – Inhalte bleiben für Google voll lesbar. |
| 30.08.2026 | Kundenwunsch: erste Beratungsstunde kostenlos (Knöpfe, Honorar-Abschnitt, Preiskarten, FAQ, Kontakt) und Beratungszeiten Mo–Fr 15–18 Uhr ergänzt – sichtbar und in den strukturierten Daten (Öffnungszeiten, Preisangabe). |
| 26.09.2026 | Kundenwunsch: komplette Umstellung auf Sie-Ansprache; neue Texte für Willkommen, Beratung, Arbeitsweise, Über mich, Ablauf/Honorar und Kontakt; Termine jetzt „Mo–Fr am Nachmittag nach Vereinbarung“ (feste Uhrzeiten entfernt, auch aus den strukturierten Daten); Erfahrungsberichte vollständig entfernt (keine Einwilligung der betroffenen Personen zur Veröffentlichung) – Seite gelöscht, alle Verweise und Sitemap bereinigt. |
