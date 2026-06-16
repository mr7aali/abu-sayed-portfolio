import Image from "next/image";
import { aboutCards } from "../_data/portfolio";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="about-hero">
        <div className="about-card">
          <span className="eyebrow">UI/UX Designer</span>
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I design clean digital products that feel simple, useful, and
            visually sharp from the first screen to the final handoff.
          </p>

          <div className="about-points">
            {aboutCards.map((card) => (
              <article key={card.title}>
                <span aria-hidden="true" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Image
          src="/portfolio/about-portrait.png"
          alt="Md. Abu Sayed in a black suit"
          width={1024}
          height={1792}
          className="about-image"
        />
      </div>

      <div className="intro-block">
        <h2>Introduction</h2>
        <p className="intro-subtitle">
          Fresh ideas, balanced systems, and attention to every screen.
        </p>
        <p>
          I am a passionate UI/UX designer with years of experience creating
          meaningful digital experiences. I enjoy solving problems through
          user-centered design and turning complex ideas into simple,
          intuitive interfaces. My design process is driven by research,
          empathy, and iteration, helping me create polished products that look
          professional and work beautifully.
        </p>
        <a className="download-bar" href="#contact">
          Download CV
        </a>
      </div>
    </section>
  );
}
