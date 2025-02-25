import { EventData } from "@/types/eventData";

export async function getEventData(locale: string, id: string): Promise<EventData | null> {
  const res = await fetch(`http://localhost:8055/items/events/${id}?locale=${locale}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch event data");
    return null;
  }

  const data = await res.json();

  // Преобразуем API-ответ, чтобы image стал imageUrl
  return {
    ...data.data,
    imageUrl: data.data.image, // Приводим к единому формату
  };
}
