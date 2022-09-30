import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.jpeg";
import projImg2 from "../assets/img/project-2.jpeg";
import projImg3 from "../assets/img/project-7.png";
import projImg4 from "../assets/img/project-4.jpeg";
import projImg5 from "../assets/img/project-5.png";
import projImg6 from "../assets/img/project-6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import ecommerce from "../assets/img/Ecommerce-2.jpeg";
import tiktok from "../assets/img/tiktok-clone-1.png";
import spotify from "../assets/img/spotify.webp";
import food from "../assets/img/food.png";
import chatapp from "../assets/img/chatapp.jpeg";
import amazon from "../assets/img/amazon.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const web = [
    {
      title: "Ecommerce Website",
      description: "It handles order, sales etc",
      imgUrl: ecommerce,
      link: "https://em-tech-rzdb.vercel.app/",
    },
    {
      title: "A Tik Tok clone",
      description: "Design & Development",
      imgUrl: tiktok,
    },
    {
      title: "Spotify Clone",
      description: "Design & Development",
      imgUrl: spotify,
    },
    {
      title: "Food Order and Delivery",
      description: "Design & Development",
      imgUrl: food,
    },
    {
      title: "Chat App",
      description: "Design & Development",
      imgUrl: chatapp,
    },
    {
      title: "Amazon Clone",
      description: "Design & Development",
      imgUrl: amazon,
    },
  ];
  return (
    <section className="project" id="project">
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
                  <h2>Projects</h2>
                  <p>
                    <span>
                      {" "}
                      We've have worked on so many real world projects, incluing
                      for graphic design:
                      <ol>
                        <li> Wanu’s farming</li>
                        <li> Atlantis club</li>
                        <li>AYV Beauty press on nails</li>
                        <li>Juliana’s charity foundation</li>
                      </ol>
                    </span>
                    <span>
                      Also for web development we have worked with cutting edge
                      technologies to build real world applications including:
                    </span>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {web.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
