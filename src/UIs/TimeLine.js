import React from "react";
import styled, { withTheme } from "styled-components";
import { Div, Container } from "./Components/Div";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { IconContext } from "react-icons";
import { MdSchool } from "react-icons/md";

const TimeLines = () => {
  return (
    <Div>
      <Container id="TimeLine">
        <Timeline>
          <TimeLine
            title={"Birth"}
            titleColor={"#f2a51a"}
            content={"2000/ 07/ 18 출생...."}
          />
          <TimeLine
            title={"Middle School"}
            content={"2013 보인중학교 입학"}
            bubbleColor={"#f2ed6f"}
          />
          <TimeLine
            title={"High School"}
            content={"2016 보인중학교 졸업 & 한세사이버보안고등학교 입학"}
            bubbleColor={"#f2ed6f"}
          />
          <TimeLine
            title={"Joined Flysher"}
            titleColor={"skyblue"}
            content={
              "2019 플라이셔 입사 & 한세 사이버 보안고등학교 졸업 & 산업기능요원 선발 "
            }
            bubbleColor={"skyblue"}
          />
          <TimeLine
            title={"Now"}
            titleColor={"#b9ebcc"}
            content={"2020 산업기능요원 Ing... & React.js Learning!! "}
            bubbleColor={"green"}
            now
          />
        </Timeline>
      </Container>
    </Div>
  );
};

const TimeLine = (props) => {
  return (
    <TimelineEvent
      title={props.title || "NONE"}
      titleStyle={{
        color: props.titleColor || "white",
        fontSize: "30px",
        fontWeight: props.now ? "bold" : null,
        textShadow: props.now ? "4px 2px 2px gray" : null,
      }}
      contentStyle={{
        color: "white",
        fontSize: "20px",
        fontWeight: "500",
        backgroundColor: props.contentColor || "#543864",
        boxShadow: "5px 5px 5px gray",
      }}
      bubbleStyle={{
        backgroundColor: props.bubbleColor || "#2c2c2c",
      }}
    >
      {props.content || "Please Enter some Texts"}
    </TimelineEvent>
  );
};

export default TimeLines;
