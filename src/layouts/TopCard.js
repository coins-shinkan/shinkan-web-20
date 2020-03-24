import React from "react";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Card = styled.div`
  border-radius: 1rem;
  display: grid;
  grid-auto-rows: 14rem;
  background-color: ${Color.WHITE};
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  ${Media.MOBILE} {
    width: auto;
    padding-bottom: 2rem;
  }
`;

const Title = styled.h2`
  color: ${Color.BLACK};
  font-size: 2rem;
  ${Media.MOBILE} {
    font-size: 1.5rem;
  }
`;

const Link = styled.a`
  color: ${Color.BLACK};
  text-decoration: none;
  display: flex;
  width: 100%;
  ${Media.MOBILE} {
    display: inline-block;
  }
`;

const Description = styled.p`
  color: ${Color.BLACK};
  font-size: 1.3rem;
  ${Media.MOBILE} {
    font-size: 1.3rem;
  }
`;

const Img = styled.img`
  display: inline-block;
  height: 10rem;
  ${Media.MOBILE} {
    display: block;
    height: 6rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: inline;
  vertical-align: top;
  top: -1rem;
  ${Media.MOBILE} {
    width: auto;
  }
  ${Media.TABLET} {
    margin: 1rem;
  }
`;

export default ({ title, description, link, img }) => {
  return (
    <Card>
      <Link href={link}>
        <Wrapper>
          <Img src={img} />
        </Wrapper>
        <Wrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Wrapper>
      </Link>
    </Card>
  );
};
