import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Home
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa eaque molestias, placeat officia fugit? Hic, maiores commodi nostrum fuga exercitationem praesentium consequatur nulla libero doloremque consectetur odit error dolores.
      </p>

      <Link href="/users" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        View Users
      </Link>
    </main>
  );
}
