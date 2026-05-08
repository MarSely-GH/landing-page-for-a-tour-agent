function contactCtaButtons() {
  return `
    <div class="cta-row">
      <div class="cta-item">
        <a class="btn btn-primary" href="tel:+70000000000">Позвонить</a>
        <span class="micro">Отвечу лично</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-telegram" href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">Написать в Telegram</a>
        <span class="micro">Подберу тур под ваш бюджет</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-vk" href="https://vk.com/your_vk" target="_blank" rel="noopener noreferrer">Написать в VK</a>
        <span class="micro">Отвечу лично в VK</span>
      </div>
      <div class="cta-item">
        <a class="btn btn-light" href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">Получить подборку туров</a>
        <span class="micro">Без обязательств</span>
      </div>
    </div>
  `;
}

window.ContactForm = function ContactForm() {
  const content = `
    <h2>Давайте подберем ваш комфортный отдых уже сегодня</h2>
    <p>Напишите или позвоните - помогу подобрать тур под ваши пожелания и бюджет. Без спешки и без обязательств.</p>
    ${contactCtaButtons()}
  `;
  return `<section class="section" id="contact"><div class="container">${window.Card(content)}</div></section>`;
};
