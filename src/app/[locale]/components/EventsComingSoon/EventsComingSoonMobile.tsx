"use client";

import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface Props {
  events: EventType[];
}

export default function EventsComingSoonMobile({ events }: Props) {
  const t = useTranslations("events");
  const locale = useLocale();

  return (
    <section className="w-full bg-black text-white py-8 px-4">
      <div className="max-w-[1140px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">{t("title")}</h2>

        {events.length > 0 ? (
          <div className="flex flex-col gap-4">
            {events
              .filter((event) => !event.is_past_event)
              .map((event) => {
                const translation = event.translations?.find((t) => t.locale === locale);

                return (
                  <div key={event.id} className="flex flex-col border-b border-gray-700 pb-4">
                    {/* Название */}
                    <h3 className="text-2xl italic text-red-600">
                      {translation?.title || event.title}
                    </h3>

                    {/* Дата, время, место (в строку) */}
                    <div className="flex flex-row items-center gap-2 text-lg">
                      <span className="text-red-600 font-bold">{event.date}</span>
                      <span>{event.time}</span>
                      <span className="text-white">{translation?.location || event.location}</span>
                    </div>

                    {/* Кнопка "Купить билет" */}
                    <a
                      href={event.buy_link}
                      className="bg-yellow-500 text-black font-bold text-lg px-4 py-3 rounded-[15px] hover:bg-yellow-400 transition text-center w-full mt-2"
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
