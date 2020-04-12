import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Media from "../const/Media";
import village from "../imgs/murakami.jpg";
import soy from "../imgs/kai.png";
import shimi from "../imgs/shimi.png";
import miss from "../imgs/miss.jpg";
import MemberCard from "../components/MemberCard/MemberCard.js";

const GridCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 1em;
  ${Media.MOBILE} {
    grid-template-columns: 1fr;
  }
`;

const Page = styled.div`
  height: 100%;
  width: 70rem;
  h1 {
    text-align: center;
  }
  h4 {
    text-align: center;
  }
  ${Media.MOBILE} {
    width: 100%;
  }
  :last-child {
    margin-bottom: 10px;
  }
`;

const members = [
  {
    img: village,
    name: "むらかみ",
    description: "新歓委員長です。新入生を歓迎したかった。",
    link: "https://twitter.com/ITF_village"
  },
  {
    img: shimi,
    name: "しみちゃん",
    description: "よしなに",
    link: "https://twitter.com/sh1mc"
  },
  {
    img: soy,
    name: "そやま",
    description: "パンフレットには載っていませんが新歓委員です。",
    link: "https://twitter.com/0ilpanic"
  },
  {
    img: miss,
    name: "あおき",
    description: "アルバイト頑張りすぎて落単しないようにしようね！",
    link: "https://twitter.com/ITF_menhera"
  }
];

export default () => (
  <>
    <Helmet>
      <title>私たちが作りました</title>
    </Helmet>
    <Layout>
      <Page>
        <h1>生産者表示</h1>
        <h4>ここに載っている方々以外にもたくさんのお力添えをいただきました</h4>
        <GridCard>
          {members.map(property => (
            <MemberCard key={property.name} props={property} />
          ))}
        </GridCard>
      </Page>
    </Layout>
  </>
);
