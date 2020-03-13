import React from "react";
import Color from "../../const/Color";
import styled from "styled-components";

const HeaderRoot = styled.div`
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  padding-top: 1.3rem;
  text-align: center;
  margin: -1rem;
`;

const CoinsLogo = styled.div`
  display: inline-block;
  font-size: 4rem;
  margin-right: 1rem;
`;

const Description = styled.div`
  display: inline-block;
`;

const DescriptionChild = styled.div`
  display: block;
  font-size: 1.5rem;
  text-align: left;
`;

export default () => (
  <HeaderRoot>
    <CoinsLogo>COINS</CoinsLogo>
    <Description>
      <DescriptionChild>情報学群 情報科学類</DescriptionChild>
      <DescriptionChild>新歓Web</DescriptionChild>
    </Description>
  </HeaderRoot>
);
