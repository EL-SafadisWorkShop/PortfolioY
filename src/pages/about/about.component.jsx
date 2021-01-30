import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/SnowflakeMe.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <div className="aboutMe">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        </div>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Yazzen S. EL-Safadi</strong>
                <br />
                I started off working in a retail store and worked my way up to become the Store Manager I continued my job for about 2 years and a few months. 
                <br />But that wasn't what I really wanted to do for the rest of my life. 
                <br />After that, I went to work in an e-commerce company that worked with Amazon. Ever since then, I started thinking about tech, robots, AI, coding, and such. 
                <br />I became quite curious to the point where I quit my job and started a 3 months and 15 days course with WBS Coding school. I had very difficult times yet still thrived to graduate from the course to become a Full-Stack Web App Engineer. 
                <br />After taking things seriously, I became spending most of the time programming, learning new things, and solving problems which honestly feels very good and productive. The funny thing is the more I go in-depth the less I know in knowledge. 
                <br />This is what's the aspiring thing about programming or engineering is. In general, I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Contact me? 
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="file:///C:/Users/elsaf/Downloads/Yazzen%20CV2%20(1).pdf" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/EL-SafadisWorkShop" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/yazzensafadi/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
