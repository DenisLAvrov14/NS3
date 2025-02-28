"use client";

import { EventType } from "@/types/event";
import EventsComingSoonDesktop from "./EventsComingSoonDesktop";
import EventsComingSoonMobile from "./EventsComingSoonMobile";
import { useIsMobile } from "../../hooks/useIsMobile";

interface EventsClientProps {
  events: EventType[];
}

export default function EventsComingSoonClient({ events }: EventsClientProps) {
  const isMobile = useIsMobile(640); // Проверяем ширину экрана

  return isMobile ? (
    <EventsComingSoonMobile events={events} />
  ) : (
    <EventsComingSoonDesktop events={events} />
  );
}
