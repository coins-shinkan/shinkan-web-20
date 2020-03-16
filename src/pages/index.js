import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import TopCard from "../components/Layout/TopCard";
import azarashi from "../imgs/azarashi.png";
import Page from "../styles/page";

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
    link: "events",
    img: { azarashi }
  },
  {
    title: "FAQ",
    description: "よくある質問と回答のまとめです。",
    link: "faq",
    img: { azarashi }
  },
  {
    title: "新歓委員より",
    description: "私たちから、新入生の皆さんへのごあいさつです。",
    link: "about",
    img: { azarashi }
  }
];

export default () => (
  <Layout>
    <Page>
      <Cards>
        {contents.map(contents => (
          <TopCard
            key={contents.title}
            title={contents.title}
            description={contents.description}
            link={contents.link}
            img={contents.img}
          />
        ))}
      </Cards>
    </Page>
  </Layout>
);
