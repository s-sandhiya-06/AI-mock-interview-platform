import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Interview from './pages/Interview'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/interview" element={<Interview />} />
  </Routes>
</div>
  )
}
export default App
