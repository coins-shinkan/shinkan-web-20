import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";
import faqs from "../contents/faq.json";

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 92vw;
  max-width: 70rem;
  flex-direction: column;
`;

const Contents = styled.div`
  height: 100%;
  width: 100%;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    padding: 0;
  }
  p {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    font-size: 1.5rem;
    ${Media.MOBILE} {
      padding: 0;
      font-size: 1.2rem;
    }
  }
`;

const Content = styled.div`
  padding: 0.8rem;
  border-bottom: medium dashed ${Color.SECONDARY};
  .question {
    font-size: 1.8rem;
  }
  .answer {
    font-size: 1.6rem;
  }
`;

export default () => (
  <>
    <Helmet>
      <title>FAQ - COINS新歓2020</title>
    </Helmet>
    <Layout>
      <Page>
        <Contents>
          <h1>Frequently Asked Questions</h1>
          <p>新入生からのよくある質問と回答を随時追加していきます。</p>
          {faqs.map(faq => (
            <Content>
              <p className="question">Q: {faq.question}</p>
              <p className="answer">A: {faq.answer}</p>
            </Content>
          ))}
        </Contents>
      </Page>
    </Layout>
  </>
);
