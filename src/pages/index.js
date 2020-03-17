import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import TopCard from "../layouts/TopCard";
import azarashi from "../imgs/azarashi.png";
import Page from "../styles/page";
import Media from "../const/Media";

const Cards = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  ${Media.MOBILE} {
    display: block;
  }
`;

const events = {
  title: "新歓行事一覧",
  description: "入学前後にある行事です。",
  link: "events",
  img: azarashi
};

const contents = [
  {
    title: "FAQ",
    description: "よくある質問と回答のまとめです。",
    link: "faq",
    img: azarashi
  },
  {
    title: "新歓委員より",
    description: "私たちから、新入生の皆さんへのごあいさつです。",
    link: "about",
    img: azarashi
  }
];

export default () => (
  <Layout>
    <Page>
      <Cards>
        <TopCard
          key={events.title}
          title={events.title}
          description={events.description}
          link={events.link}
          img={events.img}
        />
      </Cards>
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
