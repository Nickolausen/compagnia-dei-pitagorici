import EventDetails from './pages/EventDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'

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