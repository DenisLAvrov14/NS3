"use client";

import { EventType } from "@/types/event";
import { useIsMobile } from "../../hooks/useIsMobile";
import MainEventDesktop from "./MainEventDesktop";
import MainEventMobile from "./MainEventMobile";

interface MainEventProps {
  event: EventType;
}

export default function MainEventClient({ event }: MainEventProps) {
  const isMobile = useIsMobile(640); // Проверяем ширину экрана

  return isMobile ? <MainEventMobile event={event} /> : <MainEventDesktop event={event} />;
}
