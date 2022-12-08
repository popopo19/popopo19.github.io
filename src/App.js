import './App.css';
import React from 'react';
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'
import Card from './components/Card.js'
import Blog from './components/Blog'

// Data
import aboutData from './data/about.js'
import profilepic from './profilepic.png';
import resume from './data/SouaYangResume.pdf'
import projects from './data/projects'
import experiences from './data/experience';

class App extends React.Component {
  constructor(props){
    super(props);
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
      <div id='container'>
        <div id='nav'>
            <header>Soua Yang</header>
            <div id='nav-pages'>
                <a href="#about">About</a>
                <a href="#exp-container">Experiences</a>
                <a href="#projects">Projects</a>
                <a href="https://github.com/popopo19">GitHub</a>
                <a href="https://zalk.itch.io/">Itch.io</a>
                <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
            </div>
        </div>
        <div id="content">
          <div id="about">
            <div id='intro'>
              <img src={profilepic} alt='profile'/>
              <p className='text'>
                {aboutData}
              </p>
            </div>
            <header id="section-header">Skills</header>
            <div id='skills'>
              <Skill skill="Python"/> 
              <Skill skill="C++"/>
              <Skill skill="ROS"/>
              <Skill skill="Raspberry Pi"/>
              <Skill skill="React Native"/>
              <Skill skill="ReactJS"/>
              <Skill skill="Javascript"/>
              <Skill skill="Unity"/>
              <Skill skill="Agile"/>
            </div>
            <header id="section-header">Experiences</header>
            <div id="exp-container">
              {this.showExperiences()}
            </div>
          </div>
          <div id='projects'>
            <header id="section-header">Projects</header>
            <div id='projects' className='projects'>

              {this.showProjects()}
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default App;
