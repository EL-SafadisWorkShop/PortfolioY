import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: white;

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 70px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          I am
          <br />
          <span>
            <strong>Yazzen S. EL-Safadi</strong>
          </span>
        </div>
        <div className="sub">
          <Typewriter
            options={{
              strings: ["I'm a Schleswig-Holstein based Full-Stack Web App Engineer", "A Front-End Engineer", "A Back-End Engineer", "A Problem Solver", "A Learner", "And A Collaborative Person"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
