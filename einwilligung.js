// Google-Ads-Messung – lädt erst nach ausdrücklicher Zustimmung (DSGVO/TDDDG)
(function () {
  var KENNUNG = 'AW-18528573256';
  var SCHLUESSEL = 'werbemessung-einwilligung';

  function tagLaden() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { dataLayer.push(arguments); };
    gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'denied'
    });
    gtag('js', new Date());
    gtag('config', KENNUNG);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + KENNUNG;
    document.head.appendChild(s);
  }

  function gespeicherteWahl() {
    try { return localStorage.getItem(SCHLUESSEL); } catch (e) { return null; }
  }
  function wahlSpeichern(wert) {
    try { localStorage.setItem(SCHLUESSEL, wert); } catch (e) {}
  }

  function bannerZeigen() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie-Hinweis');
    b.innerHTML =
      '<p><strong>Diese Website verwendet Cookies.</strong> Technisch notwendige Cookies sorgen dafür, dass die Website funktioniert. Mit Ihrer Zustimmung nutzen wir zusätzlich Cookies von Google, um den Erfolg unserer Werbeanzeigen zu messen. Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen" im Seitenfuß ändern. Mehr dazu in der <a href="/datenschutz.html">Datenschutzerklärung</a>.</p>' +
      '<div class="cookie-knoepfe">' +
      '<button type="button" id="cookie-ja" class="knopf terra">Alle akzeptieren</button>' +
      '<button type="button" id="cookie-nein" class="knopf hell">Nur notwendige</button>' +
      '</div>';
    document.body.appendChild(b);
    document.getElementById('cookie-ja').addEventListener('click', function () {
      wahlSpeichern('ja'); b.remove(); tagLaden();
    });
    document.getElementById('cookie-nein').addEventListener('click', function () {
      wahlSpeichern('nein'); b.remove();
    });
  }

  // Für den Link „Cookie-Einstellungen" im Seitenfuß
  window.cookieEinstellungen = function () {
    try { localStorage.removeItem(SCHLUESSEL); } catch (e) {}
    bannerZeigen();
  };

  var wahl = gespeicherteWahl();
  if (wahl === 'ja') { tagLaden(); }
  else if (wahl === null) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bannerZeigen);
    } else { bannerZeigen(); }
  }
})();
