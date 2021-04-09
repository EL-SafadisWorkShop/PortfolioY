import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">WORK EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 50 }}>
            <Card>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Store Manager @ BS Sport</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Duration:</strong> 05/2015 - 05/2017
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Coordinated logistics processes</strong> </li>
                      <li><strong>Instructed team members</strong></li>
                      <li><strong>Customer service</strong></li>
                      <li><strong>Audited the business</strong></li>


                    </ul>

                    <div>
                      <Card.Title className="text-center"> E- Commerce Back-Office Coordinator @ Salamon/Safadi GBR</Card.Title>
                    </div>
                    <strong>Duration:</strong> 08/2017 - 01/2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Translation & interpretation services</strong> </li>
                      <li><strong>Vendors intercommunication</strong></li>
                      <li><strong>Inventory enumeration</strong></li>
                      <li><strong>Customer services</strong></li>
                    </ul>
                    <div>
                      <Card.Title className="text-center">Construction Manager @ Hansebau-Unterneheme</Card.Title>
                    </div>
                    <strong>Duration:</strong> 01/2020 - 012/2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Hard, diligent labor</strong> </li>
                      <li><strong>Team-oriented attitude and thinking</strong></li>
                      <li><strong>Instructed team members</strong></li>
                      <li><strong>Customer services</strong></li>
                      <li><strong>plan and coordinating projects</strong></li>

                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
