const pains = [
  "Боюсь ошибиться с отелем",
  "Не понимаю, за что переплачиваю",
  "Нет времени все сравнивать",
  "Переживаю за поддержку в поездке",
];

const solutions = [
  "Предлагаю варианты, которые подходят именно вашему формату семьи и уровню комфорта.",
  "Показываю, из чего складывается цена, и предлагаю разумные альтернативы в вашем бюджете.",
  "Беру на себя рутину: фильтрую варианты и оставляю для вас только лучшее.",
  "Остаюсь рядом и помогаю решить вопросы до вылета и во время отдыха.",
];

window.Advantages = function Advantages() {
  const painsHtml = pains
    .map((pain, index) => `<article class="pain"><strong>${pain}</strong><p class="muted">${solutions[index]}</p></article>`)
    .join("");

  const content = `
    <h2>Я ваш личный турагент, который всегда на связи</h2>
    <p>
      Меня зовут [Ваше имя], и моя задача - сделать ваш отдых легким, понятным и комфортным. Я подбираю
      путешествия не просто по цене, а под ваш реальный запрос: состав семьи, формат отдыха, удобство, бюджет и спокойствие.
    </p>
    <p class="highlight">Мои путешественники под моим крылом: вы отдыхаете, а рутину я беру на себя.</p>
    <div class="advantages-grid mt-14">
      <article class="advantage-item"><span class="advantage-icon" aria-hidden="true">💰</span><p>Подбираю туры с учетом вашего бюджета и пожеланий</p></article>
      <article class="advantage-item"><span class="advantage-icon" aria-hidden="true">🤝</span><p>На связи до, во время и после поездки</p></article>
      <article class="advantage-item"><span class="advantage-icon" aria-hidden="true">🌍</span><p>Работаю онлайн по всей России</p></article>
      <article class="advantage-item"><span class="advantage-icon" aria-hidden="true">✔</span><p>Честно рассказываю о плюсах и нюансах без навязывания</p></article>
    </div>
    <h2 class="mt-32">Что часто беспокоит - и как я это решаю</h2>
    <div class="grid-2 mt-10">${painsHtml}</div>
    <h2 class="mt-32">Как проходит работа</h2>
    <div class="grid-2 steps mt-14">
      <div class="step"><span class="step-number">1</span>Вы пишете или звоните и рассказываете пожелания</div>
      <div class="step"><span class="step-number">2</span>Я готовлю понятную подборку подходящих вариантов</div>
      <div class="step"><span class="step-number">3</span>Вы выбираете, я оформляю и проверяю детали</div>
      <div class="step"><span class="step-number">4</span>Вы отдыхаете, а я остаюсь на связи</div>
    </div>
  `;

  return `<section class="section section-soft"><div class="container">${window.Card(content)}</div></section>`;
};
