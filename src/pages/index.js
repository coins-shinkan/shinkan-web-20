import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Heading1 = styled.h1`
  color: red;
`;
export default () => (
  <>
    <Helmet>
      <title>つくばだいがく</title>
    </Helmet>
    <Heading1>
      つくばだいがくじょうほうがくぐんじょうほうかがくるいしんかん2020
    </Heading1>
  </>
);
