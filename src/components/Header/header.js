import React from "react";
import Color from "../../const/Color";
import styled from "styled-components";
import Media from "../../const/Media";
import LogoImg from "../../imgs/coins.png";

const HeaderRoot = styled.a`
  text-decoration: none;
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  text-align: center;
`;

const CoinsLogo = styled.img`
  display: inline-block;
  font-size: 5rem;
  height: 5rem;
  margin-right: 1rem;
  padding-top: 1rem;
  ${Media.MOBILE} {
    height: 3.6rem;
    font-size: 3rem;
  }
`;

const Description = styled.div`
  display: inline-block;
  margin-bottom: 1rem;
`;

const DescriptionChild = styled.div`
  display: block;
  font-size: 1.5rem;
  text-align: left;
  ${Media.MOBILE} {
    font-size: 1rem;
  }
`;

export default () => (
  <HeaderRoot href="/">
    <CoinsLogo src={LogoImg} />
    <Description>
      <DescriptionChild>情報学群 情報科学類</DescriptionChild>
      <DescriptionChild>新歓Web</DescriptionChild>
    </Description>
  </HeaderRoot>
);
