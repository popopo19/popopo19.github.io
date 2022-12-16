import './Card.css'
import { Link } from 'react-router-dom';

function shorten(desc, amount) {
    if (desc.length < amount) {
      return desc;
    } else {
      return desc.substring(0, amount);
    }
  }

function Card(props) {

  function getLinkElement(link) {
    console.log(link)
    if (link[0] === "/") {
      return <Link to={link}>Project Link</Link>
    } else {
      return <a href={link} target="_blank" >Project Link</a>
    }
  }

  return (
      <div id="card">
          <div>
          <img src={props.img} alt="card"/>
            <header>{props.title}</header>
            <p>{shorten(props.description, 350)}</p>
          </div>
          {getLinkElement(props.link)}
          
      </div>
  )
}

export default Card