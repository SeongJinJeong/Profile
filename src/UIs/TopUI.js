import React, { Component, useEffect } from "react";
import styled from "styled-components";

const Menu = ["Google", "Naver", "Nexon", "Laftel", "Facebook"];

const TopUI = props => {
  useEffect(() => {
    Menu.map((value, index) => {
      const menuId = `ml${index}`;
      const menu = document.getElementById(`ml${index}`);
      menu.addEventListener("onclick", function() {
        menu.style.backgroundColor = "blue";
      });
    });
  });
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
        <LoginDiv>
          <LoginAnchor href="#" login>
            Login
          </LoginAnchor>
          <LoginAnchor href="#" logout>
            Logout
          </LoginAnchor>
        </LoginDiv>
      </TopDiv>
    </>
  );
};

const MenuList = () => {
  return Menu.map((value, index) => {
    const URL = `#`;
    const menuId = `ml${index}`;

    return (
      <Anchor href={URL}>
        <MenuDiv id={menuId}>{value}</MenuDiv>
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
`;

const LoginDiv = styled(Div)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  right: 0;

  margin-right: 8px;
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
  &:focus {
    ${MenuDiv} {
      background-color: green;
    }
  }
`;

const LoginAnchor = styled(Anchor)`
  margin-left: 7px;

  padding: 10px 10px;

  background-color: ${props => {
    if (props.login) return "#639a67";
    if (props.logout) return "#fe346e";
    else return "white";
  }};
  border: 2px solid #f0fff0;
  border-radius: 10px 10px 10px 10px;
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
