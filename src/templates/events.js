import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Media from "../const/Media";
import Color from "../const/Color";

const Content = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  ${Media.MOBILE} {
    display: grid;
  }
`;

const EventMenu = styled.div`
  height: 100%;
  background: ${Color.WHITE};
  float: left;
  padding: 1rem;
  a:hover {
    background-color: ${Color.SECONDARY};
  }
  a {
    border-bottom: medium dashed ${Color.SECONDARY};
    text-decoration: none;
    display: block;
    padding-top: 0.5rem;
  }
  ${Media.MOBILE} {
    order: 1;
    float: none;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 90%;
    max-width: 80rem;
    display: inline-block;
  }
  p {
    margin: 30px 0;
    line-height: 1.4em;
    ${Media.MOBILE} {
      margin: 0;
      display: block;
    }
  }
`;

const EventDescription = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 80rem;
  background: ${Color.WHITE};
  padding: 1rem;
  ${Media.MOBILE} {
    width: 100%;
    order: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 90%;
    max-width: 80rem;
    display: inline-block;
  }
  .articleHead {
    display: flex;
    align-items: baseline;
    ${Media.MOBILE} {
      display: block;
    }
  }
  .title {
    font-size: 2.5em;
    margin: 20px 0;
    ${Media.MOBILE} {
      margin: 0;
    }
  }
  .date {
    text-align: right;
    width: fit-content;
    margin-left: auto;
    ${Media.MOBILE} {
      text-align: left;
      margin: 0;
      margin-left: 0.5rem;
    }
  }
  hr {
    margin-bottom: 1rem;
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
      <Layout>
        <Content>
          <EventMenu>
            {eventList.map(event => {
              return (
                <a href={event.node.frontmatter.path}>
                  {event.node.frontmatter.date}
                  <br />
                  {event.node.frontmatter.title}
                </a>
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
      </Layout>
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
