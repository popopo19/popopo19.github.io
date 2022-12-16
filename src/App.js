
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Blog from './page/Blog';
import About from './page/About'
import Layout from './page/Layout.js';
import YoutubeAPI from './page/YoutubeAPI.js'

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
                <Route path="/projects/youtube-api" element={<YoutubeAPI />} />
              </Route>
          </Routes>
        </BrowserRouter>
        
    )
    
  }
}

export default App;
