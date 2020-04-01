import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import Layout from "../components/Layout/Layout";
import { graphql } from "gatsby";
import Media from "../const/Media";
import Color from "../const/Color";
import "github-markdown-css";
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
    padding: 0.5rem;
    color: ${Color.BLACK};
  }
  a:visited {
    color: ${Color.BLACK};
  }
  ${Media.MOBILE} {
    order: 1;
    float: none;
    text-align: center;
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
  h2 {
    padding-top: 1rem;
    padding-bottom: 1.2rem;
    padding-left: 0.5rem;
  }
`;

const EventDescription = styled.div`
  display: block;
  padding: 1rem 3rem;
  width: 80%;
  background: ${Color.WHITE};
  word-break: break-all;
  ${Media.MOBILE} {
    width: 90%;
    padding: 1rem 5%;
    order: 0;
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
      margin: 1rem 0.5rem;
    }
  }
  hr {
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.3rem;
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
            <h2>ニュース一覧</h2>
            {eventList.map(event => {
              return (
                <a href={event.node.frontmatter.path}>
                  {event.node.frontmatter.title}
                  <br />
                  {event.node.frontmatter.date}
                </a>
              );
            })}
          </EventMenu>
          <EventDescription>
            <div className="articleHead">
              <h1 className="title">{post.frontmatter.title}</h1>
              <h4 className="date">投稿日: {post.frontmatter.date}</h4>
            </div>
            <hr />
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </EventDescription>
        </Content>
      </Layout>
    </>
  );
};

export const query = graphql`
  query($path: String!) {
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
