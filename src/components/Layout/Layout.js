import React from "react";
import Header from "../Header/Header";
import Helmet from "react-helmet";
import styled from "styled-components";

const PageBody = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-right: 5rem;
  margin-left: 5rem;
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
