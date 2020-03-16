import React from "react";
import styled from "styled-components";
import Color from "../const/Color";

const Card = styled.div`
  background-color: ${Color.WHITE};
  width: 75%;
  margin: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  color: ${Color.BLACK};
`;

const Link = styled.a`
  color: ${Color.BLACK};
  text-decoration: none;
`;

const Description = styled.p`
  color: ${Color.BLACK};
`;

const Img = styled.img`
  height: 5rem;
  position: relative;
  min-width-7rem;
`;
const Wrapper = styled.div`
  height: 100%;
  display: inline-block;
  vertical-align: top;
  top: -1rem;
`;

export default ({ title, description, link, img }) => {
  return (
    <Card href={link}>
      <Link href={link}>
        <Img src={img} />
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper>
      </Link>
    </Card>
  );
};
