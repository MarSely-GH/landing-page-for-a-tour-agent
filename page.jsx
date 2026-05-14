import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Advantages from "./components/Advantages.jsx";
import Destinations from "./components/Destinations.jsx";
import Reviews from "./components/Reviews.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function AnimSectionsObserver() {
  useEffect(() => {
    const rootEl = document.getElementById("root");
    if (!rootEl) return;

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
      return () => io.disconnect();
    }

    rootEl.querySelectorAll(".anim-section").forEach((el) => el.classList.add("anim-section--visible"));
  }, []);

  return null;
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Destinations />
        <Reviews />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <AnimSectionsObserver />
    </>
  );
}
