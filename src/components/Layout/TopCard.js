import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";

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
`;

export default ({ title, description, link, img }) => {
  return (
    <Card>
      <Link href={link}>
        <Title>{title}</Title>
        <Img src={img} />
        <Description>{description}</Description>
      </Link>
    </Card>
  );
};
