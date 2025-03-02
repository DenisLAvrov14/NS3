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

      {/* Добавляем id для скролла */}
      <section id="soon">
        <EventsComingSoonClient events={events} />
      </section>

      <section id="past">
        <PastEvents events={pastEvents.events} />
      </section>

      <section id="about">
        <AboutUsContainer />
      </section>

      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}
