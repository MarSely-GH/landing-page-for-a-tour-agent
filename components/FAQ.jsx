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

export default function FAQ() {
  return (
    <section className="section section-faq anim-section">
      <div className="container container--narrow">
        <h2>Вопросы</h2>
        <p className="section-lead">Коротко о том, как мы работаем.</p>
        <div className="faq-stack">
          {faqItems.map((item) => (
            <div className="faq-row" key={item.question}>
              <h3 className="faq-row__q">{item.question}</h3>
              <p className="faq-row__a">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
