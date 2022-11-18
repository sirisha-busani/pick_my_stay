import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,Link
} from "react-router-dom";
import { Home, Search } from './components';


import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import ProductCard from './components/ProductCard';
import SearchDetails from './components/SearchDetails';

const options = [
  {name: 'Swedish', value: 'sv'},
  {name: 'English', value: 'en'},
  {
      type: 'group',
      name: 'Group name',
      items: [
          {name: 'Spanish', value: 'es'},
      ]
  },
];

const App = () => {
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
                 <Route exact path='/search' element={<Search/>}></Route>
                 <Route exact path='/details' element={<SearchDetails/>}></Route>
          </Routes>
          </div>
       </Router>
    
  )
}

export default App