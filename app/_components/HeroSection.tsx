import Image from "next/image";
import { socials, stats } from "../_data/portfolio";

export function HeroSection() {
  return (
    <section className="hero-section site-container" id="home">
      <div className="hero-copy">
        <p className="intro-kicker">HI I am</p>
        <p className="hero-name">Md. Abu Sayed</p>
        <h1>UI/UX designer</h1>

        <div className="social-row" aria-label="Social profiles">
          {socials.map((social) => (
            <a href="#contact" key={social} aria-label={`${social} profile`}>
              {social}
            </a>
          ))}
        </div>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            <span aria-hidden="true">+</span>
            Hire Me
            <span aria-hidden="true">+</span>
          </a>
          <a className="btn btn-outline" href="#about">
            Download CV
          </a>
        </div>

        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
              <i aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </i>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/banner-images.png"
        alt="Md. Abu Sayed holding a microphone"
        width={2000}
        height={2432}
        priority
        className="hero-banner-image"
      />
    </section>
  );
}
