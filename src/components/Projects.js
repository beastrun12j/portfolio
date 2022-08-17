import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import androidProjImg1 from "../assets/img/androidProject1.gif";
import androidProjImg2 from "../assets/img/androidProject2.gif";
import androidProjImg3 from "../assets/img/androidProject3.gif";
import androidProjImg4 from "../assets/img/androidProject4.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import frontendProjImg1 from "../assets/img/frontendProject1.gif";
import frontendProjImg2 from "../assets/img/frontendProject2.gif";
import frontendProjImg3 from "../assets/img/frontendProject3.gif";
import frontendProjImg4 from "../assets/img/frontendProject4.gif";
import fullStackProjImg1 from "../assets/img/fullStackProject1.gif";
import fullStackProjImg2 from "../assets/img/fullStackProject2.gif";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const frontendProjects = [
    {
      title: "Crypto Chase",
      url: "https://github.com/beastrun12j/crypto-chase",
      imgUrl: frontendProjImg1,
    },
    {
      title: "Pokemania",
      url: "https://github.com/beastrun12j/PokeMania",
      imgUrl: frontendProjImg2,
    },
    {
      title: "Portfolio",
      url: "https://github.com/beastrun12j/portfolio",
      imgUrl: frontendProjImg3,
    },
    {
      title: "React Meals",
      url: "https://github.com/beastrun12j/ReactMeals",
      imgUrl: frontendProjImg4,
    },
  ];

  const fullStackProjects = [
    {
      title: "Price Assist",
      url: "https://github.com/beastrun12j/Price-Assist",
      imgUrl: fullStackProjImg1,
    },
    {
      title: "In Progress",
      url: "https://github.com/beastrun12j/Social-Fuse",
      imgUrl: fullStackProjImg2,
    },
  ];

  const androidProjects = [
    {
      title: "Clouddy",
      url: "https://github.com/beastrun12j/Clouddy",
      imgUrl: androidProjImg1,
    },
    {
      title: "News Block",
      url: "https://github.com/beastrun12j/News-Block",
      imgUrl: androidProjImg2,
    },
    {
      title: "Ilegar Libro",
      url: "https://github.com/beastrun12j/Ilegar-Libro",
      imgUrl: androidProjImg3,
    },
    {
      title: "Quaking Earth",
      url: "https://github.com/beastrun12j/Quaking-Earth",
      imgUrl: androidProjImg4,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{ marginBottom: "30px" }}>Projects</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Android</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {frontendProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {fullStackProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {androidProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="background"
        src={colorSharp2}
      ></img>
    </section>
  );
};
