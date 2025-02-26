"use client";

import { EventData } from "@/types/eventData";
import EventImages from "../eventImages/EventImages";
import DOMPurify from "isomorphic-dompurify";
import PastEventTicket from "../pastEventTicket/PastEventTicket";
import { useTranslations } from "next-intl";

interface PastEventPageProps {
  event: EventData;
}

export default function PastEventPage({ event }: PastEventPageProps) {
  const t = useTranslations("pastEventPage"); // Подключаем переводы

  if (!event) {
    return <p className="text-gray-400">{t("eventNotFound")}</p>;
  }

  console.log("Past Event data:", event);

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
        <p className="text-gray-400">{t("noImages")}</p>
      )}

      {/* Основной блок */}
      <div className="grid md:grid-cols-2 gap-[294px] mt-6 ml-auto mr-auto w-fit">
        {/* Блок с заголовком и описанием */}
        <div className="flex flex-col justify-center text-left">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <p className="text-lg">{cleanDescription}</p>
        </div>

        {/* Блок с информацией о прошедшем мероприятии */}
        <div className="relative left-[90px]">
          <PastEventTicket location={event.location} />
        </div>
      </div>
    </div>
  );
}
