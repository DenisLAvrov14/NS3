// app/users/page.tsx
export default async function UsersPage() {
    const res = await fetch('https://api.example.com/users');
    const users = await res.json();
  
    return (
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  