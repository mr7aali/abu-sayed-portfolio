import type { CSSProperties } from "react";
import { skills } from "../_data/portfolio";

export function SkillsSection() {
  return (
    <section className="skills-section site-container" aria-label="Design skills">
      {skills.map((skill) => (
        <article
          className="skill-ring"
          key={skill.name}
          style={{ "--value": `${skill.value}%` } as CSSProperties}
        >
          <div className="ring">
            <span>{skill.name.split(" ").at(-1)?.slice(0, 2)}</span>
          </div>
          <strong>{skill.value}%</strong>
          <p>{skill.name}</p>
        </article>
      ))}
    </section>
  );
}
