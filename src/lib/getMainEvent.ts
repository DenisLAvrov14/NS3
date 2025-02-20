import { EventType } from "@/types/event";

export async function getMainEvent(): Promise<EventType | null> {
  try {
    const res = await fetch(
      "http://localhost:8055/items/events?filter[is_main_event][_eq]=true",
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch main event, status:", res.status);
      return null;
    }

    const data = await res.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error("Error fetching main event:", error);
    return null;
  }
}
