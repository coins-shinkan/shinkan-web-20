import React from "react";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Events = styled.div`
  border-radius: 1rem;
  display: block;
  text-decoration: none;
  color: ${Color.BLACK};
  background-color: ${Color.WHITE};
  grid-auto-rows: 14rem;
  margin: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
  padding-right: 2rem;
  width: 100%;
  ${Media.MOBILE} {
    width: auto;
    padding: 1rem;
  }
  a {
    color: black;
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
  margin-top: 0.5rem;
  border-bottom: medium dashed ${Color.SECONDARY};
  ${Media.MOBILE} {
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  :hover {
    background-color: ${Color.SECONDARY};
  }
`;

export default ({ data }) => {
  const eventList = data.allMarkdownRemark.edges;
  return (
    <Events href>
      <h2>新歓行事一覧</h2>
      {eventList.map(event => (
        <EventElement href={event.node.frontmatter.path}>
          {event.node.frontmatter.date.padEnd(18, " ")}
          {event.node.frontmatter.title}
        </EventElement>
      ))}
    </Events>
  );
};
