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

const ToggleButton = styled.button`
  background-color: white;
`;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPage: 0
    };
  }
  incPage() {
    if (
      this.state.nowPage + 2 <
      this.props.data.allMarkdownRemark.edges.length
    ) {
      this.setState({ nowPage: this.state.nowPage + 1 });
    }
  }
  decPage() {
    if (this.state.nowPage > 0) {
      this.setState({ nowPage: this.state.nowPage - 1 });
    }
  }
  render() {
    const edges = this.props.data.allMarkdownRemark.edges;
    return (
      <>
        <Helmet>
          <title>新歓行事一覧 - COINS新歓2020</title>
        </Helmet>
        <CoinsLayout>
          <Content>
            <EventMenu>
              {edges.map(edge => (
                <p>
                  {" "}
                  {edge.node.frontmatter.date}
                  <br />
                  {edge.node.frontmatter.title}
                </p>
              ))}
            </EventMenu>
            <EventDescription>
              <div className="articleHead">
                <h1 className="title">
                  {edges[this.state.nowPage].node.frontmatter.title}
                </h1>
                <h4 className="date">
                  {edges[this.state.nowPage].node.frontmatter.date}
                </h4>
              </div>
              <hr />
              <div
                dangerouslySetInnerHTML={{
                  __html: edges[this.state.nowPage].node.html
                }}
              />
            </EventDescription>
          </Content>
          <Content>
            <button
              onClick={() => {
                this.decPage();
              }}
            >
              前へ
            </button>
            <button
              onClick={() => {
                this.incPage();
              }}
            >
              次へ
            </button>
          </Content>
        </CoinsLayout>
      </>
    );
  }
}

export default Events;
