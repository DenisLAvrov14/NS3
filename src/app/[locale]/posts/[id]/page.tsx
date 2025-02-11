// app/posts/[id]/page.tsx
import { useParams } from 'next/navigation';

export default function PostPage() {
  const { id } = useParams();
  return <h1>Пост {id}</h1>;
}
