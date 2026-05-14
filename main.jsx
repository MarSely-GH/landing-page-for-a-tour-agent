import "./data/destinations.js";
import "./data/reviews.js";
import "./components/Header.jsx";
import "./components/Hero.jsx";
import "./components/Advantages.jsx";
import "./components/Destinations.jsx";
import "./components/Reviews.jsx";
import "./components/FAQ.jsx";
import "./components/ContactForm.jsx";
import "./components/Footer.jsx";
import "./page.jsx";
import { mountHeroBlurTitle } from "./mountHeroBlurTitle.jsx";

const rootEl = document.getElementById("root");
if (rootEl) {
  rootEl.innerHTML = window.Page();
  mountHeroBlurTitle();

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const sections = rootEl.querySelectorAll(".anim-section:not(.anim-section--hero)");
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
    rootEl.querySelectorAll(".anim-section").forEach((el) => el.classList.add("anim-section--visible"));
  }
}
