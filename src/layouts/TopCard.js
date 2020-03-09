import React from "react";
import styled from "styled-components";
import kiri from "../imgs/kiri.gif";

const Card = styled.div`
  background-color: white;
  display: flex;
  align-items: end;
  width: 60%;
  margin-top: 30px;
`;

const Figure = styled.img`
  height: 100px;
  width: 100px;
  margin: 30px;
`;

const Texts = styled.div`
  display: block;
  p {
    margin-right: 30px;
  }
`;

const Title = styled.h3`
  margin-top: 30px;
  font-weight: normal;
  font-size: 30px;
  color: black;
`;

const Link = styled.a`
  text-decoration-color: black;
`;

export default ({ title, description, link }) => {
  return (
    <Card>
      <Figure src={kiri} />
      <Texts>
        <Link href={link}>
          <Title>{title}</Title>
        </Link>
        <p>{description}</p>
      </Texts>
    </Card>
  );
};
