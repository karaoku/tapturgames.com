// Mobile menu and the screenshot rows' arrows. Everything works without it, only less handily.
(() => {
  const btn = document.querySelector(".menu-btn");
  if (btn) {
    const set = (open) => {
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", () => set(!document.body.classList.contains("menu-open")));
    document.querySelectorAll(".nav-wrap a").forEach((a) => a.addEventListener("click", () => set(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
    matchMedia("(min-width: 861px)").addEventListener("change", () => set(false));
  }

  document.querySelectorAll(".gallery").forEach((g) => {
    const track = g.querySelector(".gallery__track");
    const prev = g.querySelector('[data-dir="-1"]');
    const next = g.querySelector('[data-dir="1"]');
    if (!track || !prev || !next) return;
    const step = () => {
      const li = track.querySelector("li");
      return li ? li.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : track.clientWidth;
    };
    const update = () => {
      prev.disabled = track.scrollLeft <= 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    };
    [prev, next].forEach((b) => b.addEventListener("click", () => track.scrollBy({ left: Number(b.dataset.dir) * step(), behavior: "smooth" })));
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });
})();
