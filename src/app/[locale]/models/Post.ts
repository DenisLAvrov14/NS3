export interface Post {
    id: number;
    Title: string;
    content: { type: string; children: { type: string; text: string }[] }[];
    buyLink?: string;
    imageUrl?: string;
    isMainEvent: boolean; // Добавляем новое поле
  }