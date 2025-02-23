import { getMainEvent } from "@/lib/getMainEvent";
import Events from "./components/events/Events";
import MainEvent from "./components/mainEvent/MainEvent";
import { getPastEvents } from "@/lib/getPastEvents";
import PastEvents from "./components/pastEvents/PastEvents";
import AboutUsContainer from "./components/aboutUsContainer/AboutUsContainer";
import Footer from "./components/footer/Footer";

export default async function HomePage() {
  const mainEvent = await getMainEvent();
  const pastEvents = await getPastEvents();

  return (
    <div>
      {mainEvent && <MainEvent event={mainEvent} />}
      <Events />
      <PastEvents events={pastEvents.events} />
      <AboutUsContainer />
      <Footer />
    </div>
  );
}
