import React from "react";
<<<<<<< HEAD
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

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

const faqs = [
  {
    question: "coinsとは何のことですか？",
    answer: "College Of INformation Science の略称です。"
  },
  {
    question: "オタクが多いですか？",
    answer: "いいえ"
  },
  {
    question: "オタクですか？",
    answer: "いいえ"
  }
];

export default () => (
  <Layout>
    <Page>
      <Contents>
        {faqs.map(faq => (
          <Content>
            <p className="question">Q: {faq.question}</p>
            <p className="answer">A: {faq.answer}</p>
          </Content>
        ))}
      </Contents>
    </Page>
  </Layout>
);
=======
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/CoinsLayout";
import faq from "../contents/faq.json";

const Content = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Fq = ({ question, answer }) => {
  return (
    <>
      <h2>{question}</h2>
      <p>{answer}</p>
    </>
  );
};

export default () => {
  return (
    <>
      <Helmet>
        <title>よくある質問 - COINS新歓2020</title>
      </Helmet>
      <CoinsLayout>
        <Content>
          <h1>Frequently Asked Questions</h1>
          <p>ふぁっきゅふぁっきゅー！ふぁ゛っ゛っ゛ぎゅー！！</p>
          {faq.map(qaPair => (
            <Fq question={qaPair.question} answer={qaPair.answer} />
          ))}
        </Content>
      </CoinsLayout>
    </>
  );
};
>>>>>>> origin/villtaste/addContents
