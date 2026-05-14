function ContactCtaButtons() {
  return (
    <div className="cta-row cta-row--contact">
      <div className="cta-item">
        <a className="btn btn-phone" href="tel:+79199440052">
          Позвонить
        </a>
        <span className="micro">Лично</span>
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
        <span className="micro">Быстрый ответ</span>
      </div>
      <div className="cta-item">
        <a
          className="btn btn-vk"
          href="https://vk.com/turagentonline72"
          target="_blank"
          rel="noopener noreferrer"
        >
          VK
        </a>
        <span className="micro">Удобно вам</span>
      </div>
      <div className="cta-item">
        <a className="btn btn-ghost" href="https://t.me/O_lgaS22" target="_blank" rel="noopener noreferrer">
          Подборка туров
        </a>
        <span className="micro">Без обязательств</span>
      </div>
    </div>
  );
}

export default function ContactForm() {
  return (
    <section className="section section-contact anim-section" id="contact">
      <div className="container container--narrow section-contact__inner">
        <h2>Свяжемся и подберём отдых</h2>
        <p className="section-lead">
          Напишите или позвоните — разберём пожелания и бюджет без спешки и без обязательств.
        </p>
        <ContactCtaButtons />
      </div>
    </section>
  );
}
