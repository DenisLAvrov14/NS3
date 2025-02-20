import Events from "./components/events/Events";
import { getMainEvent } from "@/lib/getMainEvent";
import MainEvent from "./components/mainEvent/MainEvent";

export default async function HomePage() {
  const mainEvent = await getMainEvent();

  return (
    <div>
      {mainEvent && <MainEvent event={mainEvent} />}
      <Events />
    </div>
  );
}
