"use client";

import { EventData } from "@/types/eventData";
import EventImages from "../eventImages/EventImages";
import DOMPurify from "isomorphic-dompurify"; // Защита от XSS
import EventTicket from "../eventTicket/EventTicket";
import { useLocale } from "next-intl";

interface EventPageProps {
  event: EventData;
}

export default function EventPage({ event }: EventPageProps) {
  const locale = useLocale(); // Получаем текущий язык ("ru" или "en")

  if (!event) {
    return <p className="text-gray-400">Событие не найдено</p>;
  }

  console.log("Event data:", event);

  // Ищем перевод события под текущий язык
  const translation = event.translations?.find((t) => t.locale === locale);

  // Используем переведенные данные или оригинальные, если перевода нет
  const eventTitle = translation?.title || event.title;
  const eventDescription = translation?.description || event.description;
  const eventLocation = translation?.location || event.location;

  // Очищаем описание от HTML-тегов
  const cleanDescription = eventDescription
    ? DOMPurify.sanitize(eventDescription.replace(/<\/?[^>]+(>|$)/g, ""))
    : "";

  // Проверяем, есть ли изображения
  const formattedImages = Array.isArray(event.images)
    ? event.images.map((img) => (img ? `http://localhost:8055/assets/${img}` : ""))
    : [];

  return (
    <div className="w-full bg-black px-4 py-8 text-white flex flex-col items-center">
      {/* Используем EventImages, если есть */}
      {formattedImages.length > 0 ? (
        <EventImages images={formattedImages} />
      ) : (
        <p className="text-gray-400">Нет изображений</p>
      )}

      {/* Основной блок */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[100px] mt-6 w-full max-w-[1140px]">
        {/* Блок с заголовком и описанием */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">{eventTitle}</h1>
          <p className="text-base sm:text-lg">{cleanDescription}</p>
        </div>

        {/* Блок с билетами */}
        <div className="sm:relative sm:left-[90px]">
          <EventTicket
            date={event.date}
            time={event.time}
            location={eventLocation}
            buyLink={event.buy_link}
          />
        </div>
      </div>
    </div>
  );
}
