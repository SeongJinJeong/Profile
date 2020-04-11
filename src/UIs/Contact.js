import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Div, Container } from "./Components/Div";

import { FaReact, FaPhoneVolume } from "react-icons/fa";
import { MdMail,MdMouse } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
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
        <Card onMouseOver={handleMouseOver} bgColor="#2c2c2c" front>
            <MouseIcon>
                <IconContext.Provider value={{size:"3em",color:"white"}}>
                    <MdMouse />
                </IconContext.Provider>
            </MouseIcon>
        </Card>
        <Card bgColor="white">
          <IconContext.Provider value={{ size: "3em", color: "#084177" }}>
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
          <Contacts>
              <IconContext.Provider value={{size:"1em",color:"black"}}>
              <Items><FaPhoneVolume /> +82.10.9583.7412</Items>
              <Items><MdMail /> &nbsp;&nbsp;jsj0718tjdwl@naver.com</Items>
              <Items><GoMarkGithub /> &nbsp;&nbsp;<a href="https://github.com/SeongJinJeong" target="_blank">https://github.com/SeongJinJeong</a></Items>
              </IconContext.Provider>
          </Contacts>
        </Card>
      </ReactCardFlip>
    </Div>
  );
};

const Card = styled.div`
  width: 50vh;
  height: 30vh;

  position: relative;
//   ${props=>props.front?`display:flex`:null}

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
  font-weight: 300;
  margin-top: 0px;
  margin-left: 5px;
`;

const Contacts = styled.div`
  float: right;
  margin-right: 50px;
  margin-bottom: 10px;
`;

const Items = styled.p`
    border-left : 3px solid blue;
    padding : 10px;
    margin:0px;
`;

const HoverKey = keyframes`
    0% {
        right:45%;
        bottom : 0%;
    }
    20%{
        right:45%;
        bottom:45%;
    }
    100%{
        right:45%;
        bottom:45%;
    }
`;

const MouseIcon = styled.button`
    position : absolute;
    animation: ${HoverKey} 1.5s alternate infinite;
    animation-timing-function : ease-in-out;
    background-color : #2c2c2c;
    border : none;
`;

export default Contact;
