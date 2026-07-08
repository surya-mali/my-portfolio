import profile from "../../assets/images/portfolio-photo.png";
import "./About.css";
function About() {
  return (
    <section id="about" className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">About Me</h2>
        <p className="text-muted">
          Get to know more about me.
        </p>
      </div>

      <div className="row align-items-center">

        <div className="col-lg-5 text-center">
          <img
            src={profile}
            alt="Profile"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "300px" }}
          />
        </div>

        <div className="col-lg-7">

          <h3>Who Am I?</h3>

          <p>
            I am a passionate Java Full Stack Developer and a BCA graduate.
            I enjoy building responsive web applications using modern technologies.
          </p>

          <p>
            I have hands-on experience with Java, Spring Boot,
            React, MySQL, HTML, CSS, JavaScript and Bootstrap.
            I am eager to learn new technologies and contribute to real-world projects.
          </p>

          <div className="row mt-4">

            <div className="col-md-6">
              <h5>🎓 Education</h5>
              <p>Bachelor of Computer Applications (BCA)</p>
            </div>

            <div className="col-md-6">
              <h5>💼 Experience</h5>
              <p>Fresher</p>
            </div>

            <div className="col-md-6 mt-3">
              <h5>📍 Location</h5>
              <p>Pune, Maharashtra</p>
            </div>

            <div className="col-md-6 mt-3">
              <h5>🌐 Languages</h5>
              <p>English, Hindi, Marathi</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;