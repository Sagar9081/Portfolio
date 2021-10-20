import "./about.css";

import { Row, Col, Button } from "react-bootstrap";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FiMail } from "react-icons/fi";
import { MdCall } from "react-icons/md";

import { ProjectExp } from "./project";
import { WorkExp } from "./work";
import { Achieve } from "./achievements";

function About() {
  return (
    <>
      <img
        className="backimg"
        style={{
          height: "721px",
          width: "100%",
        }}
        src="../images/backimg1.jpg"
        alt="loading"
      />

      <table className="namebody">
        <tbody>
          <tr>
            <td>
              <img
                className="aboutimage"
                src="../IMG_20200514_152434.jpg"
                alt="loading"
              />
            </td>
          </tr>
          <tr>
            <td>
              <span className="name1">Sagar Chandore</span>
            </td>
          </tr>
          <tr>
            <td>
              <span className="name1">B.E.Electrical Engineering (2018)</span>
            </td>
          </tr>
        </tbody>
      </table>
      <Row xs="auto" className="workbutton">
        <Col>
          <WorkExp />
        </Col>

        <Col>
          <ProjectExp />
        </Col>
        <Col>
          <Achieve />
        </Col>
      </Row>

      <Row className="workbutton1">
        <Col>
          <a
            href=" https://github.com/Sagar9081/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="dark">GitHub</Button>
          </a>
        </Col>
        <Col>
          <a
            href=" https://drive.google.com/file/d/1LvS-Ht-jHFr1L3vNJhWHkcLYONUIu5qm/view"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="info">Resume</Button>
          </a>
        </Col>
      </Row>

      <Row xs="auto" className="social_links">
        <Col>
          {" "}
          <div>
            <a
              href="https://www.linkedin.com/in/sagar-chandore/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="linkedin1">
                <AiFillLinkedin />
              </i>
            </a>
          </div>
        </Col>

        <Col className="social_links1">
          <a
            href="https://twitter.com/Sagar9081"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="twitter">
              <AiOutlineTwitter />
            </i>
          </a>
        </Col>

        <Col>
          <a href="https://wa.link/t1or62" target="-blank">
            <i className="whatsapp">
              <RiWhatsappFill />
            </i>
          </a>
        </Col>
        <Col>
          <a href="mailto:sagarch9081@gmail.com" target="-blank">
            <i className="mail">
              <FiMail />
            </i>
          </a>
        </Col>
        <Col>
          <a href="tel:8830558357" target="-blank">
            <i className="call">
              <MdCall />
            </i>
          </a>
        </Col>
      </Row>
    </>
  );
}

export default About;
