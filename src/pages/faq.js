import React from "react";
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
`;

const Question = styled.p`
  font-size: 1.8rem;
`;

const Answer = styled.p`
  font-size: 1.5rem;
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
            <Question>Q: {faq.question}</Question>
            <Answer>A: {faq.answer}</Answer>
          </Content>
        ))}
      </Contents>
    </Page>
  </Layout>
);
