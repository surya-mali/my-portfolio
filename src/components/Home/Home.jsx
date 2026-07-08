import profile from "../../assets/images/portfolio-photo.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home-section">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">

            <h5 className="hello-text">Hello, I'm</h5>

            <h1 className="home-title">
              Suryakant Mali
            </h1>

            <h3 className="home-role">
              Java Full Stack Developer
            </h3>

            <p className="home-description">
              Passionate Java Full Stack Developer with knowledge of Java,
              Spring Boot, React, MySQL, HTML, CSS, JavaScript and Bootstrap.
              I enjoy building responsive and user-friendly web applications.
            </p>

            <div className="mt-4">

              <a
                href="#contact"
                className="btn contact-btn me-3"
              >
                Contact Me
              </a>

              <a
                href="/suryakant_mali (1).pdf"
                download="Suryakant_Mali_Resume.pdf"
                className="btn resume-btn"
              >
                Download Resume
              </a>

            </div>

          </div>

          <div className="col-lg-6 text-center">

            <img
              src={profile}
              alt="Profile"
              className="home-image"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;