'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: number;
  Title: string;
  content: { type: string; children: { type: string; text: string }[] }[];
  buyLink?: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
  }, []);

  return (
    <div className="min-h-screen bg-[#FC7357] p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-black mb-6 text-center">События</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl text-black font-semibold">{post.Title}</h2>
              <p className="mt-2 text-gray-700">
                {post.content[0]?.children[0]?.text || 'Без описания'}
              </p>
              {post.buyLink && (
                <a
                  href={post.buyLink}
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