import "./Project.css";
function Project(){

    return(
    <section id="projects" className="projects-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Here are some projects I have built using modern technologies.
          </p>
        </div>

        <div className="row g-4">

          {/* Project 1 */}

          <div className="col-lg-4 col-md-6">
            <div className="project-card">

              <img
                src="https://via.placeholder.com/400x220"
                className="img-fluid project-image"
                alt="Project"
              />

              <div className="project-content">

                <h4>Employee Management System</h4>

                <p>
                  Developed using React, Spring Boot and MySQL.
                  It supports CRUD operations with responsive UI.
                </p>

                <div className="project-buttons">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="btn btn-info text-white"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          </div>

          {/* Project 2 */}

          <div className="col-lg-4 col-md-6">
            <div className="project-card">

              <img
                src="https://via.placeholder.com/400x220"
                className="img-fluid project-image"
                alt="Project"
              />

              <div className="project-content">

                <h4>Student Management System</h4>

                <p>
                  Built using Spring Boot, React and MySQL with
                  complete CRUD functionality.
                </p>

                <div className="project-buttons">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="btn btn-info text-white"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          </div>

          {/* Project 3 */}

          <div className="col-lg-4 col-md-6">
            <div className="project-card">

              <img
                src="https://via.placeholder.com/400x220"
                className="img-fluid project-image"
                alt="Project"
              />

              <div className="project-content">

                <h4>Portfolio Website</h4>

                <p>
                  Personal portfolio built using React and Bootstrap
                  with responsive design.
                </p>

                <div className="project-buttons">

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="btn btn-info text-white"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
export default Project;