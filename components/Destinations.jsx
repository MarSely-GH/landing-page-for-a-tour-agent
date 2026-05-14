import { destinations } from "../data/destinations.js";

export default function Destinations() {
  return (
    <section className="section section-destinations anim-section">
      <div className="container container--narrow">
        <h2>Направления</h2>
        <p className="section-lead">Подберу ритм отдыха — от спокойного семейного до более насыщенного.</p>
        <ul className="dest-list">
          {destinations.map((item) => (
            <li className="dest-row" key={item.title}>
              <span className="dest-row__title">{item.title}</span>
              <span className="dest-row__desc">{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
