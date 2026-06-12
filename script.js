const header = document.querySelector("[data-header]");

if (header) {
  let ticking = false;

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  updateHeader();
  window.addEventListener("scroll", onScroll, { passive: true });
}