import { reviews } from "../data/reviews.js";

export default function Reviews() {
  return (
    <section className="section section-reviews anim-section">
      <div className="container container--narrow">
        <h2>Отзывы</h2>
        <p className="section-lead">Слова тех, кто уже выезжал со мной.</p>
        <div className="quote-stack">
          {reviews.map((review) => (
            <figure className="quote-block" key={review.name}>
              <blockquote className="quote-block__text">
                <p>{review.text}</p>
              </blockquote>
              <figcaption className="quote-block__cite">{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
