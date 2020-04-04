import React, { useEffect } from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import styled from "styled-components";

const Contents = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }, []);

  useEffect(() => {
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  });

  return (
    <>
      <Div id="Google">Google</Div>
      <Div id="Naver" color="red">
        Naver
      </Div>
      <Div id="Nexon" color="green">
        Nexon
      </Div>
    </>
  );
};

const Div = styled.div`
  width: 800 px;
  height: 800px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.color || "yellow"};
`;

export default Contents;
