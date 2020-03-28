import React from "react";
import Color from "../../const/Color";
import styled from "styled-components";
import Media from "../../const/Media";
import LogoImg from "../../imgs/coins.png";

const HeaderBack = styled.div`
  background: ${Color.PRIMARY};
`;

const HeaderRoot = styled.a`
  text-decoration: none;
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  display: flex;
  align-items: flex-end;
  width: fit-content;
  margin: 1rem auto;
`;

const CoinsLogo = styled.img`
  font-size: 5rem;
  height: 5rem;
  margin-right: 1rem;
  ${Media.MOBILE} {
    height: 3rem;
  }
`;

const Description = styled.div``;

const DescriptionChild = styled.div`
  display: block;
  font-size: 1.7rem;
  text-align: left;
  ${Media.MOBILE} {
    font-size: 1rem;
  }
`;

export default () => (
  <HeaderBack>
    <HeaderRoot href="/">
      <CoinsLogo src={LogoImg} />
      <Description>
        <DescriptionChild>情報学群 情報科学類</DescriptionChild>
        <DescriptionChild>新歓Web</DescriptionChild>
      </Description>
    </HeaderRoot>
  </HeaderBack>
);
