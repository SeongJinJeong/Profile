import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Div, Container } from "./Components/Div";

import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

import ReactCardFlip from "react-card-flip";

const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseOver = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    document.body.onclick = () =>{
        setIsFlipped(false)
    }
  },[]);

  return (
    <Div>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="vertical"
        flipSpeedFrontToBack={0.6}
        flipSpeedBackToFront={0.4}
      >
        <Card onMouseOver={handleMouseOver}></Card>
        <Card bgColor="white">
          <IconContext.Provider value={{ size: "5em", color: "#084177" }}>
            <FaReact
              style={{
                position: "absolute",
                marginRight: "10px",
                marginBottom: "10px",
                bottom: "0",
                right: "0",
              }}
            />
          </IconContext.Provider>
          <Name>
            <NameH1>Seongjin Jeong</NameH1>
            <NameH3>React Developer</NameH3>
          </Name>
          <Contacts></Contacts>
        </Card>
      </ReactCardFlip>
    </Div>
  );
};

const Card = styled.div`
  width: 50vh;
  height: 30vh;

  position: relative;

  background-color: ${(props) => props.bgColor || "palevioletred"};

  margin: 50px 0px;

  border-radius: 10px;
`;

const Name = styled.div`
  margin-left: 50px;
  font-weight: 500;
  float: left;

  display: block;
`;

const NameH1 = styled.h1`
  font-weight: 500;
  margin: 50px 0px;
  margin-bottom: 0px;
`;

const NameH3 = styled.h3`
  font-weight: 300px;
  margin-top: 0px;
  margin-left: 5px;
`;

const Contacts = styled.div`
  float: right;
  margin-right: 50px;
  margin-bottom: 30px;
`;

export default Contact;
