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
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";

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
        <LogoAnchor onClick={scrollToTop}>
          <Logo id="logo" src="./logo.png" />
        </LogoAnchor>
        <MenuList menu={props.menu} NaviHeight={NaviHeight} />{" "}
        {/* 메뉴를 뽑아줌 */}
      </TopDiv>
    </>
  );
};

const MenuList = (props) => {
  const Menu = props.menu;
  const MenuLen = Menu.length;
  console.log(MenuLen);
  return Menu.map((value, index) => {
    return (
      <Link
        to={value}
        spy={true}
        smooth={true}
        activeClass="active"
        className={index === MenuLen - 1 ? "menu lastmenu" : "menu"}
        duration={1000}
        delay={200}
        offset={index === 0 ? -props.NaviHeight + 0.1 : -props.NaviHeight - 0.1}
        key={index}
      >
        {value}
      </Link>
    );
  });
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
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  background-color: #696969;

  
  box-shadow: 10px 0px 12px 0px #323232;
`;

const LoginDiv = styled(Div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  right: 0;

  margin-right: 20px;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #f0fff0;

  height: 100%;

  &:active {
    color: white;
  }
  &:hover {
    color: #2f4f4f;
  }
  &:visited {
    color: yellow;
  }
`;

const LoginAnchor = styled(Anchor)`
  margin-left: 5px;
`;

const LogoAnchor = styled.a`
  margin-left: 10%;
  margin-right: 5%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  &:hover {
    cursor: pointer;
  }
`;

export default TopUI;
