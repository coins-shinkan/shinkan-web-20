import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";

const Page = styled.div`
  display: in;
  height: 100%;
  background: #99ff99;
`;

const Index = styled.div`
  display: block;
  height: 100%;
  background: ${Color.WHITE};
  float: left;
`;
const Content = styled.div`
  display: block;
  align-items: center;
  width: 70%;
  justify-content: center;
  background: ${Color.WHITE};
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
      <Content>bb</Content>
    </Page>
  </Layout>
);
