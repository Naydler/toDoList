import { useState } from 'react'
import { Sidebar } from './components/layout/Sidebar'
import { HomePage } from './components/pages/HomePage'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6">
          <HomePage />
        </main>
      </div>
    </>
  )
}


export default App
