import { Link } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-black">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">

        <h1 className="text-4xl font-bold mb-3">
          Create Account
        </h1>

        <p className="text-zinc-400 mb-8">
          Start practicing AI-powered interviews today.
        </p>

        <div className="space-y-5">

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

          <Button text="Signup" />

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