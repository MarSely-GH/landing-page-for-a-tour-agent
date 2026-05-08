window.Destinations = function Destinations() {
  const cards = window.destinations
    .map((item) => window.Card(`<h3>${item.title}</h3><p class="muted">${item.description}</p>`))
    .join("");

  return `
    <section class="section">
      <div class="container">
        <h2>Направления</h2>
        <p class="muted">Подберу направление под ваш ритм отдыха - от спокойного семейного до более насыщенного.</p>
        <div class="grid-3 mt-14">${cards}</div>
      </div>
    </section>
  `;
};
