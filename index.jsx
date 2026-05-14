const root = document.getElementById("root");
if (root) {
  root.innerHTML = window.Page();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const sections = root.querySelectorAll(".anim-section:not(.anim-section--hero)");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-section--visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    sections.forEach((el) => io.observe(el));
  } else {
    root.querySelectorAll(".anim-section").forEach((el) => el.classList.add("anim-section--visible"));
  }
}
