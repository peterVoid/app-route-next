"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: any } = useSession();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between items-center">
      <h1 className="text-white text-2xl">Navbar</h1>
      <ul className="flex gap-3 ">
        <Link href={"/"}>
          <li
            className={`cursor-pointer ${
              pathname === "/" ? "text-blue-800" : "text-white"
            }`}
          >
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li
            className={`cursor-pointer ${
              pathname === "/about" ? "text-blue-800" : "text-white"
            }`}
          >
            About
          </li>
        </Link>
        <Link href={"/about/profile"}>
          <li
            className={`cursor-pointer ${
              pathname === "/about/profile" ? "text-blue-800" : "text-white"
            }`}
          >
            Profile
          </li>
        </Link>
      </ul>
      <div>{session?.user.email}</div>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-white py-2 px-5 rounded-lg font-semibold cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="bg-white py-2 px-5 rounded-lg font-semibold cursor-pointer"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
