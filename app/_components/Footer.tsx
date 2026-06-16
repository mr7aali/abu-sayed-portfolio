import { navItems, socials } from "../_data/portfolio";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <Logo />
        <nav aria-label="Footer navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials" aria-label="Social profiles">
          {socials.map((social) => (
            <a href="#contact" key={social}>
              {social}
            </a>
          ))}
        </div>
        <p>Md. Abu Sayed. All rights reserved.</p>
        <strong>Designed by mdsayed.abu@gmail.com</strong>
      </div>
    </footer>
  );
}
