import { PastEventType } from "@/types/pastEventType";
import DOMPurify from "isomorphic-dompurify"; // Защита от XSS

const colorMap = ["bg-blue-600", "bg-green-500", "bg-red-600", "bg-yellow-400"];

const PastEventCard: React.FC<{ event: PastEventType; index: number }> = ({ event, index }) => {
  const formattedImageUrl = event.imageUrl
    ? `http://localhost:8055/assets/${event.imageUrl}`
    : "/fallback-image.jpg";

  // Очищаем описание от HTML тегов и форматируем текст
  const cleanDescription = event.description
    ? DOMPurify.sanitize(event.description.replace(/<\/?[^>]+(>|$)/g, ""))
    : "";

  return (
    <div className="flex flex-col items-start">
      {" "}
      {/* Контейнер для карточки и описания */}
      <div
        key={event.id}
        className={`relative w-[560px] h-[250px] rounded-[40px] overflow-hidden shadow-lg ${colorMap[index % 4]}`}
      >
        {/* Фоновая картинка */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${formattedImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Градиент затемнения */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Название мероприятия */}
        <h2 className="absolute left-6 top-6 text-white font-murs text-[40px] font-extrabold leading-tight">
          {event.title}
        </h2>

        {/* Локация */}
        <p className="absolute left-6 bottom-6 text-white font-golos text-[18px] font-medium">
          {event.location}
        </p>

        {/* Дата */}
        <div className="absolute right-6 bottom-6 w-[83px] h-[28px] bg-yellow-400 rotate-[-6deg] flex items-center justify-center rounded-md shadow-md">
          <span className="text-black font-murs text-[20px] font-black uppercase">
            {event.date}
          </span>
        </div>
      </div>
      {/* Краткое описание под карточкой, теперь слева */}
      {cleanDescription && (
        <p
          className="text-gray-300 text-sm mt-3 max-w-[560px] text-left self-start overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2, // Ограничение в 1.5 строки
            lineHeight: "1.5em",
            maxHeight: "3.1em", // Увеличенная высота
            textOverflow: "ellipsis",
          }}
        >
          {cleanDescription}
        </p>
      )}
    </div>
  );
};

export default PastEventCard;
