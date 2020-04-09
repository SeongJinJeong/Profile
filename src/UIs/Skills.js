import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { DiMysql, DiJavascript1 } from "react-icons/di";
import { FaReact, FaNode, FaAws, FaCss3, FaHtml5 } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <Div>
        <Container id="Skills">
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

const Div = styled.div`
  width: 100%;
  text-align: center;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Container = styled(Div)`
  width: 50%;
  height: auto;
  background-color: #2c2c2c;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;

  border-radius: 30px;

  margin: 50px 0px;
`;

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
