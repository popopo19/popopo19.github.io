import './App.css';
import React from 'react';
import profilepic from './profilepic.png';
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'
import about from './text/about.json'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        page :0
    };
  }

  render() {
    return (
      <div>
        <div id='nav'>
            <header>Soua Yang</header>
            <div id='nav-pages'>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a style={{border:'none'}} href="#project">Resume</a>
            </div>
        </div>
        <div id="content">
          <div id="about">
            <div id='intro'>
              <img src={profilepic} alt='profile'/>
              <p class='text'>
                
              </p>
            </div>

            <header>Skills</header>

            <div id='skills'>
              <Skill skill="Python"/> 
              <Skill skill="C++"/>
              <Skill skill="ROS"/>
              <Skill skill="Raspberry Pi"/>
              <Skill skill="React Native"/>
              <Skill skill="ReactJS"/>
              <Skill skill="Vim"/>
              <Skill skill="Javascript"/>
              <Skill skill="Github"/>
              <Skill skill="OpenCV"/>
            </div>

            <header>Experiences</header>

            <div id="experience">
              <Experience />
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default App;
