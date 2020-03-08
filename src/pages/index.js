import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import CoinsLayout from "../layouts/CoinsLayout";
import EventsCard from "../layouts/EventsCard";
import TopCard from "../layouts/TopCard";
import { secondary } from "../lib/colors";
import eventList from "../contents/eventList.json";

const Heading1 = styled.div`
  background-color: ${secondary};
  padding-top: 50px;
  padding-bottom: 50px;
`;

const OtherCard = styled.div`
  display: flex;
  max-width: 1160px;
  margin: auto;
  margin-top: 30px;
`;

const events = [
  {
    title: "FAQ",
    description: "よくある質問と回答のまとめです．",
    link: "faq"
  },
  {
    title: "新歓委員より",
    description: "私たちから，新入生の皆さんへのご挨拶です．",
    link: "about"
  }
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
          {events.map(event => (
            <TopCard
              key={event.title}
              title={event.title}
              description={event.description}
              link={event.link}
            />
          ))}
        </OtherCard>
      </Heading1>
    </CoinsLayout>
  </>
);
