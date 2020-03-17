import React from "react";
import styled from "styled-components";

const Events = styled.div`
  background-color: white;
  width: 100%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  a {
    color: black;
  }
  h2 {
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 2em;
  }
`;

const EventElement = styled.p`
  margin-left: 50px;
  font-size: 1.7em;
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

