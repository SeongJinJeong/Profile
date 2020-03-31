import React, { Component } from "react";
import styled from "styled-components";

const TopUI = props => {
  const browserHeight = window.innerHeight;
  let isMobile = false;
  if (window.innerWidth <= 768) isMobile = true;

  let NaviHeiht = (browserHeight / 100) * 10;

  if (isMobile === true) NaviHeiht = (browserHeight / 100) * 13;
  return (
    <>
      <TopDiv height={NaviHeiht} isMobile={isMobile}>
        <Logo
          id="logo"
          onClick={() => (window.location.href = "https://naver.com")}
        />
        <Anchor href="https://google.com">Hello</Anchor>
      </TopDiv>
    </>
  );
};

const Div = styled.div`
  margin: 0;
  color: #2c2c2c;
  background-color: palevioletred;
`;

const TopDiv = styled(Div)`
  height: ${props => props.height || 50}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;

  margin-right: 30%;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: black;
  &:active {
    color: gray;
  }
`;

export default TopUI;
