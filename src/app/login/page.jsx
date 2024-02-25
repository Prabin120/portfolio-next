"use client"
// import { FormEvent } from 'react'
// import { useRouter } from 'next/router'
 
export default function LoginPage() {
 
  async function handleSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
 
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
 
    if (response.ok) {
    //   router.push('/')
    } else {
      // Handle errors
    }
  }
 
  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 py-10 border border-black bg-slate-700">
        <h1 className="text-2xl my-6">This login is for only owner</h1>
        <h3 className="text-center">This one I want ugly......</h3>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button className="bg-slate-500 py-2" type="submit">Login</button>
        </form>
    </div>
  )
}