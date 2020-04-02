import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import TopCard from "../layouts/TopCard";
import EventsCard from "../layouts/EventsCard";
import azarashi from "../imgs/azarashi.png";
import neko from "../imgs/neko.png";
import Media from "../const/Media";
import { graphql } from "gatsby";

const Page = styled.div`
  display: inline-block;
  height: 100%;
  margin-top: 2rem;
`;

const Cards = styled.div`
  max-width: 76rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  ${Media.MOBILE} {
    display: block;
  }
`;

const contents = [
  {
    title: "FAQ",
    description:
      "よくある質問と回答のまとめです。新歓委員に質問する前にこちらをご覧ください。",
    link: "faq",
    img: neko,
  },
  {
    title: "新歓委員より",
    description: "私たちから、新入生の皆さんへのごあいさつです。",
    link: "about",
    img: azarashi,
  },
];

export default ({ data }) => (
  <>
    <Helmet>
      <title>COINS新歓2020</title>
    </Helmet>
    <Layout>
      <Page>
        <Cards>
          <EventsCard data={data} />
        </Cards>
        <Cards>
          <TopCard
            title="新歓LINEを登録してください"
            description="重要な情報を配信するので、新歓LINEを登録し、重要な情報を必ず見逃さないようにしてください。クリックすると友達登録画面を開きます。LINE ID: @892epdec"
            link="https://lin.ee/lWPRX87"
            img="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
          />
        </Cards>
        <Cards>
          {contents.map((contents) => (
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
  </>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
