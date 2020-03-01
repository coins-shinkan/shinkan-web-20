import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  display: flex;
  align-items: end;
  width: 600px;
  margin-right: 30px;
  margin-left: 30px;
  margin-top: 30px;
`;

const Figure = styled.div`
  height: 100px;
  width: 100px;
  background-color: black;
  margin: 30px;
`;

const Texts = styled.div`
  display: block;
`;

const Title = styled.h3`
  margin-top: 30px;
  font-weight: normal;
  font-size: 30px;
`;

export default ({ title, description }) => {
  return(
    <Card>
      <Figure />
      <Texts>
        <Title>{title}</Title>
        <p>{description}</p>
      </Texts>
    </Card>
  )
};