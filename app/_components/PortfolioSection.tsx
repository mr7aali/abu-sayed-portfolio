import { filters, portfolioItems } from "../_data/portfolio";

export function PortfolioSection() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="compact-heading">
        <h2>Portfolio</h2>
      </div>

      <div className="filter-row" aria-label="Portfolio filters">
        {filters.map((filter, index) => (
          <button className={index === 0 ? "is-active" : ""} key={filter}>
            {filter}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article className="portfolio-card" key={item.title}>
            <div className={`project-thumb ${item.slice}`} aria-hidden="true" />
            <div className="project-meta">
              <span>{item.title}</span>
              <small>UI/UX</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
