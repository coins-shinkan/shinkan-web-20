import React from "react";
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
