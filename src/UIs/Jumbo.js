import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";

import Modal from "react-modal";
Modal.setAppElement("#root");

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
          <IconContext.Provider value={{ color: "white", size: "4em" }}>
            <ReactLogo>
              <FaReact
                onMouseOver={() => {
                  openModal();
                }} style = {{
                    "z-index" : 0
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
              justifyContent: "center",
              alignItems : "center",
              margin : "auto"
            },
          }}
        ></Modal>
      </JumboDiv>
    </>
  );
};

const JumboDiv = styled.div`
  width: 100%;
  height: ${(props) => props.clientHeight * 0.1}px;
  min-height: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${(props) => (props.height ? props.height : 0)}px;
`;

const JumboItemDiv = styled.div`
  display: block;
  color: white;

  text-align: center;
`;

const JumboTitle = styled.p`
  font-weight: 500;
  font-size: 50px;
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

export default Jumbo;
