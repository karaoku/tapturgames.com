# tapturgames.com

Taptur Games' website. GitHub Pages builds it with Jekyll from the root of `main` on every push; there is nothing to build by hand.

## Pages

| Page | English | Türkçe |
|---|---|---|
| Studio home | `/` | `/tr/` |
| Zomnia | `/games/zomnia/` | `/tr/oyunlar/zomnia/` |
| Support | `/support/` | `/tr/destek/` |
| Privacy policy | `/privacy/` | `/tr/gizlilik/` |
| Account deletion | `/delete-account/` | `/tr/hesap-silme/` |

Store links: privacy policy `https://tapturgames.com/privacy/`, account deletion (Google Play) `https://tapturgames.com/delete-account/`, support (App Store) `https://tapturgames.com/support/`.

## How it is put together

- `_config.yml`: site settings, including `email` (the contact address used on every page).
- `_data/games.yml`: the games shown on the home page, in the footer and in each game page's header (name, logo, art, status, genre, platforms, store links).
- `_data/t.yml`: interface words (menu, footer, buttons) in English and Turkish.
- `_layouts/default.html`: every page's frame (`_includes/head.html`, `header.html`, `footer.html`).
- `_layouts/game.html`: a game page's header, from `_data/games.yml`; the page itself adds the rest.
- `_layouts/doc.html`: support, privacy and deletion pages, with the help-center side menu.
- `assets/css/site.css`: all styles. Colours, fonts and spacing are the variables at the top (`--accent` is the orange).
- `assets/fonts/`: Archivo (headings) and Inter (text), both SIL OFL, served from the site.
- `assets/img/`: the fox mark (`taptur-icon*.png`), share images (`og-*.jpg`), Zomnia's art, logo and screenshots.
- `CNAME` (the domain), `app-ads.txt` (AdMob), `robots.txt`, `sitemap.xml` (made from the pages), `404.html`.

Each page's front matter sets its `title`, `description` and `alt` (the same page in the other language).

## Adding a game

1. Add an entry to `_data/games.yml` (copy Zomnia's). Put its art and logo in `assets/img/`.
2. Copy `games/zomnia/index.html` to `games/<id>/index.html` and `tr/oyunlar/zomnia/index.html` to `tr/oyunlar/<id>/index.html`, then change `game:`, the text and the screenshots.
3. When it is in the stores, fill in `play:` and `appstore:` in `_data/games.yml`; the buttons on its page turn into links.

The home page lists every game in `_data/games.yml`. Its "Next game" card can go once there is more than one.

## Preview locally

```bash
gem install jekyll -v 3.10.0 kramdown-parser-gfm webrick
```

```bash
jekyll serve
```

Then open http://localhost:4000.
