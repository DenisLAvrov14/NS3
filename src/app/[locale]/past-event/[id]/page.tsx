import { getEventData } from "@/lib/getEventData";
import { getPastEvents } from "@/lib/getPastEvents";
import PastEventPage from "../../components/pastEventPage/pastEventPage";
import PastEvents from "../../components/pastEvents/PastEvents";
import Footer from "../../components/footer/Footer";

export default async function Page({ params }: { params: { locale: string; id: string } }) {
  const { locale, id } = params;
  const pastEvents = await getPastEvents(locale);

  console.log("Fetching past event data for", locale, id);

  const event = await getEventData(locale, id);

  if (!event) {
    return <p className="text-center text-gray-400">Событие не найдено</p>;
  }

  return (
    <div>
      <PastEventPage event={event} />
      <PastEvents events={pastEvents.events.slice(0, 2)} />
      <Footer />
    </div>
  );
}
