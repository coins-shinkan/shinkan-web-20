import React from "react";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Events = styled.div`
  filter: drop-shadow(0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.15));
  border-radius: 1rem;
  display: block;
  text-decoration: none;
  color: ${Color.BLACK};
  background-color: ${Color.WHITE};
  grid-auto-rows: 14rem;
  margin: 1rem;
  padding-left: 2rem;
  padding-bottom: 1.5rem;
  padding-right: 2rem;
  width: 100%;
  ${Media.MOBILE} {
    width: auto;
    padding: 1rem;
  }
  a {
    color: black;
  }
  table {
    width: 100%;
  }
  h2 {
    font-size: 2rem;
    ${Media.MOBILE} {
      margin: 0;
      margin-bottom: 1rem;
      font-size: 1.7rem;
    }
  }
`;

const EventElement = styled.a`
  display: block;
  text-decoration: none;
  font-size: 1.4rem;
  margin-bottom: 0;
  padding: 0.3rem 0;
  border-bottom: medium dashed ${Color.SECONDARY};
  white-space: pre;
  td.title {
    font-size: 1.3rem;
  }
  /* td {
    min-width: 11rem;
    :first-child {
      width: fit-content;
    }
  } */
  ${Media.MOBILE} {
    font-size: 1rem;
    padding-top: 0.2rem;
    padding-bottom: 0.4rem;
    td {
      min-width: 9rem;
    }
  }
  :hover {
    background-color: ${Color.SECONDARY};
  }
`;

export default ({ data }) => {
  const eventList = data.allMarkdownRemark.edges;
  return (
    <Events>
      <h2>ニュース一覧</h2>
      <table>
        {eventList.map(event => (
          <EventElement href={event.node.frontmatter.path}>
            <tr>
              <td className="title">{event.node.frontmatter.title}</td>
            </tr>
            <tr>
              <td>投稿日: {event.node.frontmatter.date}</td>
            </tr>
          </EventElement>
        ))}
      </table>
    </Events>
  );
};
