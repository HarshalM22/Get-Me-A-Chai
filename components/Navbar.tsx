
export default function Navbar() {
  return (
    <nav className= " h-16 items-center bg-transparent text-white flex justify-between px-4">
       
       <div className="logo font-bold">GetMEAChai!</div>
       
        <ul className="flex justify-between gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login </li>
        </ul>
        
      
    </nav>
  )
}
