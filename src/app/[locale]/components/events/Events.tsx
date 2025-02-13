'use client'

import { useEffect, useState } from 'react';
import { Post } from '../../models/Post';

export default function Events() {
  const [events, setEvents] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => {
        // Исключаем главное событие
        const filteredEvents = data.data.filter((post: Post) => !post.isMainEvent);
        setEvents(filteredEvents);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#FC7357] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">События</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl text-black font-semibold">{event.Title}</h2>
              <p className="mt-2 text-gray-700">
                {event.content[0]?.children[0]?.text || 'Без описания'}
              </p>
              {event.buyLink && (
                <a
                  href={event.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Купить
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}