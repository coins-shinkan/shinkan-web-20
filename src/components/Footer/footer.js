import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";

const FooterRoot = styled.div`
  background: ${Color.FOOTER};
  height: 100%;
  padding-bottom: 1.2rem;
  display: flex;
`;

const Wrapper = styled.div`
  font-size: 1.2rem;
  width: 100%;
`;

export default () => (
  <FooterRoot>
    <Wrapper>
      <p>筑波大学 情報学群 情報科学類</p>
      <p>茨城県つくば市天王台1-1-1</p>
    </Wrapper>
    <Wrapper>
      <p>hogehoge</p>
      <p>piyopiyo</p>
    </Wrapper>
  </FooterRoot>
);
