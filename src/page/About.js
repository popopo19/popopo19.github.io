import './About.css';
import React from 'react';

import Skill from '../components/Skill.js'
import Experience from '../components/Experience.js'
import Card from '../components/Card.js'

// Data
import aboutData from '../data/about.js'
import profilepic from '../profilepic.png';
import projects from '../data/projects'
import experiences from '../data/experience';

class About extends React.Component {
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
      let markdown = experiences[keys[i]]['markdown']

      experiencesElements.push(<Experience src={image} title={title} description={description} markdown={markdown} />)
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
      let link = projects[keys[i]]['link']

      projectElements.push(<Card title={title} img={image} description={description} link={link} />)
    }

    return projectElements
  }

  render() {
    return (
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
                <Skill skill="Statistics w/ R"/>
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
    )
    
  }
}

export default About;
