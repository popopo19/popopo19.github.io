
import droneContractImg from './images/drone_contractor.jpg'
import curiImg from './images/curi.png'
import discoImg from './images/disco.jpg'
import resideoImg from './images/resideo.jpg'

// test

const experiences = {
    "resideo": {
        "title": "Firmware Engineering Intern at Resideo",
        "description": "During the summer of 2022, I worked in a team at Resideo as a firmware engineer. My team was tasked with developing the software for the next thermostat in development. The agile methodology was used by my team, and so I gave updates on my work daily. As an intern, I was given multiple tasks ranging from creating tools for the development process, fixing bugs, and implementing the UI of the thermostat.",
        "image": resideoImg
    },
    "contractor": {
        "title": "Drone Programming Contractor",
        "description": "I worked with TLC Precision, a millimeter-wave product company, in programming a drone to capture another drone. I worked on the project with another person. I was in charge of the programming. On the drone was a single-board computer which I used to direct the drone in its maneuvers. All programming was done in Python with the ROS library.",
        "image": droneContractImg
    },
    "disco": {
        "title": "DiSCO Intern",
        "description": "DiSCO is a department at St. Olaf College that provides the necessary tools for students working on creative projects. As a student worker in this department, I helped students record podcasts, make videos using Adobe Premiere, and did a variety of small tasks that contributed to giving DiSCO a welcoming atmosphere. I also worked on an independent project developing a video tutorial on the Unity Game Engine, a game development software.",
        "image": discoImg
    },
    "research": {
        "title": "Undergraduate Researcher",
        "description": "In the summer of 2021, I was involved in undergraduate research at St. Olaf College on classifying artificial mutations from cancerous mutations by taking a machine learning approach with Bayes’ Theorem, a mathematical formula for calculating conditional probabilities. I worked with two other undergraduate students and a professor on implementing our classification model using R, a statistical programming language.",
        "image": curiImg
    }
}

export default experiences