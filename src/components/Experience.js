import './Experience.css'

import { Link } from 'react-router-dom'

function cutText(text, length) {
    return text.substring(0, length) + (text.length > length ? "..." : "")
}

function Experience(props) {

    return (
        <div id="exp">
            <img src={props.src} alt="Drone"/>
            <div>
                <header>{props.title}</header>
                <p>{cutText(props.description, 350)}</p>
                <Link to={{pathname: '/blog/' + props.markdown}} >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Experience