import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6 text-white">
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link href="/login" className="hover:text-gray-400">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
