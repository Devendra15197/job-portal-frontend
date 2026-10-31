import './App.css'
import Jobs from './pages/user/jobs/Jobs'
import JobDeatails from './pages/user/jobs/JobDeatails'
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import UserLayout from './Layout/UserLayout'

function App() {

  return (
    <div>
      <Routes>
        {/* User Routes  */}
        <Route element={<UserLayout />}>
          <Route path='/' element={<Jobs />} />
          <Route path='/jobs/:id' element={<JobDeatails />} />
        </Route>

        {/* Employer Routes  */}

        {/* admin Routes  */}
      </Routes>
    </div>
  )
}

export default App
