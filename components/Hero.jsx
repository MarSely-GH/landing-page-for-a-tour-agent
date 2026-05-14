import { HERO_MAIN_TITLE } from "../data/heroTitle.js";

function heroCtaPrimary() {
  return `
    <div class="cta-row cta-row--hero-primary">
      <div class="cta-item">
        <a class="btn btn-phone" href="tel:+79199440052">Позвонить</a>
        <span class="micro">Отвечу лично</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-telegram" href="https://t.me/O_lgaS22" target="_blank" rel="noopener noreferrer">Telegram</a>
        <span class="micro">Подбор под запрос</span>
      </div>
    </div>
  `;
}

function heroCtaSecondary() {
  return `
    <div class="cta-row cta-row--hero-secondary">
      <div class="cta-item">
        <a class="btn btn-vk" href="https://vk.com/turagentonline72" target="_blank" rel="noopener noreferrer">VK</a>
        <span class="micro">На связи в VK</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-ghost" href="#contact">Подборка туров</a>
        <span class="micro">Без обязательств</span>
      </div>
    </div>
  `;
}

window.Hero = function Hero() {
  return `
    <section class="hero hero--editorial anim-section anim-section--hero">
      <div class="container hero-editorial-inner">
        <div class="hero-copy">
          <p class="kicker">Персональный подбор</p>
          <h1 class="hero-title">
            <span id="hero-blur-title-root">${HERO_MAIN_TITLE}</span>
          </h1>
          <p class="lead">
            Подбираю туры для семейных пар, семей с детьми и путешественниц, ценящих комфортный отдых…
          </p>
          <div class="trust-strip" role="list">
            <div class="trust-strip__item" role="listitem">
              <span class="trust-strip__label">На связи</span>
              <span class="trust-strip__text">Без колл-центров и шаблонов</span>
            </div>
            <div class="trust-strip__item" role="listitem">
              <span class="trust-strip__label">Бюджет</span>
              <span class="trust-strip__text">Подбор без лишних переплат</span>
            </div>
            <div class="trust-strip__item" role="listitem">
              <span class="trust-strip__label">Сопровождение</span>
              <span class="trust-strip__text">От заявки до возвращения домой</span>
            </div>
          </div>
          ${heroCtaPrimary()}
          ${heroCtaSecondary()}
        </div>
        <figure class="hero-portrait">
          <img
            class="hero-portrait__img"
            src="./assets/avatar.png"
            alt="Фото турагента"
            width="900"
            height="1200"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  `;
};
