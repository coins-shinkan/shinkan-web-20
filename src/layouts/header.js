import React from "react";
import styled from "styled-components";
import "normalize.css";
import { primary } from "../lib/colors";

const Header = styled.div`
  background-color: ${primary};
  display: flex;
  align-items: center;
`;

const Coins = styled.h1`
  color: white;
  width: fit-content;
  margin-left: auto;
  margin-right: 30px;
  font-size: 40px;
`;

const Jouhou = styled.p`
  color: white;
  width: fit-content;
  margin-right: auto;
  line-height: 1.5em;
`;

const Footer = styled.div`
  background-color: gray;
  height: 80px;
  padding-top: 20px;
`;

const FooterText = styled.p`
  margin-left: 50px;

`;

const CoinsLayout = ({ children }) => {
  return(
    <>
      <Header>
        <Coins>COINS</Coins>
        <Jouhou>情報学群 情報科学類<br />新歓2020</Jouhou>
      </Header>
      {children}
      <Footer>
        <FooterText>
          筑波大学 情報学群 情報科学類<br />
          茨城県つくば市天王台1-1-1
        </FooterText>
      </Footer>
    </>
  )
};

export default CoinsLayout;