import { getEventData } from "@/lib/getEventData";
import EventPage from "../../components/eventPage/EventPage";

export default async function Page({ params }: { params: { locale: string; id: string } }) {
  const { locale, id } = params;

  console.log("Fetching event data for", locale, id);

  const event = await getEventData(locale, id);

  if (!event) {
    return <p className="text-center text-gray-400">Событие не найдено</p>;
  }

  return <EventPage event={event} />;
}
