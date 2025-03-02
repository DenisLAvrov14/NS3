"use client";

import { EventData } from "@/types/eventData";
import EventImages from "../eventImages/EventImages";
import DOMPurify from "isomorphic-dompurify";
import PastEventTicket from "../pastEventTicket/PastEventTicket";
import { useTranslations, useLocale } from "next-intl";

interface PastEventPageProps {
  event: EventData;
}

export default function PastEventPage({ event }: PastEventPageProps) {
  const t = useTranslations("pastEventPage"); // Локализованные строки
  const locale = useLocale(); // Текущий язык (например, "ru" или "en")

  if (!event) {
    return <p className="text-gray-400">{t("eventNotFound")}</p>;
  }

  console.log("Past Event data:", event);

  // Получаем перевод события
  const translation = event.translations?.find((t) => t.locale === locale);

  // Выбираем данные: сначала из перевода, затем из оригинала
  const title = translation?.title || event.title;
  const location = translation?.location || event.location;
  const description = translation?.description || event.description;

  // Формируем массив ссылок на изображения
  const formattedImages = event.images?.map((img) => `http://localhost:8055/assets/${img}`) || [];

  // Очищаем описание от HTML-тегов
  const cleanDescription = description
    ? DOMPurify.sanitize(description.replace(/<\/?[^>]+(>|$)/g, ""))
    : "";

  return (
    <div className="w-full bg-black px-4 py-8 text-white flex flex-col items-center">
      {/* Блок с изображениями */}
      {formattedImages.length > 0 ? (
        <div className="w-full flex justify-center">
          <EventImages images={formattedImages} />
        </div>
      ) : (
        <p className="text-gray-400">{t("noImages")}</p>
      )}

      {/* Контейнер для текста и даты (в одну строчку) */}
      <div className="w-full max-w-[1140px] mt-6 flex flex-col sm:flex-row items-start justify-between gap-6">
        {/* Текстовый блок (Название + Описание) */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-base sm:text-lg">{cleanDescription}</p>
        </div>

        {/* Блок с датой */}
        {/* Блок с датой */}
        <div className="w-full flex justify-center sm:w-[356px] sm:justify-start">
          <PastEventTicket location={location} />
        </div>
      </div>
    </div>
  );
}
