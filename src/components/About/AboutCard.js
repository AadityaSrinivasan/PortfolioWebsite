import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Greetings, I am <span className="purple">Aaditya Srinivasan</span>, from the vibrant city of <span className="purple">Houston, Texas</span>.
            <br /> Currently, I am a second-year student pursuing a Bachelor's degree in Computer Science with a minor in Mathematics.
            <br />
            Beyond the realms of programming, I find joy and fulfillment in various activities that enrich my life:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in Basketball sessions
            </li>
            <li className="about-activity">
              <ImPointRight /> Embarking on refreshing Runs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new destinations through Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Maintaining an active lifestyle
            </li>
            <li className="about-activity">
              <ImPointRight /> Diving into the world of Literature through Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Adhering to the ethos of perpetual growth and exploration."
          </p>
          <footer className="blockquote-footer">Aaditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
