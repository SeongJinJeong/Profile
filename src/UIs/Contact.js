import React from "react";
import styled from "styled-components";
import {Div,Container} from "./Components/Div";

const Contact = () => {
  return (
    <Div>
      <Card></Card>
    </Div>
  );
};

const Card = styled.div`
  width: 50vh;
  height: 30vh;

  background-color: #ffffff;

  margin: 20px 0px;

  border-radius: 10px;
`;

export default Contact;
