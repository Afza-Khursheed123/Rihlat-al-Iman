import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Developers from './Developers.jsx'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Hadith from './Hadith.jsx'
import Chapters from './Chapters.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapters/:categoryName" element={<Chapters />} />
        <Route path="/hadith/:categoryName/:bookNumber" element={<Hadith />} />
        <Route path="/developer" element={<Developers/>} />

      </Routes>
    </Router>
  );
}
export default App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
