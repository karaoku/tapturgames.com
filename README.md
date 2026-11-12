# tapturgames.com

Taptur Games' website, served by GitHub Pages from the root of `main`. Plain HTML and CSS, no build step.

| Page | English | Türkçe |
|---|---|---|
| Home (Zomnia) | `/` | `/tr/` |
| Support | `/support/` | `/tr/destek/` |
| Privacy policy | `/privacy/` | `/tr/gizlilik/` |
| Account deletion | `/delete-account/` | `/tr/hesap-silme/` |

Other files:

- `CNAME`: the custom domain (tapturgames.com).
- `app-ads.txt`: AdMob's authorised sellers line; the publisher ID comes from the AdMob app IDs in `karaoku/game4` (`config/ads.json`).
- `404.html`, `robots.txt`, `sitemap.xml`.
- Icons from the Taptur Games fox mark: `favicon.ico` (16/32/48, strokes thickened so the small sizes stay legible), `assets/img/favicon-32.png`, `assets/img/favicon-192.png`, `apple-touch-icon.png`, `assets/img/taptur-icon-512.png` (logo in the structured data) and `assets/img/taptur-icon.png` (white on transparent, the studio section).
- `assets/site.css`: every page's styles. `assets/fonts/`: Special Elite (Apache 2.0) and Courier Prime (OFL), served from the site so no visitor data goes to a font CDN. `assets/img/`: logos, key art and screenshots taken from the game repository (`store/screenshots/tr/google_play`, cropped below the caption band).

## Store links

- Privacy policy URL: https://tapturgames.com/privacy/
- Account deletion URL (Google Play): https://tapturgames.com/delete-account/
- Support URL (App Store): https://tapturgames.com/support/
- Marketing / developer website: https://tapturgames.com/

## Editing

Each page has its own header and footer, so a change to the menu or footer goes into every `index.html`. The contact address appears as `support@tapturgames.com` in all pages:

```bash
grep -rl "support@tapturgames.com" --include=*.html .
```

When the privacy policy changes, update the date at the top of both `privacy/index.html` and `tr/gizlilik/index.html`.

To preview locally:

```bash
python3 -m http.server 8000
```
