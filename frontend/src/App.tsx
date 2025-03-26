import './App.css'
import Homepage from './components/Homepage'
import Menu from './components/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
