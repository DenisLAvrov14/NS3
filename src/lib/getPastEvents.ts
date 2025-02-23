import { PastEventsProps } from "@/types/PastEventsProps";

export async function getPastEvents(): Promise<PastEventsProps> {
  const res = await fetch("http://localhost:8055/items/events?filter[is_past_event][_eq]=true", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch past events");
    return { events: [] };
  }

  const data = await res.json();

  // Преобразуем API-ответ, переименовывая `image` в `imageUrl`
  const transformedEvents = data.data.map((event: any) => ({
    ...event,
    imageUrl: event.image, // Переименовываем `image` в `imageUrl`
  }));

  console.log("Обновленные события:", transformedEvents); // Логируем результат

  return { events: transformedEvents };
}
