import { services } from "../_data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section className="section services-section" aria-labelledby="services">
      <SectionHeading
        id="services"
        title="Services"
        copy="UI/UX designer crafting simple, smart, and impactful digital experiences for web and mobile."
      />

      <div className="services-map">
        <div className="service-orb" aria-hidden="true">
          <span />
        </div>
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <strong>{service.number}</strong>
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
