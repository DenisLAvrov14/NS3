// app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    await sendMessage(message);
  }

  async function sendMessage(message: string) {
    'use server';
    // Логика отправки сообщения на сервер
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Отправить</button>
    </form>
  );
}
