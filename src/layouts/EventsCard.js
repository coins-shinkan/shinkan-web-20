import React from "react";
import styled from "styled-components";
import Color from "../const/Color";
import Media from "../const/Media";

const Events = styled.div`
  background-color: ${Color.WHITE};
  grid-auto-rows: 14rem;
  margin: 1rem;
  padding: 1rem;
  a {
    color: black;
  }
  h2 {
    font-size: 2rem;
    ${Media.MOBILE} {
      font-size: 1.7rem;
    }
  }
`;

const EventElement = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0;
  margin-top: 0.5rem;
  ${Media.MOBILE} {
    font-size: 1rem;
    margin-top: 0.2rem;
  }
`;

export default ({ data }) => {
  const eventList = data.allMarkdownRemark.edges;
  return (
    <Events>
      <h2>新歓行事一覧</h2>
      {eventList.map(event => (
        <EventElement>
          {event.node.frontmatter.date.padEnd(18, " ")}
          <a href={event.node.frontmatter.path}>
            {event.node.frontmatter.title}
          </a>
        </EventElement>
      ))}
    </Events>
  );
};
