import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Login Page</h1>
      <input type="text" placeholder="Username" className="border p-2 mb-2 w-64" />
      <input type="password" placeholder="Password" className="border p-2 mb-4 w-64" />
      <button className="px-4 py-2 bg-green-500 text-white rounded">Login</button>
      <Link href="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Back to Home</button>
      </Link>
    </div>
  );
}