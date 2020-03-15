import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";

const Page = styled.div`
  display: inline-block;
  max-width: 50rem;
  background: ${Color.SECONDARY};
  padding: 1rem;
  height: 100%;
`;

const Heading1 = styled.h1`
  diaplay: block;
  color: ${Color.WHITE};
`;

const Paragraph = styled.p`
  display: block;
  color: ${Color.WHITE};
`;

export default () => (
  <Layout>
    <Page>
      <Heading1>筑波大学へようこそ！</Heading1>
      <Paragraph>筑波大学とは、つくばにある大学です。</Paragraph>
      <Paragraph>
        つくばにあるので、筑波大学という名前です。ご理解のほど、よろしくお願いします。
      </Paragraph>
      <Paragraph>ちなみに、つくばにはさまざまな大学が存在します。</Paragraph>
      <Paragraph>その一つが、筑波大学です。</Paragraph>
    </Page>
  </Layout>
);
