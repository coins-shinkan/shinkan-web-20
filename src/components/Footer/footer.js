import React from "react";
import styled from "styled-components";
import Color from "../../const/Color";

const FooterRoot = styled.div`
  background: ${Color.FOOTER};
  height: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  font-size: 1.2rem;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1.2rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: white;
  margin: 1rem;
  padding: 0;
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
    <Text>Twitter: <a href="https://twitter.com/2020coins">@2020coins</a></Text>
    <Text>LINE: <a href="https://lin.ee/lWPRX87">@892epdec</a>(登録してください！)</Text>
    </Wrapper>
  </FooterRoot>
);
