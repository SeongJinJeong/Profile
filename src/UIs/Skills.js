import React from "react";
import styled from "styled-components";
import { Div, Container } from "./Components/Div";
import { IconContext } from "react-icons";
import { DiMysql, DiJavascript1 } from "react-icons/di";
import { FaReact, FaNode, FaAws, FaCss3, FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <Div>
        <Container id="Skills">
          {/* <Container> */}
          <RenderCard icon={<FaReact />} title={"React"} sub={"INTERMEDIATE"} />
          <RenderCard
            icon={<FaNode />}
            title={"Node.js"}
            sub={"INTERMEDIATE"}
          />
          <RenderCard icon={<DiMysql />} title={"SQL"} sub={"BASIC"} />
          <RenderCard icon={<FaAws />} title={"AWS"} sub={"BASIC"} />
          <RenderCard
            icon={<DiJavascript1 />}
            title={"Javascript"}
            sub={"INTERMEDIATE"}
          />
          <RenderCard icon={<FaCss3 />} title={"CSS"} sub={"INTERMEDIATE"} />
          <RenderCard icon={<FaHtml5 />} title={"HTML"} sub={"INTERMEDIATE"} />
          {/* </Container> */}
        </Container>
      </Div>
    </>
  );
};

const RenderCard = (props) => {
  return (
    <Card>
      <IconContext.Provider value={{ color: "white", size: "5em" }}>
        {props.icon}
      </IconContext.Provider>

      <CardTitle>{props.title}</CardTitle>

      <CardSubtitle>{props.sub}</CardSubtitle>
    </Card>
  );
};

const Card = styled.div`
  min-width: 130px;
  max-width: 130px;
  max-height: 150px;
  min-height: 150px;
  display: block;
  text-align: center;

  margin: 20px;
  padding: 20px;

  background-color: #4d4c7d;

  border-radius: 30px;
`;

const CardTitle = styled.h2`
  color: white;
  font-weight: bold;

  margin: 0;
`;

const CardSubtitle = styled.p`
  color: white;
  font-weight: light;

  margin: 0;
`;

export default Skills;
