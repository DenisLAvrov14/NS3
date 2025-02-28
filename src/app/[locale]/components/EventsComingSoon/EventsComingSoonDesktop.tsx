"use client";

import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface Props {
  events: EventType[];
}

export default function EventsComingSoonDesktop({ events }: Props) {
  const t = useTranslations("events");
  const locale = useLocale();

  return (
    <section className="w-full bg-black text-white py-8 sm:py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-3xl sm:text-[50px] md:text-[70px] font-bold mb-6 sm:mb-8">
          {t("title")}
        </h2>

        {events.length > 0 ? (
          <div className="flex flex-col gap-4 sm:gap-6">
            {events
              .filter((event) => !event.is_past_event)
              .map((event) => {
                const translation = event.translations?.find((t) => t.locale === locale);

                return (
                  <div
                    key={event.id}
                    className="grid grid-cols-[2fr_70px_70px_1fr_170px] items-center border-b border-gray-700 pb-4 gap-4"
                  >
                    {/* Название */}
                    <h3 className="text-2xl sm:text-[40px] italic text-red-600">
                      {translation?.title || event.title}
                    </h3>

                    {/* Дата */}
                    <span className="text-lg sm:text-[18px] text-red-600 font-bold">
                      {event.date}
                    </span>

                    {/* Время */}
                    <span className="text-lg sm:text-[18px]">{event.time}</span>

                    {/* Место */}
                    <span className="text-lg sm:text-[18px] text-white">
                      {translation?.location || event.location}
                    </span>

                    {/* Кнопка "Купить билет" */}
                    <a
                      href={event.buy_link}
                      className="bg-yellow-500 text-black font-bold text-lg px-6 py-3 rounded-[15px] hover:bg-yellow-400 transition text-center w-full max-w-[170px]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("buyTicket")}
                    </a>
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="text-gray-400">{t("noEvents")}</p>
        )}
      </div>
    </section>
  );
}
