import './Experience.css'


function Experience(props) {
    return (
        <div id="exp">
            <img src={props.src} alt="Drone"/>
            <div>
                <header>{props.title}</header>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Experience