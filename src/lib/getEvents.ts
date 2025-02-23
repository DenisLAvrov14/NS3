export async function getEvents() {
  const res = await fetch("http://localhost:8055/items/events", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Ошибка загрузки событий");
  }

  const data = await res.json();
  console.log("Полученные события:", data); // Логируем ответ

  return data.data; // ✅ Возвращаем только массив событий
}
