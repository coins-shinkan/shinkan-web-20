import React from "react";
import Helmet from "react-helmet";
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
  p {
    font-size: 1.3rem;
  }
`;

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 92vw;
  max-width: 70rem;
  flex-direction: column;
`;

export default () => (
  <>
    <Helmet>
      <title>新歓委員より - COINS新歓2020</title>
    </Helmet>
    <Layout>
      <Page>
        <Contents>
          {contents.map(content => (
            <Content>
              <h1>{content.title}</h1>
              {content.paragraphs.map(paragraph => (
                <p>{paragraph}</p>
              ))}
            </Content>
          ))}
        </Contents>
      </Page>
    </Layout>
  </>
);
