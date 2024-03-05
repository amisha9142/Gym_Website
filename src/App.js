import React from 'react';
import { BrowserRouter as Router , Routes , Route, Form } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Classes from './Classes';
import Header from './Header';
import Home from './Home';
import FormComponent from './Form';
import Login from './Login';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Classes' element={<Classes/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/Form' element={<FormComponent/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
