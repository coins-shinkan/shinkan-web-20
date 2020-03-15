import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import TopCard from "../components/Layout/TopCard";

const Page = styled.div`
  display: inline-block;
  width: 96vw;
  max-width: 50rem;
  background: ${Color.SECONDARY};
  height: 100%;
`;

const Heading1 = styled.h1`
  diaplay: block;
  color: ${Color.WHITE};
`;

const Cards = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const contents = [
  {
    title: "新歓行事一覧",
    description: "入学前後にある行事です。",
    link: "events"
  },
  {
    title: "FAQ",
    description: "よくある質問と回答のまとめです。",
    link: "faq"
  },
  {
    title: "新歓委員より",
    description: "私たちから、新入生の皆さんへのごあいさつです。",
    link: "about"
  }
];

export default () => (
  <Layout>
    <Page>
      <Heading1>筑波大学へようこそ！</Heading1>
      <Cards>
        {contents.map(contents => (
          <TopCard
            key={contents.title}
            title={contents.title}
            description={contents.description}
            link={contents.link}
          />
        ))}
      </Cards>
    </Page>
  </Layout>
);
