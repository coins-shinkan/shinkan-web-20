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
`;

const Text = styled.p`
  font-size: 1rem;
  padding: 0.3rem;
`;

const OrgName = styled(Text)`
  font-size: 1.2rem;
`;

export default () => (
  <FooterRoot>
    <Wrapper>
      <OrgName>筑波大学令和2年度情報科学類新入生歓迎委員会</OrgName>
      <Text>筑波大学 情報学群 情報科学類</Text>
      <Text>茨城県つくば市天王台1-1-1</Text>
    </Wrapper>
  </FooterRoot>
);
