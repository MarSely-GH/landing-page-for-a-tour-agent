window.Reviews = function Reviews() {
  const blocks = window.reviews
    .map(
      (review) => `
      <figure class="quote-block">
        <blockquote class="quote-block__text">
          <p>${review.text}</p>
        </blockquote>
        <figcaption class="quote-block__cite">${review.name}</figcaption>
      </figure>`
    )
    .join("");

  return `
    <section class="section section-reviews anim-section">
      <div class="container container--narrow">
        <h2>Отзывы</h2>
        <p class="section-lead">Слова тех, кто уже выезжал со мной.</p>
        <div class="quote-stack">${blocks}</div>
      </div>
    </section>
  `;
};
