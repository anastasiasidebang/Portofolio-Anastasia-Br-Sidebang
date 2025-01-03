import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anastasia Br Sidebang </span>
            from <span className="purple"> Tangerang, Indonesia.</span>
            <br />
            I am an Informatics student at Universitas Multimedia Nusantara, Indonesia, with a strong passion for UI/UX
design. I am dedicated to continuously learning and growing in this field, aiming to become a dynamic and
impactful designer. I have skills in front-end development that enable me to bring smooth and responsive designs
to life. I enjoy exploring new concepts and collaborating with teams, and I am excited to create user-centered
digital experiences. I am ready to face challenges and deliver innovative solutions in the tech industry.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
