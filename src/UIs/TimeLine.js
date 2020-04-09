import React from "react";
import styled, { withTheme } from "styled-components";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { IconContext } from "react-icons";
import { MdSchool } from "react-icons/md";

const TimeLines = () => {
  return (
    <Div>
      <Timeline>
        <TimeLine
          title={"Birth"}
          titleColor={"#f2a51a"}
          content={"2000/ 07/ 18 출생...."}
        />
        <TimeLine
          title={"Middle School"}
          titleColor={"white"}
          content={"2013 보인중학교 입학"}
          bubbleColor ={"#f2ed6f"}
        />
        <TimeLine
          title={"High School"}
          titleColor={"white"}
          content={"2016 보인중학교 졸업 & 한세사이버보안고등학교 입학"}
          bubbleColor ={"#f2ed6f"}
        />
        <TimeLine
          title={"Joined Flysher"}
          titleColor={"skyblue"}
          content={"2019 플라이셔 입사 & 한세 사이버 보안고등학교 졸업 & 산업기능요원 선발 "}
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
    </Div>
  );
};

const TimeLine = (props) => {
  return (
    <TimelineEvent
      title={props.title || "NONE"}
      titleStyle={{
        color: props.titleColor || "white",
        "font-size": "50px",
        "font-weight" : props.now?"bold":null
      }}
      contentStyle={{
        color: "black",
        "font-size": "30px",
        "background-color": props.contentColor || "white",
      }}
      bubbleStyle={{
          "background-color" : props.bubbleColor||"#2c2c2c"
      }}
    >
      {props.content || "Please Enter some Texts"}
    </TimelineEvent>
  );
};

const Div = styled.div`
  width: 100%;
  text-align: center;
  background-color: #2c2c2c;
`;

export default TimeLines;
