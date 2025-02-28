import { getEventData } from "@/lib/getEventData";
import EventPage from "../../components/eventPage/EventPage";
import { getPastEvents } from "@/lib/getPastEvents";
import PastEvents from "../../components/pastEvents/PastEvents";
import Footer from "../../components/footer/Footer";

export default async function Page({ params }: { params: { locale: string; id: string } }) {
  const { locale, id } = params;

  // Получаем прошедшие события с учетом локали
  const pastEvents = await getPastEvents(locale);

  // Получаем данные текущего события
  const event = await getEventData(locale, id);

  if (!event) {
    return <p className="text-center text-gray-400">Событие не найдено</p>;
  }

  return (
    <div>
      <EventPage event={event} />
      <PastEvents events={pastEvents.events.slice(0, 2)} />
      <Footer />
    </div>
  );
}
