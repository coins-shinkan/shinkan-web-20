import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/CoinsLayout";
import eventList from "../contents/eventList.json";

const Content = styled.div`
  display: flex;
`;

const EventMenu = styled.div`
  background-color: white;
  width: 20%;
  padding: 10px;
  padding-right: 0;
  margin-right: 5%;
`;

const EventDescription = styled.div`
  background-color: white;
  width: 75%;
`;

function toggleEvents() {}

export default () => {
  return (
    <>
      <Helmet>
        <title>新歓行事一覧 - COINS新歓2020</title>
      </Helmet>
      <CoinsLayout>
        <Content>
          <EventMenu>
            {eventList.map(event => (
              <p>{event.name}</p>
            ))}
          </EventMenu>
          <EventDescription>
            <p>イベントだよ</p>
          </EventDescription>
        </Content>
      </CoinsLayout>
    </>
  );
};
