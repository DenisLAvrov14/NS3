"use client";

import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface EventsClientProps {
  events: EventType[];
}

export default function EventsComingSoon({ events }: EventsClientProps) {
  const t = useTranslations("events"); // Переводы для статичных строк
  const locale = useLocale(); // Текущий язык (например, "ru" или "en")

  return (
    <section className="w-full bg-black text-white py-8 sm:py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        {/* Заголовок */}
        <h2 className="text-3xl sm:text-[50px] md:text-[70px] font-bold mb-6 sm:mb-8">
          {t("title")}
        </h2>

        {/* Проверяем, есть ли события */}
        {events.length > 0 ? (
          <div className="flex flex-col gap-4 sm:gap-6">
            {events
              .filter((event) => !event.is_past_event) // Фильтруем будущие события
              .map((event) => {
                // Ищем перевод события по текущему языку
                const translation = event.translations?.find((t) => t.locale === locale);

                return (
                  <div
                    key={event.id}
                    className="grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_70px_70px_1fr_170px] items-center border-b border-gray-700 pb-4 gap-4"
                  >
                    {/* Название */}
                    <h3 className="text-2xl sm:text-[40px] italic text-red-600">
                      {translation?.title || event.title} {/* Если нет перевода, берём оригинал */}
                    </h3>

                    {/* Блок даты, времени и места (адаптирован под планшеты) */}
                    <div className="flex flex-wrap md:flex-row items-center gap-2">
                      <span className="text-lg sm:text-[18px] text-red-600 font-bold">
                        {event.date}
                      </span>

                      <span className="text-lg sm:text-[18px]">{event.time}</span>

                      <span className="text-lg sm:text-[18px] text-white">
                        {translation?.location || event.location}
                      </span>
                    </div>
                    {/* Кнопка "Купить билет" */}
                    <div className="w-full flex justify-center md:justify-end">
                      <a
                        href={event.buy_link}
                        className="bg-yellow-500 text-black font-bold text-lg sm:text-[18px] px-4 py-2 sm:px-6 sm:py-3 rounded-[15px] hover:bg-yellow-400 transition text-center w-full max-w-[440px] md:max-w-[250px] lg:max-w-[170px]"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t("buyTicket")} на ${translation?.title || event.title}`}
                        style={{
                          height: "50px", // Фиксированная высота
                          borderRadius: "15px", // Закругленные углы
                        }}
                      >
                        {t("buyTicket")}
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="text-gray-400">{t("noEvents")}</p> // Если событий нет
        )}
      </div>
    </section>
  );
}
