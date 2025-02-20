import { EventType } from "@/types/event";

interface MainEventProps {
  event: EventType;
}

export default function MainEvent({ event }: MainEventProps) {
  return (
    <section className="w-full flex justify-center py-16 bg-[#111111]">
      <div
        className="relative flex items-center justify-between max-w-[1140px] w-full shadow-lg main-event px-12 py-10 h-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(http://localhost:8055/assets/${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          maskImage: `url('/ticket-mask.svg')`,
          WebkitMaskImage: `url('/ticket-mask.svg')`,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        {/* Контейнер для текста */}
        <div className="relative z-10 flex flex-col justify-between w-[60%] text-white">
          {/* Тип события */}
          {event.eventType && (
            <p
              className="mt-2 text-yellow-400"
              style={{
                fontFamily: "Zangezi08_Trial",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "30px",
                lineHeight: "30px",
                letterSpacing: "0%",
              }}
            >
              {event.eventType}
            </p>
          )}

          {/* Заголовок события (фиксируем высоту) */}
          <h1
            className="uppercase tracking-wide overflow-hidden"
            style={{
              fontFamily: "Murs Gothic Trial",
              fontWeight: 900,
              fontSize: "80px",
              lineHeight: "75px",
              letterSpacing: "0%",
              maxHeight: "150px", // Чтобы не расширял весь контейнер
            }}
          >
            {event.title}
          </h1>

          {/* Кнопка Купить */}
          <div className="mt-4">
            <a
              href={event.buy_link}
              className="bg-yellow-500 text-black font-bold text-[20px] px-6 py-3 w-[209px] h-[50px] flex items-center justify-center rounded-[15px] hover:bg-yellow-400 transition text-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Купить билет на ${event.title}`}
            >
              Купить билеты
            </a>
          </div>
        </div>

        {/* Дата в правом нижнем углу (уменьшил padding, ближе к цифрам) */}
        {event.date && (
          <div className="absolute bottom-[30px] right-[40px] transform rotate-6 bg-yellow-400 text-black font-extrabold px-[10px] py-[4px] text-center leading-tight">
            <span
              className="block"
              style={{
                fontFamily: "Murs Gothic Trial",
                fontWeight: 1000,
                fontSize: "60px",
                lineHeight: "50px",
              }}
            >
              {event.date.split(".")[0]}.
            </span>
            <span
              className="block"
              style={{
                fontFamily: "Murs Gothic Trial",
                fontWeight: 1000,
                fontSize: "60px",
                lineHeight: "50px",
              }}
            >
              {event.date.split(".")[1]}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
