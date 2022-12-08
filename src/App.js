import './App.css';
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

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      blog: 'resideo'
    }
  }

  showExperiences() {

    let experiencesElements = []

    let keys = Object.keys(experiences)

    for (let i = 0; i < keys.length; i++) {
      let title = experiences[keys[i]]['title']
      let description = experiences[keys[i]]['description']
      let image = experiences[keys[i]]['image']

      experiencesElements.push(<Experience src={image} title={title} description={description} />)
    }

    return experiencesElements
  }

  showProjects() {

    let projectElements = []

    let keys = Object.keys(projects)

    for (let i = 0; i < keys.length; i++) {
      let title = projects[keys[i]]['title']
      let description = projects[keys[i]]['description']
      let image = projects[keys[i]]['image']

      projectElements.push(<Card title={title} img={image} description={description} />)
    }

    return projectElements
  }

  render() {
    return (
        <BrowserRouter>
          <div id='container'>
            <div id='nav'>
                <header>Soua Yang</header>
                <div id='nav-pages'>
                    <Link to="/blog">
                    <span onClick={() => this.setState({blog: "../data/blogs/resideo.md"})}>Blogs</span>
                    </Link>
                    <Link to="/">About</Link>
                    <a href="#exp-container">Experiences</a>
                    <a href="#projects">Projects</a>
                    <a href="https://github.com/popopo19">GitHub</a>
                    <a href="https://zalk.itch.io/">Itch.io</a>
                    <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
                </div>
                <div id='nav-pages-scroll' style={{visibility: 'hidden'}}>
                    <a href="#about">About</a>
                    <a href="#exp-container">Experiences</a>
                    <a href="#projects">Projects</a>
                    <a href="https://github.com/popopo19">GitHub</a>
                    <a href="https://zalk.itch.io/">Itch.io</a>
                    <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
                </div>
            </div>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="blog" element={<Blog markdown={this.state.blog} />} />
                </Routes>
          </div>
        </BrowserRouter>
        
    )
    
  }
}

export default App;
