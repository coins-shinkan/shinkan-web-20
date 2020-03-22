import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";
import Media from "../../const/Media";

const FooterRoot = styled.div`
  background: ${Color.FOOTER};
  height: 100%;
  padding-bottom: 1.2rem;
  display: flex;
`;

const Wrapper = styled.div`
  font-size: 1.2rem;
  width: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  p {
    ${Media.MOBILE} {
      font-size: 1rem;
      margin: 0.2rem;
    }
  }
`;

export default () => (
  <FooterRoot>
    <Wrapper>
      <p>筑波大学</p>
      <p>情報学群 情報科学類</p>
      <p>茨城県つくば市天王台1-1-1</p>
    </Wrapper>
  </FooterRoot>
);
