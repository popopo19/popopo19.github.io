
import React, { useState } from 'react';
import VideoInfo from '../components/youtube-api/VideoInfo.js'
import keys from '../data/keys.js';
import './YoutubeAPI.css'

function YoutubeAPI (props) {

    let key = ""
    let  searchURL = "https://www.googleapis.com/youtube/v3/search?key=" + keys.youtube + "&part=snippet&type=video&maxResults=5&order=relevance&q="

    const [response, setResponse] = useState(0);
    const [searchResults, setSearchResults] = useState("");

    function search(text) {
        if (text.length >= 3) {

            let url = searchURL + formatQuery(text)

            try {

                fetch(url)
                    .then(res => res.text())
                    .then(text => setResponse(JSON.parse(text)))
                    .catch(error => console.error(error))
    
                if (response.items == undefined) {
                    return
                }
            } catch (e) {
                console.log(e)
            }

        }

        // display search results
        let titles = ["Hello", "Pewdiepie", "Led Fridman", "Joe Rogan", "Coffeezilla"]
        let elements = []
                
        // for (let i = 0; i < 5; i++) {
        for (let i = 0; i < response.items.length; i++) {

            elements.push(<VideoInfo info={response.items[i].snippet} />)
        }

        if (elements.length > 0) {
            setSearchResults(elements)
        } else {
            setSearchResults("")
        }


    }

    function formatQuery(text) {
        return text.replaceAll(" ", "+")
    }

  return (
    <div id="content">
      <h1>Search for youtube video</h1>
      <input type="text" placeholder='Search for a video' onChange={text => search(text.target.value)} ></input>
      <div id="video-container">
        {searchResults}
      </div>
    </div>
  )
}

export default YoutubeAPI;
