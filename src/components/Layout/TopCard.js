import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";

const Card = styled.div`
  background-color: ${Color.WHITE};
  width: 75%;
  margin: 1rem;
`;

const Title = styled.h2`
  color: ${Color.BLACK};
`;

const Link = styled.a`
  color: ${Color.BLACK};
`;

const Description = styled.div`
  color: ${Color.BLACK};
`;

export default ({ title, description, link }) => {
  return (
    <Card>
      <Link href={link}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
    </Card>
  );
};
