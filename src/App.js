import './App.css';
import React from 'react';
import profilepic from './profilepic.png';
import Skill from './components/Skill.js'
import Experience from './components/Experience.js'

// Data
import aboutData from './data/about.js'
import droneContractImg from './data/drone_contractor.jpg'
import curiImg from './data/curi.png'
import discoImg from './data/disco.jpg'
import resume from './data/SouaYangResume.pdf'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        page :0
    };
  }

  render() {
    return (
      <div id='container'>
        <div id='nav'>
            <header>Soua Yang</header>
            <div id='nav-pages'>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a style={{border:'none'}} href={resume} target='_blank' rel="noreferrer">Resume</a>
            </div>
        </div>
        <div id="content">
          <div id="about">
            <div id='intro'>
              <img src={profilepic} alt='profile'/>
              <p class='text'>
                {aboutData.intro}
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
            <div id="exp-container">
              <Experience src={droneContractImg} title={aboutData.exp.contractor.title} description={aboutData.exp.contractor.des} />
              <Experience src={curiImg} title={aboutData.exp.research.title} description={aboutData.exp.research.des} />
              <Experience src={discoImg} title={aboutData.exp.disco.title} description={aboutData.exp.disco.des} />
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default App;
