import React from "react";
import Header from "../Header/Header";
import Helmet from "react-helmet";
import styled from "styled-components";
import Footer from "../Footer/footer";

const PageBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
      <title>筑波大学</title>
    </Helmet>
    <Wrapper>
      <Header />
      <PageBody>{children}</PageBody>
      <Footer />
    </Wrapper>
  </>
);
