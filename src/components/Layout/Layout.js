import React from "react";
import Header from "../Header/header";
import Helmet from "react-helmet";
import styled from "styled-components";
import Footer from "../Footer/footer";
import Color from "../../const/Color";

const PageBody = styled.div`
  align-items: center;
  display: grid;
  justify-content: center;
  background: ${Color.SECONDARY};
`;

const Wrapper = styled.div`
  height: auto;
  min-height: 97.9vh;
  width: auto;
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: -0.5rem;
`;

export default ({ children }) => (
  <>
    <Helmet>
      <title>coins新歓 2020</title>
    </Helmet>
    <Wrapper>
      <Header />
      <PageBody>{children}</PageBody>
      <Footer />
    </Wrapper>
  </>
);
