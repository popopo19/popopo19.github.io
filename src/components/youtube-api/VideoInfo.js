import './VideoInfo.css'

function VideoInfo(props) {


  return (
      <div id="video-info-container">

          <img src={props.info.thumbnails.default.url} />

          <div id="video-info">
            <h1>{props.info.title}</h1>
            <p id="channel-name">Channel: {props.info.channelTitle}</p>
            <p>{props.info.description}</p>
          </div>
      </div>
  )
}

export default VideoInfo