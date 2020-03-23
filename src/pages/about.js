import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";
import contents from "../contents/about.json";

const Contents = styled.div`
  height: 100%;
  width: 100%;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    padding: 0;
  }
`;

const Content = styled.div`
  padding: 0.8rem;
`;

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 92vw;
  max-width: 70rem;
  flex-direction: column;
`;

export default () => (
  <Layout>
    <Page>
      <Contents>
        {contents.map(content => (
          <Content>
            <h2>{content.title}</h2>
            {content.paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </Content>
        ))}
      </Contents>
    </Page>
  </Layout>
);
