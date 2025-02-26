"use client";

import { EventType } from "@/types/event";
import { useTranslations } from "next-intl";

interface EventsClientProps {
  events: EventType[];
}

export default function EventsComingSoon({ events }: EventsClientProps) {
  const t = useTranslations("events"); // Теперь можно использовать переводы

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-[1140px] mx-auto">
        {/* Заголовок */}
        <h2 className="text-[70px] font-bold mb-8">{t("title")}</h2>

        {/* Проверяем, есть ли события */}
        {events.length > 0 ? (
          <div className="flex flex-col gap-4">
            {events
              .filter((event) => !event.is_past_event) // Фильтруем будущие события
              .map((event) => (
                <div
                  key={event.id}
                  className="grid grid-cols-[2fr_70px_70px_1fr_170px] items-center border-b border-gray-700 pb-4"
                >
                  {/* Название */}
                  <h3 className="text-[40px] italic text-red-600">{event.title}</h3>

                  {/* Дата */}
                  <span className="text-[18px] text-red-600 font-bold">{event.date}</span>

                  {/* Время */}
                  <span className="text-[18px]">{event.time}</span>

                  {/* Место проведения */}
                  <span className="text-[18px] text-white">{event.location}</span>

                  {/* Кнопка "Купить билет" */}
                  <a
                    href={event.buy_link}
                    className="bg-yellow-500 text-black font-bold text-[18px] px-4 py-2 rounded-md hover:bg-yellow-400 transition text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("buyTicket")} на ${event.title}`}
                  >
                    {t("buyTicket")}
                  </a>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-400">{t("noEvents")}</p> // Если событий нет
        )}
      </div>
    </section>
  );
}
