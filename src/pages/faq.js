import React from "react";
import Styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/header";
import faq from "../contents/faq.json";

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
        <title>Frequently asked questions</title>
      </Helmet>
      <CoinsLayout>
        <h1>Frequently Asked Questions</h1>
        <p>ふぁっきゅふぁっきゅー！ふぁ゛っ゛っ゛ぎゅー！！</p>
        {faq.map(qaPair => (
          <Fq question={qaPair.question} answer={qaPair.answer} />
        ))}
      </CoinsLayout>
    </>
  );
};
