import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ULTIMA_SONORA_UMN from "../../Assets/Projects/ULTIMA SONORA UMN.png";
import PERKENALAN_PRODI_INFORMATIKA_2023 from "../../Assets/Projects/PERKENALAN PRODI INFORMATIKA 2023.png";
import KURAWAL_UMN from "../../Assets/Projects/KURAWAL UMN.png";
import INFINITE from "../../Assets/Projects/INFINITE.png";
import GLOBAL_GAME_JAM_UMN from "../../Assets/Projects/GLOBAL GAME JAM UMN.png";
import G2X from "../../Assets/Projects/G2X.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        My Committee <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are some activities and roles I've undertaken during my campus committee experiences.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={INFINITE}
              isBlog={false}
              title="INFITE UMN"
              description="Coordinated the execution of paid promotions by advising cross-division committee members to adhere to
 established guidelines and monitored and recorded the involvement of committee members in paid promotions, supporting the accurate
 achievement of event funding targets."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={G2X}
              isBlog={false}
              title="G2X"
              description="Responsible for creating the event rundown to ensure the smooth flow of activities, developing scripts for MCs to guide the event’s flow and maintain participant engagement, collaborating with other teams to ensure that all event needs (logistics, timing, content) were met on time, and managing time and coordinating across divisions to achieve targets and ensure the event ran as planned."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KURAWAL_UMN}
              isBlog={false}
              title="KURAWAL UMN"
              description="Responsible for sourcing and managing funds to support the success of the Kurawal event, developing effective fundraising strategies through collaboration with internal and external stakeholders, and ensuring proper allocation of funds according to the event’s needs and priorities."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ULTIMA_SONORA_UMN}
              isBlog={false}
              title="ULTIMA SONORA UMN"
              description="Led the consumption team in providing food and beverages for singers and committee members during the concert, managed logistical planning and procurement of food supplies to ensure smooth operations, and coordinated with team members and vendors to meet food requirements while maintaining quality standards and accommodating preferences."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GLOBAL_GAME_JAM_UMN}
              isBlog={false}
              title="GLOBAL GAME JAM UMN"
              description="Prepared and organized tools and equipment required by both the committee and participants, ensured availability and functionality of necessary resources for game development sessions, managed inventory, distribution, and maintenance of equipment throughout the event, and collaborated with other divisions to meet logistical and technical needs during the event."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PERKENALAN_PRODI_INFORMATIKA_2023}
              isBlog={false}
              title="PERKENALAN PRODI INFORMATIKA 2023"
              description= "Provided informative and engaging guidance to new Informatics students about academic content and campus activities, acted as the primary mentor to support freshmen in understanding their academic journey, and contributed to creating a structured, inclusive, and meaningful introduction experience for participants."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
