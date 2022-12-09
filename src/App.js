
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Experience from './components/Experience.js'
import Card from './components/Card.js'

// Pages
import Blog from './page/Blog';
import About from './page/About'

// Data
import resume from './data/SouaYangResume.pdf'
import projects from './data/projects'
import experiences from './data/experience';
import Layout from './page/Layout.js';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
              </Route>
          </Routes>
        </BrowserRouter>
        
    )
    
  }
}

export default App;
