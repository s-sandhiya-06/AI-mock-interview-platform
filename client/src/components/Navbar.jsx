import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-zinc-900 border-b border-zinc-800">
      <h1 className="text-2xl font-bold text-blue-500">
        AI Interview
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-400 transition">
          Home
        </Link>

        <Link to="/login" className="hover:text-blue-400 transition">
          Login
        </Link>

        <Link to="/signup" className="hover:text-blue-400 transition">
          Signup
        </Link>
      </div>
    </nav>
  )
}

export default Navbar