import Input from '../components/Input'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800">

        <h1 className="text-3xl font-bold mb-2">
          Create Account
        </h1>

        <p className="text-zinc-400 mb-8">
          Start practicing AI-powered interviews today.
        </p>

        <div className="space-y-4">

          <Input
            type="text"
            placeholder="Enter your name"
          />

          <Input
            type="email"
            placeholder="Enter your email"
          />

          <Input
            type="password"
            placeholder="Create a password"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold">
            Signup
          </button>
          <p className="text-sm text-zinc-400 text-center">
  Already have an account?{' '}
  <Link
    to="/login"
    className="text-blue-500 hover:underline"
  >
    Login
  </Link>
</p>

        </div>

      </div>

    </div>
  )
}

export default Signup