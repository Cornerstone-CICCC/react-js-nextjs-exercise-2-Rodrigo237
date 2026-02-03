async function getUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function UserModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await getUser(id);

  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">User Info</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <a href="/users" className="block mt-6 text-center text-blue-600 hover:underline">
          Close
        </a>
      </div>
    </div>
  );
}
