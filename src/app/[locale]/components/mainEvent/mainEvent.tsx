"use client";

import { useState, useEffect } from "react";
import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface MainEventProps {
  event: EventType;
}

export default function MainEvent({ event }: MainEventProps) {
  const t = useTranslations("mainEvent"); // Переводы для статичных строк
  const locale = useLocale(); // Текущий язык

  // Определяем ширину экрана
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    handleResize(); // Вызываем при монтировании
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ищем перевод под текущий язык
  const translation = event.translations?.find((t) => t.locale === locale);

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 bg-black">
      <div
        className="relative flex flex-col sm:flex-row items-center sm:justify-between w-full max-w-[1140px] px-4 sm:px-12 py-10 min-h-[450px] sm:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(http://localhost:8055/assets/${event.image})`,
          backgroundSize: isMobile ? "cover" : "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: `url(${isMobile ? "/ticket-mask-vertical.svg" : "/ticket-mask.svg"})`,
          maskImage: `url(${isMobile ? "/ticket-mask-vertical.svg" : "/ticket-mask.svg"})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {/* Контейнер для текста */}
        <div className="relative z-10 flex flex-col items-center sm:items-start w-full sm:w-[60%] text-white text-center sm:text-left">
          <div className="flex flex-col gap-2 sm:gap-4 w-full">
            {/* Тип события */}
            {event.eventType && (
              <p
                className="text-yellow-400 text-lg sm:text-[30px] italic"
                style={{ fontFamily: "Zangezi08_Trial", fontWeight: 400 }}
              >
                {event.eventType}
              </p>
            )}

            {/* Заголовок события */}
            <h1
              className="uppercase tracking-wide overflow-hidden text-4xl sm:text-6xl md:text-[80px]"
              style={{ fontFamily: "Murs Gothic Trial", fontWeight: 900, lineHeight: "1.1" }}
            >
              {translation?.title || event.title}
            </h1>

            {/* Кнопка Купить (центрирована) */}
            <div className="flex justify-center sm:justify-start w-full">
              <a
                href={event.buy_link}
                className="bg-yellow-500 text-black font-bold text-lg sm:text-[20px] px-6 py-3 max-w-[209px] flex items-center justify-center rounded-[15px] hover:bg-yellow-400 transition text-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("buyTickets")} на ${translation?.title || event.title}`}
              >
                {t("buyTickets")}
              </a>
            </div>
          </div>
        </div>

        {/* Дата (сдвинута влево на 15px) */}
        {event.date && (
          <div
            className="absolute bottom-[20px] right-[55px] sm:bottom-[30px] sm:right-[55px] transform rotate-6 bg-yellow-400 text-black px-[6px] sm:px-[10px] py-[1px] sm:py-[4px] text-center leading-tight"
            style={{
              fontWeight: "normal",
              fontSize: isMobile ? "30px" : "45px",
              lineHeight: isMobile ? "30px" : "40px",
            }}
          >
            {event.date.split(".").map((part, partIndex) => (
              <span key={partIndex} className="block">
                {part.split("").map((char, charIndex) => {
                  const globalIndex = partIndex === 0 ? charIndex + 1 : charIndex + 4;

                  return (
                    <span
                      key={charIndex}
                      style={{
                        fontFamily:
                          globalIndex === 2 || globalIndex === 5
                            ? "Murs Gothic Regular Italic"
                            : "Murs Gothic Bold Italic",
                        fontWeight: globalIndex === 2 || globalIndex === 5 ? "bold" : "normal",
                        fontSize: isMobile ? "30px" : "45px",
                        lineHeight: isMobile ? "30px" : "40px",
                        display: "inline-block",
                        filter: globalIndex === 2 || globalIndex === 5 ? "none" : "brightness(1.1)",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
                {partIndex === 0 && (
                  <span
                    style={{
                      fontFamily: "Murs Gothic Bold Italic",
                      fontWeight: "bold",
                      fontSize: isMobile ? "40px" : "60px",
                      lineHeight: "40px",
                      display: "inline-block",
                      marginLeft: "5px",
                      verticalAlign: "middle",
                    }}
                  >
                    .
                  </span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
