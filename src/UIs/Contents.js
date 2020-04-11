import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled from "styled-components";
import Jumbo from "./Jumbo";
import TimeLines from "./TimeLine";
import Skills from "./Skills";
import Contact from "./Contact";

const Contents = (props) => {
  const [naviHeight, setNaviHeight] = useState("");
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    const getNaviHeight = document.querySelector("#TopNavi");
    setNaviHeight(getNaviHeight.clientHeight);
  }, []);

  useEffect(() => {
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  return (
    <>
      <JumboDiv shouldMargin={naviHeight}>
        <Jumbo height={naviHeight} />
      </JumboDiv>

      <TimeLines />

      <Skills />

      <Contact />
    </>
  );
};

const Div = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;

  // margin-top: ${(props) => props.shouldMargin || 0}px;
  margin-bottom: ${(props) => (props.lastContent ? "300px" : null)};

  background-color: ${(props) => {
    if (props.color) {
      switch (props.color) {
        case 1:
          return "yellow";
        case 2:
          return "red";
        case 3:
          return "green";
        case 4:
          return "white";
        case 5:
          return "purple";
        default:
          return "palevioletred";
      }
    } else {
      return "palevioletred";
    }
  }};
`;

const JumboDiv = styled.div`
  width: 100%;
  // margin-top: ${(props) => props.shouldMargin || 0}px;
`;

export default Contents;
