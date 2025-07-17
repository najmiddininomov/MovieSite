
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Movies from './Pages/Movies/Movies'
import Inside from './Pages/InsideGenre/Inside'

import Footer from './Components/Footer/Footer'
function App() {

  return (
    <div className='App'>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path='/Inside' element={<Inside/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
