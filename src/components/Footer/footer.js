import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";

const FooterRoot = styled.div`
  background: ${Color.FOOTER};
  min-height: 3em;
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: -1rem;
  padding: 1rem;
`;

export default () => <FooterRoot>hogehoge</FooterRoot>;
