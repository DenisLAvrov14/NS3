"use client";

import React from "react";
import { useTranslations } from "next-intl";

interface PastEventTicketProps {
  location: string;
}

const PastEventTicket: React.FC<PastEventTicketProps> = ({ location }) => {
  const t = useTranslations("pastEventTicket"); // Подключаем переводы

  return (
    <div className="border-2 border-red-600 rounded-[40px] w-[356px] h-[218px] flex flex-col justify-between p-6 bg-black shadow-lg">
      {/* Статус мероприятия */}
      <div className="text-red-500 font-bold text-xl">{t("eventFinished")}</div>

      {/* Локация */}
      <div className="flex items-center gap-2 mt-2 text-white">
        <span className="text-lg">📍</span>
        <span className="text-md">{location}</span>
      </div>

      {/* Кнопка фотоотчета */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto block w-[306px] h-[50px] bg-yellow-400 text-black text-[20px] font-bold text-center rounded-[15px] flex items-center justify-center hover:bg-yellow-500 transition"
      >
        {t("photoReport")}
      </a>
    </div>
  );
};

export default PastEventTicket;
