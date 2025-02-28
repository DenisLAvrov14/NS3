"use client";

import { EventType } from "@/types/event";
import { useTranslations, useLocale } from "next-intl";

interface MainEventProps {
  event: EventType;
}

export default function MainEventDesktop({ event }: MainEventProps) {
  const t = useTranslations("mainEvent");
  const locale = useLocale();

  const translation = event.translations?.find((t) => t.locale === locale);

  return (
    <section className="w-full flex justify-center py-12 sm:py-16 bg-black">
      <div
        className="relative flex flex-row items-center justify-between w-full max-w-[1140px] px-4 sm:px-12 py-10 min-h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(http://localhost:8055/assets/${event.image})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          WebkitMaskImage: "url(/ticket-mask.svg)",
          maskImage: "url(/ticket-mask.svg)",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      >
        {/* Контейнер для текста */}
        <div className="relative z-10 flex flex-col items-start w-[60%] text-white">
          <div className="flex flex-col gap-4 w-full">
            {event.eventType && (
              <p
                className="text-yellow-400 text-[30px] italic"
                style={{ fontFamily: "Zangezi08_Trial" }}
              >
                {event.eventType}
              </p>
            )}

            <h1
              className="uppercase tracking-wide text-6xl md:text-[80px]"
              style={{ fontFamily: "Murs Gothic Trial", fontWeight: 900, lineHeight: "1.1" }}
            >
              {translation?.title || event.title}
            </h1>

            {/* Кнопка Купить */}
            <a
              href={event.buy_link}
              className="bg-yellow-500 text-black font-bold text-[20px] px-6 py-3 max-w-[209px] flex items-center justify-center rounded-[15px] hover:bg-yellow-400 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t("buyTickets")} на ${translation?.title || event.title}`}
            >
              {t("buyTickets")}
            </a>
          </div>
        </div>

        {/* Дата в правом нижнем углу (для десктопа) */}
        {event.date && (
          <div
            className="absolute bottom-[30px] right-[40px] transform rotate-6 bg-yellow-400 text-black font-extrabold px-[10px] py-[6px] text-center leading-tight"
            style={{
              minHeight: "90px", // Увеличиваем высоту на 7px (79px → 86px)
            }}
          >
            {event.date.split(".").map((part, partIndex) => (
              <span key={partIndex} className="block">
                {part.split("").map((char, index) => {
                  const globalIndex = partIndex === 0 ? index : index + 3; // Учитываем вторую строку

                  return (
                    <span
                      key={index}
                      style={{
                        fontFamily:
                          globalIndex === 1 || globalIndex === 4
                            ? "Murs Gothic Regular Italic"
                            : "Murs Gothic Bold Italic",
                        fontWeight: 1000,
                        fontSize: "60px",
                        lineHeight: "50px",
                        display: "inline-block",
                      }}
                    >
                      {char}
                    </span>
                  );
                })}
                {partIndex === 0 && (
                  <span
                    style={{
                      fontFamily: "Murs Gothic Regular Italic",
                      fontWeight: 1000,
                      fontSize: "60px",
                      lineHeight: "50px",
                      display: "inline-block",
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
