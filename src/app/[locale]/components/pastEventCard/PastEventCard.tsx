"use client";

import { PastEventType } from "@/types/pastEventType";
import DOMPurify from "isomorphic-dompurify"; // Защита от XSS
import { useLocale } from "next-intl";
import Link from "next/link";

const colorMap = ["bg-blue-600", "bg-green-500", "bg-red-600", "bg-yellow-400"];

const PastEventCard: React.FC<{ event: PastEventType; index: number }> = ({ event, index }) => {
  const locale = useLocale(); // Текущий язык

  // Получаем перевод события
  const translation = event.translations?.find((t) => t.locale === locale);

  // Выбираем данные: сначала из перевода, затем из оригинала
  const title = translation?.title || event.title;
  const location = translation?.location || event.location;
  const description = translation?.description || event.description;
  const eventUrl = `/${locale}/past-event/${event.id}`;

  const formattedImageUrl = event.imageUrl
    ? `http://localhost:8055/assets/${event.imageUrl}`
    : "/fallback-image.jpg";

  // Очищаем описание от HTML-тегов
  const cleanDescription = description
    ? DOMPurify.sanitize(description.replace(/<\/?[^>]+(>|$)/g, ""))
    : "";

  return (
    <div className="flex flex-col items-center sm:items-start px-4 sm:px-0">
      {/* Контейнер для карточки и описания */}
      <Link
        href={eventUrl}
        className="relative w-full max-w-[560px] min-h-[200px] sm:h-[250px] rounded-[40px] overflow-hidden shadow-lg block"
      >
        {/* Фоновая картинка */}
        <div
          className={`absolute inset-0 ${colorMap[index % 4]}`}
          style={{
            backgroundImage: `url(${formattedImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Градиент затемнения */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Название мероприятия (ссылка) */}
        <h2 className="absolute left-4 sm:left-6 top-4 sm:top-6 text-white font-murs text-2xl sm:text-[40px] font-extrabold leading-tight hover:underline">
          {title}
        </h2>

        {/* Локация (ссылка) */}
        <p className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 text-white font-golos text-sm sm:text-[18px] font-medium hover:underline">
          {location}
        </p>

        {/* Дата (ссылка) */}
        <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 w-[70px] sm:w-[83px] h-[24px] sm:h-[28px] bg-yellow-400 rotate-[-6deg] flex items-center justify-center rounded-md shadow-md hover:bg-yellow-300 transition">
          <span className="text-black font-murs text-base sm:text-[20px] font-black uppercase">
            {event.date}
          </span>
        </div>
      </Link>

      {/* Краткое описание под карточкой (ссылка) */}
      {cleanDescription && (
        <Link href={eventUrl}>
          <p
            className="text-gray-300 text-xs sm:text-sm mt-2 sm:mt-3 max-w-[560px] text-center sm:text-left self-start overflow-hidden hover:underline"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Ограничение в 2 строки
              lineHeight: "1.4em",
              maxHeight: "2.8em",
              textOverflow: "ellipsis",
            }}
          >
            {cleanDescription}
          </p>
        </Link>
      )}
    </div>
  );
};

export default PastEventCard;
