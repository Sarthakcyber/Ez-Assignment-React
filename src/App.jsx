import React from 'react'
import Home from './components/home'
import Stories from './components/stories'
import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/stories" element={<Stories/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App