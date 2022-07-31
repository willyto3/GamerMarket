import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './components'
import Home from './pages/Home'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
