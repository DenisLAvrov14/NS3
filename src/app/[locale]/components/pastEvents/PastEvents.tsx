"use client";

import { PastEventType } from "@/types/pastEventType";
import dynamic from "next/dynamic";

const PastEventsClient = dynamic(() => import("../pastEventsClient/PastEventsClient"), {
  ssr: false,
});

type PastEventsProps = {
  events: PastEventType[];
};

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  if (!events || events.length === 0) return null;

  return <PastEventsClient events={events} />;
};

export default PastEvents;
