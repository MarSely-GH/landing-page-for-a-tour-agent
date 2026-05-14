window.Destinations = function Destinations() {
  const rows = window.destinations
    .map(
      (item) => `
      <li class="dest-row">
        <span class="dest-row__title">${item.title}</span>
        <span class="dest-row__desc">${item.description}</span>
      </li>`
    )
    .join("");

  return `
    <section class="section section-destinations anim-section">
      <div class="container container--narrow">
        <h2>Направления</h2>
        <p class="section-lead">Подберу ритм отдыха — от спокойного семейного до более насыщенного.</p>
        <ul class="dest-list">${rows}</ul>
      </div>
    </section>
  `;
};
