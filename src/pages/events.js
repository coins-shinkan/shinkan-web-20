import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/CoinsLayout";
import eventList from "../contents/eventList.json";
import { graphql } from "gatsby";

const Content = styled.div`
  display: flex;
`;

const EventMenu = styled.div`
  background-color: white;
  width: 20%;
  padding: 10px;
  padding-right: 0;
  margin-right: 5%;
`;

const EventDescription = styled.div`
  background-color: white;
  width: 75%;
  padding: 10px 30px;
`;

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`;

let nowPage = 0;

function toggleEvents() {}

export default ({ data }) => {
  return (
    <>
      <Helmet>
        <title>新歓行事一覧 - COINS新歓2020</title>
      </Helmet>
      <CoinsLayout>
        <Content>
          <EventMenu>
            {eventList.map(event => (
              <p>{event.name}</p>
            ))}
          </EventMenu>
          <EventDescription
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[nowPage].node.html
            }}
          />
        </Content>
      </CoinsLayout>
    </>
  );
};
