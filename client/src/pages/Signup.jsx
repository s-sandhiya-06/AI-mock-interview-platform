import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

import Input from '../components/Input'
import Button from '../components/Button'

function Signup() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignup = async () => {

    try {

      const response = await axios.post(
        'http://localhost:5000/api/auth/signup',
        {
          name,
          email,
          password
        }
      )

      alert(response.data.message)

      navigate('/login')

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Signup failed'
      )
    }
  }

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Signup"
            onClick={handleSignup}
            />

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