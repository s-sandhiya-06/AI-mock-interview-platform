import { Link } from 'react-router-dom'

function Navbar() {

  const token = localStorage.getItem('token')

  const handleLogout = () => {

    localStorage.removeItem('token')

    window.location.href = '/login'
  }

  return (

    <nav className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 gap-4 bg-zinc-900 border-b border-zinc-800">

      <h1 className="text-2xl font-bold text-blue-500">
        AI Interview
      </h1>

      <div className="flex gap-6 text-sm font-medium items-center">

        <Link
          to="/"
          className="hover:text-blue-400 transition"
        >
          Home
        </Link>

        {
          token ? (

            <>

              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>

              <Link
                to="/interview"
                className="hover:text-blue-400 transition"
              >
                Interview
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition-all"
              >
                Logout
              </button>

            </>

          ) : (

            <>

              <Link
                to="/login"
                className="hover:text-blue-400 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="hover:text-blue-400 transition"
              >
                Signup
              </Link>

            </>

          )
        }

      </div>

    </nav>
  )
}

export default Navbar