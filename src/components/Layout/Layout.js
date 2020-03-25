import React from "react";
import Header from "../Header/header";
import Helmet from "react-helmet";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Color from "../../const/Color";
import "normalize.css";

const PageBody = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
  background: ${Color.SECONDARY};
`;

const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  font-family: "Noto Sans JP", sans-serif;
`;

export default ({ children }) => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"
        rel="stylesheet"
      ></link>
      <meta name="viewport" content="width=device-width" />
    </Helmet>
    <Wrapper>
      <Header />
      <PageBody>{children}</PageBody>
      <Footer />
    </Wrapper>
  </>
);
