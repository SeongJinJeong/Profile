import React, { Component } from "react";
import styled from "styled-components";

const TopUI = props => {
  const browserHeight = window.innerHeight;
  let isMobile = false;
  if (window.innerWidth <= 768) isMobile = true; // 모바일인지 확인

  let NaviHeiht = (browserHeight / 100) * 10;
  if (isMobile === true) NaviHeiht = (browserHeight / 100) * 12; // 모바일 or 웹 높이 지정

  return (
    <>
      <TopDiv height={NaviHeiht} isMobile={isMobile}>
        <Logo
          id="logo"
          onClick={() => (window.location.href = "https://naver.com")} // 클릭 시, 해당 링크로 이동
        />
        <MenuList /> {/* 메뉴를 뽑아줌 */}
      </TopDiv>
    </>
  );
};

const MenuList = () => {
  const Menu = ["Google", "Naver", "Nexon", "Laftel", "Facebook"];
  return Menu.map((index, value) => {
    const URL = `https://${index}.com`;
    return (
      <Anchor href={URL}>
        <MenuDiv>{index}</MenuDiv>
      </Anchor>
    );
  });
};

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

const Logo = styled.img`
  width: 50px;
  height: 50px;

  margin-left: 15%;
  margin-right: 10%;
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
`;

export default TopUI;
