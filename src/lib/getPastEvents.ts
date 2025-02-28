import { PastEventsProps } from "@/types/PastEventsProps";

export async function getPastEvents(locale: string): Promise<PastEventsProps> {
  const res = await fetch(
    `http://localhost:8055/items/events?filter[is_past_event][_eq]=true&fields=*,translations.*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch past events");
    return { events: [] };
  }

  const data = await res.json();

  // Преобразуем API-ответ, подставляя переводы при наличии
  const transformedEvents = data.data.map((event: any) => {
    const translation = event.translations?.find((t: any) => t.locale === locale);

    return {
      ...event,
      title: translation?.title || event.title, // Берем перевод или оригинал
      description: translation?.description || event.description,
      location: translation?.location || event.location,
      imageUrl: event.image, // Переименовываем `image` в `imageUrl`
    };
  });

  console.log("Обновленные прошедшие события:", transformedEvents); // Логируем результат

  return { events: transformedEvents };
}
