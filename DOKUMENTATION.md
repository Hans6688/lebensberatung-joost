# Lebensberatung Joost – Website-Redesign

**Stand:** 25.10.2026 (live auf lebensberatung-joost.de via Netlify)

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
| `lebensberatung-trier/` | Zielseite „Psychologische Beratung in Trier“ (Anzeigen + lokale SEO) |
| `trauerbegleitung/` | Themenseite Verlust/Trauer (Anzeigengruppe) |
| `krise-neuorientierung/` | Themenseite Krisen/Erschöpfung/Entscheidungen (Anzeigengruppe) |
| `beziehung-familie/` | Themenseite Konflikte Partnerschaft/Familie, Einzelberatung (Anzeigengruppe) |
| `ueber-mich/` | Porträtseite Elske Joost (Sitelink/Vertrauen) |
| `ablauf-honorar/` | Ablauf, Honorar und alle FAQs inkl. Krankenkassen-Frage (Sitelink) |
| `kontakt/` | Kontaktseite mit echtem Formular (Netlify-Formularfunktion) |
| `danke/` | Bestätigungsseite nach Formularversand – Zählseite fürs Conversion-Tracking (noindex) |
| `impressum.html`, `datenschutz.html` | Rechtstexte |
| `stil.css` | zentrales Stylesheet |
| `bilder/` | optimierte Fotos (Beratungssituationen, Porträt) sowie Hintergrundvideo + Standbild für die Startseite |
| `robots.txt`, `sitemap.xml` | Suchmaschinen-Steuerung |
| `einwilligung.js` | Zustimmungs-Hinweis und Google-Ads-Tag (lädt nur nach Einwilligung) |
| `_redirects` | Weiterleitungen alter Wix-Adressen (wird von Netlify gelesen) |

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

## 3b. Livegang-Checkliste (Domain lebensberatung-joost.de)

Die Domain bleibt dieselbe, nur der Betreiber dahinter wechselt (Wix → Netlify).
Google-Platzierungen bleiben erhalten, wenn diese Reihenfolge eingehalten wird:

1. Netlify-Konto anlegen (Anmeldung mit GitHub-Konto Hans6688) und das Repo
   `lebensberatung-joost` als Site verbinden – keine Build-Einstellungen nötig.
2. Probelauf auf der Netlify-Übergangsadresse: Startseite, Impressum, Datenschutz
   und die Weiterleitungen testen (z. B. `/über-mich` muss auf die Startseite führen).
3. Die Domain wird bei **Hostinger** verwaltet (Nameserver dns-parking.com,
   geprüft am 15.10.2026); von dort zeigt nur ein DNS-Verweis auf Wix. Im
   Hostinger-Kundenbereich die zwei DNS-Einträge setzen, die Netlify anzeigt
   (www per CNAME auf die Netlify-Adresse, Hauptdomain per A-Eintrag).
4. In Netlify **www.lebensberatung-joost.de als primäre Domain** festlegen
   (alle alten Links und unsere Canonical-Angaben nutzen www; Netlify leitet die
   Variante ohne www automatisch dorthin um). HTTPS-Zertifikat kommt automatisch.
5. Erst wenn die neue Seite unter der Domain läuft: Wix-Abo kündigen. Die Domain
   liegt NICHT bei Wix, sondern bei Hostinger – das Kündigen des Wix-Abos ist
   daher ungefährlich für die Domain. Das Hostinger-Konto (Domainverwaltung)
   muss bestehen bleiben.
6. Google Search Console: Domain-Property für lebensberatung-joost.de anlegen
   (Bestätigung per DNS-Eintrag) und `sitemap.xml` einreichen.
7. Nach dem Livegang die GitHub-Pages-Vorschau abschalten (Repo-Einstellungen →
   Pages), damit Google nicht zwei Kopien der Seite sieht.

Alle alten Wix-Adressen (laut Wix-Sitemap: /, /über-mich, /podcast, /agb,
/datenschutz, /impressum) leiten per `_redirects` dauerhaft auf ihre neuen
Gegenstücke weiter. /podcast und /agb der alten Seite waren inhaltsleer
(AGB nur Wix-Platzhaltertext), es geht kein Inhalt verloren.

## 4. Betrieb

Die Seite ist live auf **https://lebensberatung-joost.de** (Hauptadresse ohne www;
www leitet dauerhaft dorthin um). Hosting: Netlify, automatische Veröffentlichung
bei jedem Push auf den main-Zweig. Formular-Anfragen laufen über die
Netlify-Formularfunktion (im Netlify-Konto unter „Forms" einsehbar; dort auch die
E-Mail-Benachrichtigung an die Kundin einrichten/prüfen). Die frühere
GitHub-Pages-Vorschau wurde am 21.10.2026 abgeschaltet, damit Google nur eine
Fassung der Seite sieht.

## 5. Offene Punkte

- **PLZ-Frage** aus dem Redesign-Gespräch ist noch offen (Einzugsgebiet/lokale
  Auffindbarkeit) – vor dem Livegang klären.
- **Livegang:** Zielplattform ist Netlify (kostenlos, Auto-Deploy aus GitHub,
  Weiterleitungen über `_redirects`). Offen: Netlify-Konto anlegen, Repo verbinden,
  Domain lebensberatung-joost.de umstellen (klären, wo die Domain verwaltet wird –
  vermutlich Wix; Domain beim Kündigen des Wix-Abos unbedingt behalten/umziehen).

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
| 26.09.2026 | Ersatz für das entfallene Vertrauenselement: Abschnitt „Typische Anliegen“ mit drei fiktiven, klar gekennzeichneten Fallbeispielen (zusammengesetzt, ohne Bezug zu realen Personen) sowie Vertrauenszeile im Startbereich (45 Jahre Erfahrung, vertraulich, erste Stunde kostenlos). |
| 15.10.2026 | Livegang vorbereitet: `_redirects`-Datei mit dauerhaften Weiterleitungen der alten Wix-Adressen (u. a. /über-mich, /impressum, /datenschutz) für das Hosting auf Netlify angelegt. |
| 15.10.2026 | Umzugspaket komplettiert: alte Wix-Sitemap ausgewertet (6 Adressen, inkl. bisher unbekannter leerer Seiten /podcast und /agb), Weiterleitungsliste vervollständigt, eigene 404-Fehlerseite, Auslieferungs-Einstellungen (Bild-Zwischenspeicherung, Sicherheits-Header) und Livegang-Checkliste in der Doku. |
| 21.10.2026 | Acht Unterseiten für Google-Ads-Anzeigengruppen und Sitelinks angelegt (Struktur laut Kampagnenplan): vier Themen-Zielseiten, Über-mich, Ablauf &amp; Honorar (mit allen FAQs inkl. ehrlicher Krankenkassen-Antwort), Kontakt mit echtem Formularversand über Netlify und /danke als Conversion-Zählseite. Startseite, Menü, Fußzeile (Themen-Spalte), interne Verlinkung, Sitemap, Weiterleitungen (/über-mich → /ueber-mich/) und Datenschutzerklärung (Netlify-Hosting + Formular) angepasst. FAQ-Strukturdaten von der Startseite auf /ablauf-honorar/ verlegt (keine Dubletten). Hinweis: Das Formular versendet erst nach dem Umzug auf Netlify; auf der GitHub-Vorschau ist es ohne Funktion. |
| 21.10.2026 | SEO/GEO-Ausbau nach Livegang: alle internen Adressangaben auf die Live-Hauptadresse ohne www umgestellt; Fakten-Leiste (erste Stunde kostenlos, 60 Min/60 €, Formate, Zeiten, vertraulich) auf allen Themen- und der Honorar-Seite; je Themenseite eigenes Dienstleistungs-Datenpaket und drei themenspezifische Fragen-Antworten (sichtbar + maschinenlesbar, ohne Dubletten); Bilder mit Alt-Texten und Querverweise „Verwandte Themen“ ergänzt; GitHub-Pages-Vorschau abgeschaltet. |
| 25.10.2026 | Google-Ads-Tag (AW-18528573256) DSGVO-konform eingebunden: Zustimmungs-Hinweis beim ersten Besuch, Tag lädt ausschließlich nach „Erlauben“, Wahl jederzeit über „Cookie-Einstellungen“ im Seitenfuß änderbar. Datenschutzerklärung um Abschnitt „Google Ads Conversion-Tracking“ ergänzt und Cookie-Aussage angepasst. Conversion-Ziel in Google Ads: Aufruf der Seite /danke/. |
