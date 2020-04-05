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

  return <RenderDiv menu={props.menu} height={naviHeight} />;
};

const RenderDiv = (props) => {
  const Menu = props.menu;
  return Menu.map((value, index) => {
    if (index === 0)
      return (
        <Div color={index} id={value} key={index} shouldMargin={props.height}>
          {value}
        </Div>
      );
    else {
      return (
        <Div color={index} id={value} key={index}>
          {value}
        </Div>
      );
    }
  });
};

const Div = styled.div`
  width: 800 px;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: ${(props) => props.shouldMargin || 0}px;

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

export default Contents;
