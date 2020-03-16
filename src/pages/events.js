import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";

const Index = styled.div`
  display: inline-block;
  width: 15rem;
  background: ${Color.SECONDARY};
  height: 100%;
  margin-right: 2rem;
`;

const Page = styled.div`
  display: inline-block;
  width: 96vw;
  max-width: 45rem;
  background: ${Color.SECONDARY};
  height: 100%;
`;

export default () => (
  <Layout>
    <Index>
      <p>2020-04-07 入学式</p>
      <p>2020-04-07 入学式</p>
      <p>2020-04-07 入学式</p>
      <p>2020-04-07 入学式</p>
    </Index>
    <Page>
      <h1>イベント一覧</h1>
      <h2>入学式</h2>
      <p>入学をする式です。</p>
      <p>中止になったので、間違えて行くことのないよう、注意が必要です。</p>
    </Page>
  </Layout>
);
