import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Let's connect! Feel free to reach out.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
  <div className="contact-card">
    <FaEnvelope className="contact-icon" />
    <h5>Email</h5>

    <a href="mailto:suryakantmali2008@gmail.com" className="contact-link">
      suryakantmali2008@gmail.com
    </a>
  </div>
</div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <FaPhoneAlt className="contact-icon" />
              <h5>Phone</h5>
              <p>+91 9209245076</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <FaMapMarkerAlt className="contact-icon" />
              <h5>Location</h5>
              <p>Pune, Maharashtra</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <FaGithub className="contact-icon" />
              <h5>GitHub</h5>

              <a
                href="https://github.com/surya-mali"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-card">
              <FaLinkedin className="contact-icon" />
              <h5>LinkedIn</h5>

              <a
                href="https://www.linkedin.com/in/suryakant-mali-9b029a354/"
                target="_blank"
                rel="noreferrer"
              >
                Connect Now
              </a>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;