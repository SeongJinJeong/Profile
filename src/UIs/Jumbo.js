import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IconContext } from "react-icons";
import { FaReact, FaLongArrowAltDown } from "react-icons/fa";

import Modal from "react-modal";
Modal.setAppElement("#root");

const startTime = 1560092400;
const curTime = Math.floor(Date.now() / 1000);

const didDate = Math.floor((curTime - startTime) / 86400);
const wholeDate = 1035;

const Jumbo = (props) => {
  const clientHeight = document.body.clientHeight;
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <JumboDiv height={props.height} clientHeight={clientHeight}>
        <JumboItemDiv>
          <HiddenIcon>
            <Arrow>
              <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                <FaLongArrowAltDown />
              </IconContext.Provider>
            </Arrow>
          </HiddenIcon>
          <IconContext.Provider value={{ color: "white", size: "4em" }}>
            <ReactLogo>
              <FaReact
                onMouseOver={() => {
                  openModal();
                }}
                onTouchStart={()=>{
                  openModal();
                }}
                style={{
                  zIndex: 0,
                }}
              />
            </ReactLogo>
          </IconContext.Provider>
          <JumboTitle>ReactJS Developer</JumboTitle>
        </JumboItemDiv>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          style={{
            overlay: {
              backgroundColor: "black",
              opacity: 0.8,
            },
            content: {
              opacity: 1,
              width: "30%",
              height: "30%",
              margin: "auto",
            },
          }}
        >
          <ModalDiv>
            <ModalTitle>정성진</ModalTitle>
            <ModalSub>(Jeong Seong Jin)</ModalSub>
            <ModalTag>#산업기능요원 #React #Developer #Flysher #QA</ModalTag>
            <ModalContent firstChild>- 생년월일 : 2000/07/18</ModalContent>
            <ModalContent>- 학력 : 한세사이버보안고등학교 졸업</ModalContent>
            <ModalContent>- 경력 : Flysher (QA)</ModalContent>
            <RemainDate />
          </ModalDiv>
        </Modal>
      </JumboDiv>
    </>
  );
};

const RemainDate = () => {
  return (
    <ModalContent lastChild>
      잔여복무일 : {didDate} / {wholeDate} (
      {Math.floor((didDate / wholeDate) * 100)}%)
    </ModalContent>
  );
};

const Arrow = styled.p`
  display: none;
  float: right;
`;

const JumboDiv = styled.div`
  width: 100%;
  height: ${(props) => props.clientHeight * 0.1}px;
  min-height: 450px;
  max-height: 600px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JumboItemDiv = styled.div`
  display: block;
  color: white;

  text-align: center;

  &:hover {
    ${Arrow} {
      display: inline;
    }
  }
`;

const JumboTitle = styled.p`
  font-weight: 500;
  font-size: 50px;
  text-shadow: 6px 2px 2px gray;

  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.2)));
`;

const KeepRotate = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

const ReactLogo = styled.button`
  animation: ${KeepRotate} 10s linear infinite;
  background-color: black;
  border: none;
  z-index: -1;
`;

const HiddenIcon = styled.div`
  position: fixed;
  top: 0;
  left: 49.5%;
`;

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  margin: auto;
  text-align: center;
`;

const ModalTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
`;
const ModalSub = styled.p`
  font-size: 20px;
  font-weight: light-bold;
  margin: 0;
`;
const ModalTag = styled.p`
  font-size: 25px;
  margin-bottom: none;
  color: blue;
  font-weight: bold;
`;

const ModalContent = styled.p`
  font-size: ${(props) => (props.lastChild ? 20 : 22)}px;
  ${(props) => (props.firstChild || props.lastChild ? null : "margin-top:0px")};
  ${(props) => (props.lastChild ? null : "margin-bottom: 0")};
  font-weight: ${(props) => (props.lastChild ? "bold" : null)};
`;

export default Jumbo;
