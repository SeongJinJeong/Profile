import React from "react";
import { Div, Container } from "./Components/Div";
import { Timeline, TimelineEvent } from "react-event-timeline";

const TimeLines = () => {
  return (
    <Div>
      <Container id="TimeLine">
        <Timeline>
          <TimeLine
            title={"Birth (2000)"}
            titleColor={"#f2a51a"}
            content={"2000/ 07/ 18 출생...."}
            contentCOlor={"white"}
            bubbleColor={"skyblue"}
          />
          <TimeLine
            title={"Middle School (2013~2016)"}
            content={"보인중학교 입학 & 졸업"}
            bubbleColor={"skyblue"}
          />
          <TimeLine
            title={"High School (2016~2019)"}
            content={"한세사이버보안고등학교 입학 & 졸업"}
            bubbleColor={"skyblue"}
          />
          <TimeLine
            title={"Joined Flysher (2019)"}
            titleColor={"skyblue"}
            content={"플라이셔 입사 & 산업기능요원 선발 "}
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
        color: "black",
        fontSize: "20px",
        fontWeight: "500",
        backgroundColor: props.contentColor || "white",
        boxShadow: "10px 15px 5px black",
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
