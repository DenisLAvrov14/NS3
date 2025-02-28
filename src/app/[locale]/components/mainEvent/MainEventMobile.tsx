"use client";

import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface MainEventProps {
  event: EventType;
}

export default function MainEventMobile({ event }: MainEventProps) {
  const t = useTranslations("mainEvent");
  const locale = useLocale();

  const translation = event.translations?.find((t) => t.locale === locale);

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 bg-black">
      <div
        className="relative flex flex-col items-center w-full max-w-[1140px] px-4 sm:px-12 py-10 min-h-[450px] sm:h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(http://localhost:8055/assets/${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: "url(/ticket-mask-vertical.svg)",
          maskImage: "url(/ticket-mask-vertical.svg)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {/* Контейнер для текста */}
        <div className="relative z-10 flex flex-col items-center w-full text-white text-center">
          <div className="flex flex-col gap-2 w-full">
            {event.eventType && (
              <p
                className="text-yellow-400 text-lg italic"
                style={{ fontFamily: "Zangezi08_Trial" }}
              >
                {event.eventType}
              </p>
            )}

            <h1
              className="uppercase tracking-wide overflow-hidden text-4xl sm:text-6xl md:text-[80px]"
              style={{ fontFamily: "Murs Gothic Trial", fontWeight: 900, lineHeight: "1.1" }}
            >
              {translation?.title || event.title}
            </h1>

            {/* Кнопка Купить (центрирована и шире) */}
            <div className="flex justify-center w-full">
              <a
                href={event.buy_link}
                className="bg-yellow-500 text-black font-bold text-lg sm:text-[20px] px-6 py-3 w-full max-w-[280px] flex items-center justify-center rounded-[15px] hover:bg-yellow-400 transition text-center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("buyTickets")} на ${translation?.title || event.title}`}
              >
                {t("buyTickets")}
              </a>
            </div>
          </div>
        </div>

        {/* Дата (адаптирована для мобильных устройств) */}
        {event.date && (
          <div
            className="absolute bottom-[20px] right-[40px] transform rotate-6 bg-yellow-400 text-black font-extrabold px-[8px] py-[5px] text-center leading-tight"
            style={{
              minHeight: "90px", // Увеличиваем высоту на 7px
            }}
          >
            {event.date.split(".").map((part, partIndex) => (
              <span key={partIndex} className="block">
                {part.split("").map((char, index) => {
                  const globalIndex = partIndex === 0 ? index + 1 : index + 4;

                  return (
                    <span
                      key={index}
                      style={{
                        fontFamily:
                          globalIndex === 2 || globalIndex === 5
                            ? "Murs Gothic Regular Italic"
                            : "Murs Gothic Bold Italic",
                        fontWeight: 1000,
                        fontSize: "45px",
                        lineHeight: "40px",
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
                      fontSize: "50px", // Сделал точку чуть больше
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
