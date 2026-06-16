export function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="compact-heading">
        <h2>Contact me</h2>
        <p>Feel free to contact me for any inquiries.</p>
      </div>

      <form className="contact-form">
        <input aria-label="Name" placeholder="Name" />
        <input aria-label="Email" placeholder="Email" type="email" />
        <input aria-label="Phone Number" placeholder="Phone Number" />
        <select aria-label="Service of Interest" defaultValue="">
          <option value="" disabled>
            Service Of Interest
          </option>
          <option>App Design</option>
          <option>Web Design</option>
          <option>UX Research</option>
          <option>Prototype</option>
        </select>
        <textarea aria-label="Project Details" placeholder="Project Details" />
        <button className="btn btn-small btn-muted" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
