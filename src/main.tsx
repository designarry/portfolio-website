import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home/index.tsx'
import WorkDetail from './pages/works/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
