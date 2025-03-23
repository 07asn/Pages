import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-600 mb-8">This is a simple about page.</p>
      <Link href="/">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
