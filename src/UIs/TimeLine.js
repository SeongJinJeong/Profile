import React from "react";
import styled, { withTheme } from "styled-components";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { IconContext } from "react-icons";
import { MdSchool } from "react-icons/md";

const TimeLines = () => {
  return (
    <Div>
      <Timeline>
        <TimeLine title={"Birth"} titleColor={"#f2a51a"} content={"2000년 7월 18일 출생...."}/>
        <TimeLine title={"Fuck You"} titleColor={"blue"} content={"Hey Just Fuck Yourself"}/>
      </Timeline>
    </Div>
  );
};

const TimeLine = (props) =>{
    return(
        <TimelineEvent
          title={props.title || "NONE"}
          titleStyle={{
            color: props.titleColor ||"white",
            "font-size": "50px",
          }}
          contentStyle={{
            color: "black",
            "font-size": "30px",
            "background-color": props.contentColor ||"white",
          }}
        >
          {props.content || "Please Enter some Texts"}
        </TimelineEvent>
    )
}

const Div = styled.div`
  width: 100%;
  text-align: center;
  background-color: #2c2c2c;
`;

export default TimeLines;
