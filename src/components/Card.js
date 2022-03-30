import './Card.css'
import projectsData from '../data/projects.js'

// Images
import discordImg from '../data/discord-logo.png'
import treasureImg from '../data/TreasureQuest.PNG'

function shorten(desc, amount) {
    if (desc.length < amount) {
      return desc;
    } else {
      return desc.substring(0, amount);
    }
  }

function Card(props) {
  var title;
  var desc;
  var img;

  switch (props.card) {
    case 'treasure-project':
      title = projectsData.treasureProj.title;
      desc = projectsData.treasureProj.des;
      img = treasureImg;
      break;
    case 'discord-bot':
      title = projectsData.discordBot.title;
      desc = projectsData.discordBot.des;
      img = discordImg;
      break;
    default:
      title = "Error";
      desc = "Card name is incorrect or not set. Please check where you defined element Card.";
      img = treasureImg;
      break;
  }

  console.log("Hellos: "+title)

  return (
      <div id="card">
          <img src={img} alt="card"/>
          <header>{title}</header>
          <p>{shorten(desc, 350)}</p>
      </div>
  )
}

export default Card