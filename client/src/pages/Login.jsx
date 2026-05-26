import { Link } from 'react-router-dom'
import Input from '../components/Input'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800">

        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to continue your interview preparation.
        </p>

        <div className="space-y-4">

          <Input
            type="email"
            placeholder="Enter your email"
          />

          <Input
            type="password"
            placeholder="Enter your password"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold">
            Login
          </button>

          <p className="text-sm text-zinc-400 text-center">
            Don’t have an account?{' '}
            <Link
              to="/signup"
              className="text-blue-500 hover:underline"
            >
              Signup
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login