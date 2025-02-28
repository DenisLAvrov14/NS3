"use client";

import { EventTicketProps } from "@/types/EventTicketProps";
import React from "react";
import { useTranslations, useLocale } from "next-intl";

const EventTicket: React.FC<EventTicketProps> = ({
  date,
  time,
  location,
  buyLink,
  translations, // Передаем переводы событий
}) => {
  const t = useTranslations("eventTicket"); // Подключаем переводы для статичных строк
  const locale = useLocale(); // Получаем текущий язык

  // Ищем перевод под текущий язык
  const translation = translations?.find((t) => t.locale === locale);

  return (
    <div className="border-2 border-red-600 rounded-[40px] w-full max-w-[356px] min-h-[218px] flex flex-col justify-between p-4 sm:p-6 bg-black shadow-lg">
      {/* Дата и время */}
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="text-red-500 font-bold text-lg sm:text-xl">{date}</span>
        <span className="text-base sm:text-lg text-white">{time}</span>
      </div>

      {/* Локация */}
      <div className="flex items-center gap-2 sm:gap-4 mt-2 text-white">
        <span className="text-lg">📍</span>
        <span className="text-md">{translation?.location || location}</span>
      </div>

      {/* Кнопка покупки билетов */}
      {buyLink ? (
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-full max-w-[306px] h-[50px] bg-yellow-400 text-black text-lg sm:text-[20px] font-bold text-center rounded-[15px] flex items-center justify-center hover:bg-yellow-500 transition"
        >
          {t("buyTickets")}
        </a>
      ) : (
        <p className="text-gray-400 text-center mt-4">{t("noTickets")}</p>
      )}
    </div>
  );
};

export default EventTicket;
