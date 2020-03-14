import React from "react";
import Header from "../Header/Header";
import Helmet from "react-helmet";
import styled from "styled-components";

const PageBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export default ({ children }) => (
  <>
    <Helmet>
      <title>筑波大学</title>
    </Helmet>
    <Header />
    <PageBody>{children}</PageBody>
  </>
);
