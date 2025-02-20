export interface EventType {
    id: number;
    title: string;
    description: string;
    image: string;
    buy_link: string;
    is_main_event: boolean;
    is_past_event: boolean;
    date: string;  // Дата события
    time: string;  // Время события
    location: string; // Место проведения
    eventType: string; // Тип события
}
