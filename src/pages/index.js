import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/header";
import EventsCard from "../layouts/EventsCard"
import TopCard from "../layouts/TopCard";
import { secondary } from "../lib/colors";

const Heading1 = styled.div`
  background-color: ${secondary};
  padding-top: 50px;
  padding-bottom: 50px;
`;

const OtherCard = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  margin-top: 30px;
`;

const eventList = [
  {date: "2020-04-01", eventName: "宿舎入居"},
  {date: "2020-04-01", eventName: "宿舎入居"},
  {date: "2020-04-01", eventName: "宿舎入居"},
  {date: "2020-04-01", eventName: "履修相談"},
  {date: "2020-04-01", eventName: "学類懇親会"},
  {date: "2020-04-01", eventName: "合宿"},
  {date: "2020-04-03", eventName: "入学式"},
  {date: "2020-04-04", eventName: "TOEFL"}
]

const events = [
  {title: "FAQ", description: "よくある質問と回答のまとめです．"},
  {title: "新歓委員より", description: "私たちから，新入生の皆さんへのご挨拶です．"}
];

export default () => (
  <>
    <Helmet>
      <title>COINS新歓2020</title>
    </Helmet>
    <CoinsLayout>
      <Heading1>
        <EventsCard eventList={eventList} />
        <OtherCard>
        {events.map(event => <TopCard key={event.title} title={event.title} description={event.description} />)}
        </OtherCard>
      </Heading1>
    </CoinsLayout>
  </>
);
