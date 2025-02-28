import { getMainEvent } from "@/lib/getMainEvent";
import { getPastEvents } from "@/lib/getPastEvents";
import PastEvents from "./components/pastEvents/PastEvents";
import AboutUsContainer from "./components/aboutUsContainer/AboutUsContainer";
import Footer from "./components/footer/Footer";
import { getEvents } from "@/lib/getEvents";
import EventsComingSoonClient from "./components/EventsComingSoon/EventsComingSoonClient";
import MainEventClient from "./components/mainEvent/MainEventClient";

export default async function HomePage() {
  const mainEvent = await getMainEvent();
  const locale = "en"; // Replace with the appropriate locale
  const pastEvents = await getPastEvents(locale);
  const events = await getEvents(); // Загружаем события с сервера

  return (
    <div>
      {mainEvent && <MainEventClient event={mainEvent} />}
      <EventsComingSoonClient events={events} />
      <PastEvents events={pastEvents.events} />
      <AboutUsContainer />
      <Footer />
    </div>
  );
}
