import { EventTranslation } from "./EventTranslation";

export interface PastEventType {
  id: number;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  translations?: EventTranslation[]; // Добавляем переводы
}
