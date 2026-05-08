window.Reviews = function Reviews() {
  const cards = window.reviews
    .map((review) => window.Card(`<p class="muted">"${review.text}"</p><h3 class="mt-14">${review.name}</h3>`))
    .join("");

  return `
    <section class="section">
      <div class="container">
        <h2>Отзывы путешественников</h2>
        <div class="grid-3 mt-14">${cards}</div>
      </div>
    </section>
  `;
};
