const faqItems = [
  {
    question: "Можно ли подобрать тур строго в моем бюджете?",
    answer: "Да. Сначала фиксируем комфортный диапазон, затем я показываю только реально подходящие варианты.",
  },
  {
    question: "Вы помогаете, если вопрос возникает уже в поездке?",
    answer: "Да, я остаюсь на связи до, во время и после отдыха.",
  },
  {
    question: "Сколько времени занимает подбор?",
    answer: "Обычно первая подборка приходит в тот же день или на следующий, в зависимости от запроса.",
  },
];

window.FAQ = function FAQ() {
  const rows = faqItems
    .map(
      (item) => `
      <div class="faq-row">
        <h3 class="faq-row__q">${item.question}</h3>
        <p class="faq-row__a">${item.answer}</p>
      </div>`
    )
    .join("");

  return `
    <section class="section section-faq anim-section">
      <div class="container container--narrow">
        <h2>Вопросы</h2>
        <p class="section-lead">Коротко о том, как мы работаем.</p>
        <div class="faq-stack">${rows}</div>
      </div>
    </section>
  `;
};
