'use client';

import Events from "./components/events/Events";
import MainEvent from "./components/mainEvent/mainEvent";

export default function HomePage() {
  return (
    <div>
      <MainEvent />
      <Events />
    </div>
  );
}
