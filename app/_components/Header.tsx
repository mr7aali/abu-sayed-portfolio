import { navItems } from "../_data/portfolio";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-container nav-shell">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-small btn-muted" href="#contact">
          <span aria-hidden="true">+</span>
          Hire Me
          <span aria-hidden="true">+</span>
        </a>
      </div>
    </header>
  );
}
