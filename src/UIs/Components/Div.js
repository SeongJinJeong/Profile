import React from "react";
import styled from "styled-components";

const Div = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
};

const Container = ({children,id})=>{
  return(
    <StyledContainer id={id}>
      {children}
    </StyledContainer>
  )
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #000000;
`;

const StyledContainer = styled.div`
  width: 50%;
  height: auto;
  background-color: #2c2c2c;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;

  border-radius: 30px;

  margin: 50px 0px;
`;

export {Div,Container};
