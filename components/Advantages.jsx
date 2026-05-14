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

const timelineSteps = [
  "Вы пишете или звоните и рассказываете пожелания",
  "Я готовлю понятную подборку подходящих вариантов",
  "Вы выбираете, я оформляю и проверяю детали",
  "Вы отдыхаете, я остаюсь на связи",
];

export default function Advantages() {
  return (
    <section className="section section-about anim-section">
      <div className="container container--narrow">
        <h2>Личный турагент на связи</h2>
        <p className="section-lead">
          Меня зовут Селютина Ольга. Подбираю путешествия под ваш запрос: состав семьи, формат отдыха, бюджет и
          спокойствие.
        </p>
        <p className="pull-quote">Вы отдыхаете — рутину по отдыху беру на себя.</p>

        <h3 className="section-subtitle">Что важно</h3>
        <div className="value-stack">
          {advantageLines.map((row) => (
            <div className="value-line" key={row.t}>
              <span className="value-line__title">{row.t}</span>
              <span className="value-line__desc">{row.d}</span>
            </div>
          ))}
        </div>

        <h3 className="section-subtitle section-subtitle--spaced">Вопросы, которые решаю вместе с вами</h3>
        <div className="pain-stack">
          {pains.map((pain, i) => (
            <div className="pain-row" key={pain}>
              <span className="pain-row__q">{pain}</span>
              <span className="pain-row__a">{solutions[i]}</span>
            </div>
          ))}
        </div>

        <h3 className="section-subtitle section-subtitle--spaced">Как мы работаем</h3>
        <ol className="timeline">
          {timelineSteps.map((text, i) => (
            <li className="timeline-step" key={text}>
              <span className="timeline-step__n">{i + 1}</span>
              <span className="timeline-step__txt">{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
