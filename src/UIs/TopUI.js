import React, { Component, useEffect } from "react";
import styled from "styled-components";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import "./TopUI.css";

const TopUI = (props) => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
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
  const browserHeight = window.innerHeight;
  let isMobile = false;
  if (window.innerWidth <= 768) isMobile = true; // 모바일인지 확인

  let NaviHeight = (browserHeight / 100) * 10;
  if (isMobile === true) NaviHeight = (browserHeight / 100) * 12; // 모바일 or 웹 높이 지정

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <TopDiv height={NaviHeight} isMobile={isMobile} id="TopNavi">
        <LogoAnchor onClick={scrollToTop} onTouchEnd={scrollToTop}>
          <Logo id="logo" src="./logo.png" isMobile={isMobile}/>
        </LogoAnchor>
      </TopDiv>
    </>
  );
};

// Styled Components
// Order : Div -> Anchor -> Img

const Div = styled.div`
  margin: 0;
  color: #2c2c2c;
  background-color: #696969;
  z-index: 1;
  position: relative;
`;

const TopDiv = styled(Div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 10%;

  margin-left : 10px;

  background-color: #000000;
`;

const LogoAnchor = styled.a`
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: ${props=>props.isMobile?"200%":"100%"};
  &:hover {
    cursor: pointer;
  }
`;

export default TopUI;
