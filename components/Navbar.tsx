import Link from "next/link";

export default function Navbar() {
  return (
    <nav className= " h-16 items-center bg-transparent text-white flex justify-between px-4">
       
       <div className="logo font-bold text-xl">GetMEAChai!</div>
       
        <ul className="flex justify-between items-center gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
           <Link href={"/login"}> <button  className="cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center ">Login</button></Link>
        </ul>
        
      
    </nav>
  )
}
