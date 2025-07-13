'use client'
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="h-16 items-center bg-transparent  text-white flex justify-between px-4">
      <div className="logo font-bold text-xl">GetMEAChai!</div>

      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
       

        {session?.user ? (
          <>
            <button
              onClick={() => signOut()}
              className="cursor-pointer text-white bg-gradient-to-l from-purple-500 via-purple-600 to-purple-700 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2 text-center">
              Login
            </button>
          </Link>
        )}
      </ul>
    </nav>
  )
}
