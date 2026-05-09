function heroCtaButtons() {
  return `
    <div class="cta-row">
      <div class="cta-item">
        <a class="btn btn-primary" href="tel:+79199440052">Позвонить</a>
        <span class="micro">Отвечу лично</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-telegram" href="https://web.telegram.org/a/#471578666" target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
        <span class="micro">Подберу тур под ваш бюджет</span>
      </div>
      <div class="cta-item">
        <a
          class="btn btn-vk"
          href="https://vk.com/turagentonline72"
          target="_blank"
          rel="noopener noreferrer"
        >Написать в VK</a>
        <span class="micro">Отвечу лично в VK</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-light" href="#contact">Получить подборку туров</a>
        <span class="micro">Без обязательств</span>
      </div>
    </div>
  `;
}

window.Hero = function Hero() {
  const content = `
    <span class="eyebrow">Персональный подбор туров</span>
    <h1>Отдых под моим крылом: вы отдыхаете - я беру всю организацию на себя</h1>
    <p class="lead">
      Подбираю туры для семейных пар, семей с детьми и женщин 50+ в Турцию, Египет, Шри-Ланку, Вьетнам,
      Таиланд, страны СНГ и по России. Со мной спокойно: учитываю бюджет, пожелания и сопровождаю на каждом этапе.
    </p>
    <div class="hero-metrics">
      <div class="metric"><strong>Лично на связи</strong><span>Без колл-центров и шаблонов</span></div>
      <div class="metric"><strong>Подбор без переплат</strong><span>Подбираю путешествия под ваш бюджет без переплат</span></div>
      <div class="metric"><strong>Сопровождение</strong><span>От момента подачи заявки до момента возвращения домой</span></div>
    </div>
    ${heroCtaButtons()}
  `;

  return `
    <section class="hero">
      <div class="container">
        <div class="hero-wrap">
          ${window.Card(content)}
          <div class="hero-photo-stack">
            <figure class="hero-photo-frame">
              <img
                id="hero-avatar-img"
                class="hero-photo"
                src="./assets/avatar.png"
                alt="Фото турагента"
                width="900"
                height="1200"
                loading="eager"
                decoding="async"
              />
            </figure>
            <button type="button" class="btn btn-light hero-photo-toggle" id="hero-photo-toggle">
              Показать другое фото
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
};
