'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Post } from '../../models/Post';

export default function MainEvent() {
  const [mainEvent, setMainEvent] = useState<Post | null>(null);

  useEffect(() => {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => {
        const mainPost = data.data.find((post: Post) => post.isMainEvent);
        if (mainPost) setMainEvent(mainPost);
      });
  }, []);

  if (!mainEvent) return null;

  return (
    <div className="bg-[#FC7357] p-8 shadow-lg flex items-center justify-center mx-auto h-[350px]">
      <div className="rounded-lg flex items-center justify-center h-[250px]">
        {mainEvent.imageUrl && (
          <Image
            src={mainEvent.imageUrl}
            alt={mainEvent.Title}
            width={700}
            height={400}
            className="rounded-lg object-cover w-full h-full"
          />
        )}
      </div>
      <div className="w-4/5 h-full flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-black font-bold text-2xl">{mainEvent.Title}</h2>
        <p className="text-md text-gray-700 mt-4">
          {mainEvent.content[0]?.children[0]?.text || 'Описание отсутствует'}
        </p>
        {mainEvent.buyLink && (
          <a
            href={mainEvent.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-[#E07B67] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#d06a5c] transition-all text-lg"
          >
            Купить
          </a>
        )}
      </div>
    </div>
  );
}
