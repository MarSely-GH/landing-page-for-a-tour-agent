function contactCtaButtons() {
  return `
    <div class="cta-row cta-row--contact">
      <div class="cta-item">
        <a class="btn btn-phone" href="tel:+79199440052">Позвонить</a>
        <span class="micro">Лично</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-telegram" href="https://t.me/O_lgaS22" target="_blank" rel="noopener noreferrer">Telegram</a>
        <span class="micro">Быстрый ответ</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-vk" href="https://vk.com/turagentonline72" target="_blank" rel="noopener noreferrer">VK</a>
        <span class="micro">Удобно вам</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-ghost" href="https://t.me/O_lgaS22" target="_blank" rel="noopener noreferrer">Подборка туров</a>
        <span class="micro">Без обязательств</span>
      </div>
    </div>
  `;
}

window.ContactForm = function ContactForm() {
  return `
    <section class="section section-contact anim-section" id="contact">
      <div class="container container--narrow section-contact__inner">
        <h2>Свяжемся и подберём отдых</h2>
        <p class="section-lead">Напишите или позвоните — разберём пожелания и бюджет без спешки и без обязательств.</p>
        ${contactCtaButtons()}
      </div>
    </section>
  `;
};
