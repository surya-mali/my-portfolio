import "./Skill.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiPostman,
} from "react-icons/si";

function Skill (){

    return(
         <section id="skills" className="skills-section">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-subtitle">
            Technologies I use to build modern web applications.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaHtml5 className="skill-icon" />
              <h5>HTML5</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaCss3Alt className="skill-icon" />
              <h5>CSS3</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaJs className="skill-icon" />
              <h5>JavaScript</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaBootstrap className="skill-icon" />
              <h5>Bootstrap</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaReact className="skill-icon" />
              <h5>React JS</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaJava className="skill-icon" />
              <h5>Java</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <SiSpringboot className="skill-icon" />
              <h5>Spring Boot</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <SiHibernate className="skill-icon" />
              <h5>Hibernate</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <SiMysql className="skill-icon" />
              <h5>MySQL</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaGitAlt className="skill-icon" />
              <h5>Git</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <FaGithub className="skill-icon" />
              <h5>GitHub</h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="skill-card">
              <SiPostman className="skill-icon" />
              <h5>Postman</h5>
            </div>
          </div>

        </div>

      </div>

    </section>
    )
}
export default Skill;