import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/CoinsLayout";
import { graphql } from "gatsby";

const Content = styled.div`
  display: flex;
`;

const EventMenu = styled.div`
  background-color: white;
  width: 20%;
  /* height: fit-content; */
  padding: 10px;
  padding-right: 0;
  margin-right: 5%;
  p {
    margin: 30px 0;
    line-height: 1.4em;
  }
`;

const EventDescription = styled.div`
  background-color: white;
  width: 75%;
  padding: 10px 30px;
  .articleHead {
    display: flex;
    align-items: baseline;
  }
  .title {
    font-size: 2.5em;
    margin: 20px 0;
  }
  .date {
    text-align: right;
    width: fit-content;
    margin-left: auto;
  }
  hr {
    margin-bottom: 40px;
  }
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  const eventList = data.allMarkdownRemark.edges;
  return (
    <>
      <Helmet>
        <title>{post.frontmatter.title} - COINS新歓2020</title>
      </Helmet>
      <CoinsLayout>
        <Content>
          <EventMenu>
            {eventList.map(event => {
              return (
                <p>
                  {event.node.frontmatter.date}
                  <br />
                  <a href={event.node.frontmatter.path}>
                    {event.node.frontmatter.title}
                  </a>
                </p>
              );
            })}
          </EventMenu>
          <EventDescription>
            <div className="articleHead">
              <h1 className="title">{post.frontmatter.title}</h1>
              <h4 className="date">{post.frontmatter.date}</h4>
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </EventDescription>
        </Content>
      </CoinsLayout>
    </>
  );
};

export const query = graphql`
  query($path: String!) {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date
        path
      }
      html
    }
  }
`;
