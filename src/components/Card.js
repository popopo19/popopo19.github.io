import './Card.css'
import projectsData from '../data/projects.js'

function shorten(desc, amount) {
    if (desc.length < amount) {
      return desc;
    } else {
      return desc.substring(0, amount);
    }
  }

function Card(props) {

  return (
      <div id="card">
          <div>
          <img src={props.img} alt="card"/>
            <header>{props.title}</header>
            <p>{shorten(props.description, 350)}</p>
          </div>
          <a href={props.link} target="_blank" >Project Link</a> 
      </div>
  )
}

export default Card