import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { useAuth } from '../store/Auth'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const { user, isLoading } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (response.ok) {
      const data = await response.json()
      console.log('Registration successful:', data)
      navigate('/')
    } else {
      const errorData = await response.json()
      console.error('Registration failed: ', errorData)
      alert('Failed to register: ' + errorData.message)
    }
  }

  if (user && !isLoading) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <section className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="mt-[10rem] mx-auto flex flex-col justify-center items-center max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>

        <form
          className="mx-auto mb-0 mt-8 max-w-sm w-full space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter password"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              You already have an account?{' '}
              <Link className="underline" to="/login">
                Log In
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
