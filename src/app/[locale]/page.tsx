import { getMainEvent } from "@/lib/getMainEvent";
import MainEvent from "./components/mainEvent/MainEvent";
import { getPastEvents } from "@/lib/getPastEvents";
import PastEvents from "./components/pastEvents/PastEvents";
import AboutUsContainer from "./components/aboutUsContainer/AboutUsContainer";
import Footer from "./components/footer/Footer";
import { getEvents } from "@/lib/getEvents";
import EventsComingSoon from "./components/EventsComingSoon/EventsComingSoon";

export default async function HomePage() {
  const mainEvent = await getMainEvent();
  const pastEvents = await getPastEvents();
  const events = await getEvents(); // Загружаем события с сервера

  return (
    <div>
      {mainEvent && <MainEvent event={mainEvent} />}
      <EventsComingSoon events={events} />
      <PastEvents events={pastEvents.events} />
      <AboutUsContainer />
      <Footer />
    </div>
  );
}
