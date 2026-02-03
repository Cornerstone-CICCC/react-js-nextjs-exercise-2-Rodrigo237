import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  if (!res.ok) throw new Error("Error");
  return res.json();
}

export default async function UsersPage() {
  const { users } = await getUsers();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <ul className="space-y-3">
        {users.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
              {user.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
