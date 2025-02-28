import { EventTranslation } from "./EventTranslation";

export interface EventTicketProps {
  date: string;
  time: string;
  location: string;
  buyLink?: string;
  translations?: EventTranslation[]; // Добавляем переводы
}
