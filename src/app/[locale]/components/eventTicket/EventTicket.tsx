import { EventTicketProps } from "@/types/EventTicketProps";
import React from "react";

const EventTicket: React.FC<EventTicketProps> = ({ date, time, location, buyLink }) => {
  return (
    <div className="border-2 border-red-600 rounded-[40px] w-[356px] h-[218px] flex flex-col justify-between p-6 bg-black shadow-lg">
      {/* Дата и время */}
      <div className="flex justify-between items-center">
        <span className="text-red-500 font-bold text-xl">{date}</span>
        <span className="text-lg text-white">{time}</span>
      </div>

      {/* Локация */}
      <div className="flex items-center gap-2 mt-2 text-white">
        <span className="text-lg">📍</span>
        <span className="text-md">{location}</span>
      </div>

      {/* Кнопка покупки билетов */}
      {buyLink ? (
        <a
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto block w-[306px] h-[50px] bg-yellow-400 text-black text-[20px] font-bold text-center rounded-[15px] flex items-center justify-center hover:bg-yellow-500 transition"
        >
          Купить билеты
        </a>
      ) : (
        <p className="text-gray-400 text-center mt-4">Билетов нет</p>
      )}
    </div>
  );
};

export default EventTicket;
