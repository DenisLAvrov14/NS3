"use client";

import { EventData } from "@/types/eventData";
import EventImages from "../eventImages/EventImages";
import DOMPurify from "isomorphic-dompurify"; // Защита от XSS
import EventTicket from "../eventTicket/EventTicket";

interface EventPageProps {
  event: EventData;
}

export default function EventPage({ event }: EventPageProps) {
  if (!event) {
    return <p className="text-gray-400">Событие не найдено</p>;
  }

  console.log("Event data:", event);

  // Формируем массив ссылок на изображения
  const formattedImages = event.images?.map((img) => `http://localhost:8055/assets/${img}`) || [];

  // Очищаем описание от HTML-тегов
  const cleanDescription = event.description
    ? DOMPurify.sanitize(event.description.replace(/<\/?[^>]+(>|$)/g, ""))
    : "";

  return (
    <div className="w-full bg-black px-4 py-8 text-white flex flex-col items-center">
      {/* Используем EventImages */}
      {formattedImages.length > 0 ? (
        <EventImages images={formattedImages} />
      ) : (
        <p className="text-gray-400">Нет изображений</p>
      )}

      {/* Основной блок */}
      <div className="grid md:grid-cols-2 gap-[294px] mt-6 ml-auto mr-auto w-fit">
        {/* Блок с заголовком и описанием */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-lg">{cleanDescription}</p>
        </div>

        {/* Блок с билетами */}
        <div className="flex justify-end">
          <EventTicket
            date={event.date}
            time={event.time}
            location={event.location}
            buyLink={event.buy_link}
          />
        </div>
      </div>
    </div>
  );
}
