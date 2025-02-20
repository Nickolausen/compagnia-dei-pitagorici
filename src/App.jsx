import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import EventDetails from './pages/EventDetails'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path="/:event_url" element={<EventDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>        
    </Router>
  )
}

export default App