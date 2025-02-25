import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const locale = req.headers["accept-language"] || "en"; // Берём локаль из заголовков

  try {
    const response = await fetch(`http://localhost:8055/items/events/${id}?locale=${locale}`);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch event data" });
  }
}
