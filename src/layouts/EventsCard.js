import React from "react";
import styled from "styled-components";

const Events = styled.div`
  background-color: white;
  max-width: 1100px;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Ichiran = styled.h2`
  margin-left: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2em;
  text-decoration-line: underline;
`;

const EventElement = styled.p`
  margin-left: 50px;
  font-size: 1.7em;
`;

export default ({ eventList }) => {
  return (
    <Events>
      <Ichiran>新歓行事一覧</Ichiran>
      {eventList.map(event => (
        <EventElement>
          {event.date} {event.eventName}
        </EventElement>
      ))}
    </Events>
  );
};
