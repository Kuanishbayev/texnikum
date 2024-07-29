import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ProtectedRoutes from '../utils/ProtectedRoutes'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
