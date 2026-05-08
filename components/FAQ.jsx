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
  const cards = faqItems.map((item) => window.Card(`<h3>${item.question}</h3><p class="muted">${item.answer}</p>`)).join("");
  return `
    <section class="section">
      <div class="container">
        <h2>Частые вопросы</h2>
        <div class="grid-2 mt-14">${cards}</div>
      </div>
    </section>
  `;
};
