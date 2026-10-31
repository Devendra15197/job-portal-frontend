import './App.css'
import Jobs from './pages/user/jobs/Jobs'
import JobDeatails from './pages/user/jobs/JobDeatails'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Jobs />} />
        <Route path='/jobs/:id' element={<JobDeatails />} />
      </Routes>
    </div>
  )
}

export default App
