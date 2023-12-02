import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Welcome from './Components/Home/Welcome'
import Mycode from './Components/Mycodes/Mycode'
import Sidenav from './Components/Sidenav/Sidenav'
//import Introduce from './Components/Introduce/Introduce'
import Educate from './Components/Educate/Educate'
import Contact from './Components/Contact/Contact'


function App() {
  return (
    <>
    <Router>
    <Sidenav/>
      <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route> 
           <Route path="/mycode" element={<Mycode/>}></Route>
          <Route path="/education" element={<Educate/>}></Route>
      </Routes>
    </Router>
    </>
  )
}
export default App