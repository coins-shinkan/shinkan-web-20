import React from "react";
import styled from "styled-components";

const Events = styled.div`
  background-color: white;
  max-width: 1100px;
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

export default ({ eventList }) => {
  return (
    <Events>
      <a href="events">
        <h2>新歓行事一覧</h2>
      </a>
      {eventList.map(event => (
        <EventElement>
          {event.date} {event.name}
        </EventElement>
      ))}
    </Events>
  );
};
