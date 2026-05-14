import { useSyncExternalStore } from "react";
import BlurText from "./BlurText.jsx";
import { HERO_MAIN_TITLE } from "../data/heroTitle.js";
import avatarSrc from "../assets/avatar.png";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

function HeroCtaPrimary() {
  return (
    <div className="cta-row cta-row--hero-primary">
      <div className="cta-item">
        <a className="btn btn-phone" href="tel:+79199440052">
          Позвонить
        </a>
        <span className="micro">Отвечу лично</span>
      </div>
      <div className="cta-item">
        <a
          className="btn btn-telegram"
          href="https://t.me/O_lgaS22"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <span className="micro">Подбор под запрос</span>
      </div>
    </div>
  );
}

function HeroCtaSecondary() {
  return (
    <div className="cta-row cta-row--hero-secondary">
      <div className="cta-item">
        <a
          className="btn btn-vk"
          href="https://vk.com/turagentonline72"
          target="_blank"
          rel="noopener noreferrer"
        >
          VK
        </a>
        <span className="micro">На связи в VK</span>
      </div>
      <div className="cta-item">
        <a className="btn btn-ghost" href="#contact">
          Подборка туров
        </a>
        <span className="micro">Без обязательств</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="hero hero--editorial anim-section anim-section--hero">
      <div className="container hero-editorial-inner">
        <div className="hero-copy">
          <p className="kicker">Персональный подбор</p>
          <h1 className="hero-title">
            {reduceMotion ? (
              HERO_MAIN_TITLE
            ) : (
              <BlurText
                text={HERO_MAIN_TITLE}
                delay={340}
                animateBy="words"
                direction="top"
                className="hero-blur-text"
              />
            )}
          </h1>
          <p className="lead">
            Подбираю туры для семейных пар, семей с детьми и путешественниц, ценящих комфортный отдых…
          </p>
          <div className="trust-strip" role="list">
            <div className="trust-strip__item" role="listitem">
              <span className="trust-strip__label">На связи</span>
              <span className="trust-strip__text">Без колл-центров и шаблонов</span>
            </div>
            <div className="trust-strip__item" role="listitem">
              <span className="trust-strip__label">Бюджет</span>
              <span className="trust-strip__text">Подбор без лишних переплат</span>
            </div>
            <div className="trust-strip__item" role="listitem">
              <span className="trust-strip__label">Сопровождение</span>
              <span className="trust-strip__text">От заявки до возвращения домой</span>
            </div>
          </div>
          <HeroCtaPrimary />
          <HeroCtaSecondary />
        </div>
        <figure className="hero-portrait">
          <img
            className="hero-portrait__img"
            src={avatarSrc}
            alt="Фото турагента"
            width={900}
            height={1200}
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
