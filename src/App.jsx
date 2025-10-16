import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        TailwindCSS is Working! 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        If you see blue text, gray background, and rounded button styles — it’s all good.
      </p>
      <button className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition">
        Test Button
      </button>
    </div>
  )
}

export default App
