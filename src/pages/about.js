import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Contents = styled.div`
  height: 100%;
  width: 100%;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    padding: 0;
  }
`;

const Content = styled.div`
  padding: 0.8rem;
`;

const Page = styled.div`
  display: flex;
  height: 100%;
  width: 92vw;
  max-width: 70rem;
  flex-direction: column;
`;

const contents = [
  {
    title: "委員長お気持ち表明",
    paragraphs: [
      "初春の候、新入生の皆様におかれましてはますますご健勝のことと存じます。",
      "皆様におかれましては、キモ・インターネッツを差し控えるよう、お願い申し上げます。"
    ]
  },
  {
    title: "委員長のお言葉",
    paragraphs: [
      "初春の候、新入生の皆様におかれましてはますますご健勝のことと存じます。",
      "ああああああああああああああああああああああああああああああああああああ",
      "ああああああああああああああああああああああああああああああああああああaaaa"
    ]
  }
];

export default () => (
  <Layout>
    <Page>
      <Contents>
        {contents.map(content => (
          <Content>
            <h2>{content.title}</h2>
            {content.paragraphs.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </Content>
        ))}
      </Contents>
    </Page>
  </Layout>
);
