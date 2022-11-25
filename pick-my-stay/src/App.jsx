import { useState } from 'react'
import './App.css'
import Details from './views/Details'
import Home from './views/Home'
import Search from './views/Search'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Team from './views/Team'
import About from './views/About'
import Partner from './views/Partner'

function App() {
 

  return (
    <Router>
    <div className="App">
     {/* <ul className="App-header">
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/search">Search</Link>
       </li>
     </ul> */}
    <Routes>
          <Route exact path='/' element={ <Home/>}></Route>
          <Route path='/search/' element={<Search/>}></Route>
          <Route path='/details/:facilityCode' element={<Details/>}></Route>
          <Route exact path='/team' element={<Team/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/partner' element={<Partner/>}></Route>
   </Routes>
   </div>
</Router>
  )
}

export default App
