import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Page = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  ${Media.MOBILE} {
    display: grid;
  }
`;

const Index = styled.div`
  display: block;
  height: 100%;
  background: ${Color.WHITE};
  float: left;
  padding: 1rem;
  ${Media.MOBILE} {
    order: 1;
    text-align: center;
  }
`;
const Contents = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 80rem;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    order: 0;
  }
`;

const Content = styled.div`
  display block;
  padding-bottom: 1rem;
`;

const IndexEvent = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const events = [
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  },
  {
    title: "入学式",
    date: "2020-04-07",
    description: [
      "入学をする式です。",
      "中止になったので、間違えて行くことのないよう、注意が必要です。"
    ]
  }
];

export default () => (
  <Layout>
    <Page>
      <Index>
        {events.map(events => (
          <IndexEvent>
            {events.date} {events.title}
          </IndexEvent>
        ))}
      </Index>
      <Contents>
        {events.map(events => (
          <Content>
            <h2>{events.title}</h2>
            {events.description.map(description => (
              <p>{description}</p>
            ))}
          </Content>
        ))}
      </Contents>
    </Page>
  </Layout>
);
