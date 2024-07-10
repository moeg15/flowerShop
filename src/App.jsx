import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import About from './componets/About'
import Where from './componets/Where'
import Contact from './componets/Contact'
function App() {


  return (
    <>
    
     <BrowserRouter>
     <Navbar />
      <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/where' element={<Where/>}/>
        <Route path='/contact' element={<Contact/>} />


      </Routes>
     
     
     </BrowserRouter>


    </>
  )
}

export default App
