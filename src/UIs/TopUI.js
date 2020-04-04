import React, { Component, useEffect } from "react";
import styled from "styled-components";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";

import "./TopUI.css";

const Menu = ["Google", "Naver", "Nexon", "Laftel", "Facebook"];

const TopUI = props => {
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
  const browserHeight = window.innerHeight;
  let isMobile = false;
  if (window.innerWidth <= 768) isMobile = true; // 모바일인지 확인

  let NaviHeiht = (browserHeight / 100) * 10;
  if (isMobile === true) NaviHeiht = (browserHeight / 100) * 12; // 모바일 or 웹 높이 지정

  return (
    <>
      <TopDiv height={NaviHeiht} isMobile={isMobile}>
        <Logo id="logo" />
        <MenuList /> {/* 메뉴를 뽑아줌 */}
        <LoginDiv>
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <LoginAnchor href="https://github.com/SeongJinJeong">
              <GoMarkGithub />
            </LoginAnchor>
          </IconContext.Provider>
        </LoginDiv>
      </TopDiv>
    </>
  );
};

const MenuList = () => {
  return Menu.map((value, index) => {
    const URL = `#${value}`;
    const menuId = `ml${index}`;

    return (
      <Anchor href={URL} key={index}>
        <Link to={value} spy={true} smooth={true} activeClass="active">
          <MenuDiv id={menuId}>{value}</MenuDiv>
        </Link>
      </Anchor>
    );
  });
};

// Styled Components
// Order : Div -> Anchor -> Img

const Div = styled.div`
  margin: 0;
  color: #2c2c2c;
  background-color: #696969;
`;

const TopDiv = styled(Div)`
  height: ${props => props.height || 50}px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background-color: #696969;
`;

const MenuDiv = styled(Div)`
  height: 100%;

  color: #f0fff0;

  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 75px;

  &:hover {
    background-color: #d3d3d3;
    color: #2f4f4f;
  }

  &:selection {
    background-color: palevioletred;
  }
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

const Logo = styled.img`
  width: 50px;
  height: 50px;

  margin-left: 10%;
  margin-right: 8%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export default TopUI;
