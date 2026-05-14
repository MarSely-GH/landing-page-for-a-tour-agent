const pains = [
  "Боюсь ошибиться с отелем",
  "Не понимаю, за что переплачиваю",
  "Нет времени все сравнивать",
  "Переживаю за поддержку в поездке",
];

const solutions = [
  "Предлагаю варианты под ваш формат семьи и уровень комфорта.",
  "Показываю, из чего складывается цена, и разумные альтернативы в бюджете.",
  "Фильтрую варианты и оставляю только то, что имеет смысл.",
  "Остаюсь рядом до вылета и во время отдыха.",
];

const advantageLines = [
  { t: "Бюджет и пожелания", d: "Подбор с учётом ваших рамок и запросов." },
  { t: "Связь", d: "На связи до, во время и после поездки." },
  { t: "По всей России", d: "Работаю онлайн, удобно из любого города." },
  { t: "Честно", d: "Плюсы и нюансы — без навязывания." },
];

window.Advantages = function Advantages() {
  const painRows = pains
    .map(
      (pain, i) => `
      <div class="pain-row">
        <span class="pain-row__q">${pain}</span>
        <span class="pain-row__a">${solutions[i]}</span>
      </div>`
    )
    .join("");

  const advRows = advantageLines
    .map(
      (row) => `
      <div class="value-line">
        <span class="value-line__title">${row.t}</span>
        <span class="value-line__desc">${row.d}</span>
      </div>`
    )
    .join("");

  const steps = [
    "Вы пишете или звоните и рассказываете пожелания",
    "Я готовлю понятную подборку подходящих вариантов",
    "Вы выбираете, я оформляю и проверяю детали",
    "Вы отдыхаете, я остаюсь на связи",
  ]
    .map(
      (text, i) => `
      <li class="timeline-step">
        <span class="timeline-step__n">${i + 1}</span>
        <span class="timeline-step__txt">${text}</span>
      </li>`
    )
    .join("");

  return `
    <section class="section section-about anim-section">
      <div class="container container--narrow">
        <h2>Личный турагент на связи</h2>
        <p class="section-lead">
          Меня зовут Селютина Ольга. Подбираю путешествия под ваш запрос: состав семьи, формат отдыха, бюджет и спокойствие.
        </p>
        <p class="pull-quote">Вы отдыхаете — рутину по отдыху беру на себя.</p>

        <h3 class="section-subtitle">Что важно</h3>
        <div class="value-stack">${advRows}</div>

        <h3 class="section-subtitle section-subtitle--spaced">Вопросы, которые решаю вместе с вами</h3>
        <div class="pain-stack">${painRows}</div>

        <h3 class="section-subtitle section-subtitle--spaced">Как мы работаем</h3>
        <ol class="timeline">${steps}</ol>
      </div>
    </section>
  `;
};
