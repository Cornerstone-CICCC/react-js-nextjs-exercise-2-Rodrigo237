async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const user = await getUser(id);

  if (!user) {
    return <div className="p-10">User not found</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>
      <div className="space-y-2">
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <a href="/users" className="inline-block mt-6 text-blue-600 hover:underline">
        Back
      </a>
    </div>
  );
}
