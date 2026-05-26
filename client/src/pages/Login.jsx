import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import Input from '../components/Input'
import Button from '../components/Button'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        {
          email,
          password
        }
      )

      localStorage.setItem(
        'token',
        response.data.token
      )

      alert(response.data.message)

      navigate('/dashboard')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Login failed'
      )
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-black">

      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg">

        <h1 className="text-4xl font-bold mb-3">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to continue your interview preparation.
        </p>

        <div className="space-y-5">

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Login"
            onClick={handleLogin}
          />

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