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
  width: 70rem;
  flex-direction: column;
  ${Media.MOBILE} {
    width: 100%;
  }
`;

const Contents = styled.div`
  height: 100%;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    padding: 1rem 4vw;
  }
  p {
    font-size: 1.5rem;
    ${Media.MOBILE} {
      padding: 0;
      font-size: 1.2rem;
    }
  }
`;

const Content = styled.div`
  padding: 0.8rem 0;
  border-bottom: medium dashed ${Color.SECONDARY};
  .question {
    font-size: 1.8rem;
    ${Media.MOBILE} {
      font-size: 1.4rem;
    }
  }
  .answer {
    font-size: 1.6rem;
    ${Media.MOBILE} {
      font-size: 1.2rem;
    }
  }
  :last-child {
    border-bottom: none;
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
