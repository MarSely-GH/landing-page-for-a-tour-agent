import { createRoot } from "react-dom/client";
import BlurText from "./components/BlurText.jsx";
import { HERO_MAIN_TITLE } from "./data/heroTitle.js";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export function mountHeroBlurTitle() {
  const el = document.getElementById("hero-blur-title-root");
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const root = createRoot(el);
  root.render(
    <BlurText
      text={HERO_MAIN_TITLE}
      delay={340}
      animateBy="words"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      className="hero-blur-text"
    />
  );
}
