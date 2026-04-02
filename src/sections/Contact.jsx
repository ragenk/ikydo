import ContactForm from "../components/ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-subtitle">Let&apos;s build something together.</p>
      <div className="contact-form-wrapper pixel-frame">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
