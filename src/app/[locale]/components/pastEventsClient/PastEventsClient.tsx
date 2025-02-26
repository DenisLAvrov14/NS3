"use client";

import { useState } from "react";
import { PastEventType } from "@/types/pastEventType";
import PastEventCard from "../pastEventCard/PastEventCard";
import { useTranslations } from "next-intl";

type PastEventsClientProps = {
  events: PastEventType[];
};

const PastEventsClient: React.FC<PastEventsClientProps> = ({ events }) => {
  const t = useTranslations("pastEvents"); // Подключаем переводы

  const INITIAL_VISIBLE = 4;
  const LOAD_MORE = 4;

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const hasMoreEvents = events.length > INITIAL_VISIBLE && visibleCount < events.length;

  const showMoreEvents = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE, events.length));
  };

  return (
    <section className="relative py-16 bg-[#111] text-white text-center">
      {/* Заголовок */}
      <h2 className="text-[70px] font-bold font-golos mb-12">{t("title")}</h2>

      <div className="relative max-w-[1140px] mx-auto">
        {/* Карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {events.slice(0, visibleCount).map((event, index) => (
            <PastEventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Затемнение */}
        {hasMoreEvents && (
          <div className="absolute left-0 bottom-[-50px] w-full h-[200px] bg-gradient-to-b from-transparent to-[#000] pointer-events-none z-30"></div>
        )}
      </div>

      {/* Кнопка */}
      {hasMoreEvents && (
        <div className="relative mt-16 z-20">
          <button
            onClick={showMoreEvents}
            className="text-[18px] text-red-500 underline hover:text-red-700 transition-all"
          >
            {t("loadMore")}
          </button>
        </div>
      )}
    </section>
  );
};

export default PastEventsClient;
